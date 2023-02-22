/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setCredentials, logOut } from '../features/auth/auth.slice';
import { AppState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as AppState).auth;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data) {
      const { user } = (api.getState() as AppState).auth;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Post'],
  endpoints: () => ({}),
});

export default apiSlice;
