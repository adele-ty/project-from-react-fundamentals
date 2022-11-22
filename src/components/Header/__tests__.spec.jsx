import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('view Header', () => {
  it('renders correctly', () => {
    render(<Router><Routes><Route path="/" component={Header}></Route></Routes></Router>)
    expect(screen.queryAllByRole('div')).not.toBeNull()
  })
})
