import { type PropsWithChildren } from 'react'
import './styles.css'

export const Button: React.FC<PropsWithChildren> = ({ children }) => <button className="button">{children}</button>
