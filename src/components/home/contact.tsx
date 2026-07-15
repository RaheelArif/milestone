import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import { StyledButton } from '@/components/styled-button'

const contactItems = [
  {
    icon: <LocationOnIcon />,
    label: 'Address',
    value: 'Abuzar Colony, Waterworks Road, Jaranwala',
    href: undefined,
  },
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '0315-4297472',
    href: 'https://wa.me/923154297472',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '041-4313500',
    href: 'tel:0414313500',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'Info.milestonejrw@gmail.com',
    href: 'mailto:Info.milestonejrw@gmail.com',
  },
  {
    icon: <LanguageIcon />,
    label: 'Website',
    value: 'milestonejrw.pk',
    href: 'https://milestonejrw.pk',
  },
]

const HomeContact: FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(243,246,252,0.95) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: { xs: 36, md: 50 },
              fontWeight: 600,
              mb: 1.5,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Admission{' '}
            <Typography component="span" sx={{ color: 'primary.main', fontSize: 'inherit', fontWeight: 'inherit' }}>
              Open
            </Typography>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Learn skills and start earning — visit us in Jaranwala or message us on WhatsApp today.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {contactItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.label}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.88)',
                  borderRadius: 3,
                  boxShadow: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: 3,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    mx: 'auto',
                    mb: 1.5,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  {item.label}
                </Typography>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    underline="hover"
                    sx={{ color: 'secondary.main', fontWeight: 600, wordBreak: 'break-word' }}
                  >
                    {item.value}
                  </Link>
                ) : (
                  <Typography sx={{ color: 'secondary.main', fontWeight: 600 }}>{item.value}</Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <StyledButton
            color="primary"
            size="large"
            variant="contained"
            onClick={() => window.open('https://wa.me/923154297472', '_blank')}
          >
            Chat on WhatsApp
          </StyledButton>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeContact
