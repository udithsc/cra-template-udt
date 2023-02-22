import apiSlice from '../../store/api.slice';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getPostsByUserId: builder.query({
      query: (id) => `/posts/?userId=${id}`,
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    addNewPost: builder.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = extendedApiSlice;
