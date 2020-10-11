import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('should render a header with login button when user is not logged in', () => {

    render(<Header
      userLoggedIn={false}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )
    //SETUP
      // Render the Header with correct props passed in
    expect(screen.getByText('Login')).toBeInTheDocument();
  })

  it('should render a header with logout button when user is logged in', () => {
    render(<Header
      userLoggedIn={true}
      changeLogin={() => {}}
      clickLogout={() => {}}
      />
    )
    //SETUP
      // Render the Header with correct props passed in
    expect(screen.getByText('Logout')).toBeInTheDocument();
  })
})