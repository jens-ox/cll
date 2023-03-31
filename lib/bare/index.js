import { createElement } from 'react'

export const Button = ({ children }) => createElement("button", {
  style: { backgroundColor: 'steelblue' }
}, children)