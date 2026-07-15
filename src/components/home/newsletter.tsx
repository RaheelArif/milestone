import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'transparent', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #072A66 0%, #0B3D91 50%, #1A56B8 100%)',
            borderRadius: 6,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
            color: 'primary.contrastText',
            boxShadow: 4,
            border: '1px solid rgba(158, 192, 255, 0.25)',
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              mb: 1,
              fontSize: { xs: 32, md: 44 },
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Stay Updated with Milestone
          </Typography>
          <Typography sx={{ mb: 6, opacity: 0.92 }}>
            Get updates on new batches, admissions, and courses — learn to earn with us.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" color="light">
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
