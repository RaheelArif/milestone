import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton
        disableHoverEffect={true}
        variant="outlined"
        onClick={() => window.open('https://wa.me/923154297472', '_blank')}
      >
        WhatsApp
      </StyledButton>
      <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={350}>
        <StyledButton disableHoverEffect={true}>Admission Open</StyledButton>
      </ScrollLink>
    </Box>
  )
}

export default AuthNavigation
