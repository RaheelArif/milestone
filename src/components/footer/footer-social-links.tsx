import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LanguageIcon from '@mui/icons-material/Language'

const socialLinks = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/milestone_jrw/',
    icon: <InstagramIcon fontSize="small" />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/milestonejrw',
    icon: <FacebookIcon fontSize="small" />,
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/923154297472',
    icon: <WhatsAppIcon fontSize="small" />,
  },
  {
    name: 'Website',
    link: 'https://milestonejrw.pk',
    icon: <LanguageIcon fontSize="small" />,
  },
]

interface SocialLinkItemProps {
  item: (typeof socialLinks)[number]
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
      }}
      href={item.link}
    >
      {item.icon}
    </Link>
  </Box>
)

const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        {socialLinks.map((item) => (
          <SocialLinkItem key={item.name} item={item} />
        ))}
      </Box>
    </Box>
  )
}

export default SocialLinks
