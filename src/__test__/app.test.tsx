import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from "../App"

test("click increase button", () => {
    const appEl = render(<App />)

    const IncreaseButton = appEl.getByTestId('increasing-btn');

    fireEvent.click(IncreaseButton,{})

    const increasedNumber = screen.getByTestId('increasing-btn').textContent;

    expect(increasedNumber).toBe('count is 3')
})
