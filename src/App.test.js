// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SlickORM title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SlickORM/i);
    expect(titleElement).toBeInTheDocument();
});
