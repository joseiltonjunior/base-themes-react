import React, { useCallback } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from './hooks/usePersistedState'
import Header from './components/Header'
import GlobalStyle from './styles/global'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [setTheme, theme.title])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1>Junior Ferreira</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
