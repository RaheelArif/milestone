import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(160deg, #072A66 0%, #0B3D91 55%, #1348A0 100%)',
        py: { xs: 6, md: 10 },
        color: 'primary.contrastText',
        borderTop: '3px solid',
        borderColor: 'rgba(158, 192, 255, 0.55)',
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: 32, md: 40 },
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Milestone
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 1 }}>
                Institute of Professional Studies — Learn To Earn. Practical digital skills, freelancing, and language
                courses in Jaranwala.
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Abuzar Colony, Waterworks Road, Jaranwala
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
