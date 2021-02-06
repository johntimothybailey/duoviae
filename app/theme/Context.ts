import { Context, createContext } from 'react'

export const ThemeContext: Context<any> = createContext({
  theme: 'dark',
  toggleTheme: () => {}
})
