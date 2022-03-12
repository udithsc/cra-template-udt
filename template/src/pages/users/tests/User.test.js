import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../../store/configureStore';
import User from '../User';

describe('User Page', () => {
  let store;

  const MockUser = function () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <User />
        </BrowserRouter>
      </Provider>
    );
  };

  beforeEach(() => {
    store = configureStore();
  });

  it('should contain search field', () => {
    render(<MockUser />);
    const linkElement = screen.getByPlaceholderText('Search...');
    expect(linkElement).toBeInTheDocument();
  });

  it('should contain add new button', () => {
    render(<MockUser />);
    const btnElement = screen.getByText(/ADD NEW/i);
    expect(btnElement).toBeInTheDocument();
  });
});
