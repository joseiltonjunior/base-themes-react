import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from './styles'

interface HeaderProps {
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <h2>Junior Ferreira</h2>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.1, colors.secundary)}
        offColor={shade(0.5, colors.primary)}
      />
    </Container>
  )
}

export default Header
