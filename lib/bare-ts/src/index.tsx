import { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren> = ({ children }) => (
  <button style={{ backgroundColor: 'steelblue' }}>{children}</button>
)