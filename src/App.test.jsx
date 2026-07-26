import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders hello message test', () => {
    render(<App />)

    expect(screen.getByText(/hello anil sidhu/i)).toBeInTheDocument()
  })
})