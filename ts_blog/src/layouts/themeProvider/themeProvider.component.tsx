import React, { FC, useState, SetStateAction, Dispatch } from 'react'

export interface CustomThemeProviderProps {}

export interface IMyCustomTheme {
  mainColor: string
}

export interface IThemes {
  [key: string]: IMyCustomTheme
}

export interface IThemeContext {
  currentThemeKey: string
  currentTheme: IMyCustomTheme
  changeTheme: (theme: string) => Dispatch<SetStateAction<string>>
}

const myThemes: IThemes = {
  primary: {
    mainColor: '#9D4C4C',
  },
  secondary: {
    mainColor: 'green',
  },
}

export const myThemeContext = React.createContext(null)

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = (props) => {
  const [currentThemeKey, setCurrentThemeKey] = useState('primary')

  return (
    <myThemeContext.Provider
      value={{
        currentThemeKey,
        currentTheme: myThemes[currentThemeKey],
        changeTheme: (theme: string) => setCurrentThemeKey(theme),
      }}
    >
      {props.children}
    </myThemeContext.Provider>
  )
}

export default ({ element }: { element: React.FC }) => (
  <CustomThemeProvider>{element}</CustomThemeProvider>
)
