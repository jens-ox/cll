import { type PropsWithChildren } from 'react'
import './styles.css'

export const Button: React.FC<PropsWithChildren> = ({ children }) => (
  <button className="button bg-indigo-400/50 hover:bg-indigo-400/60 text-indigo-900 font-medium transition hover:shadow">
    {children}
  </button>
)
