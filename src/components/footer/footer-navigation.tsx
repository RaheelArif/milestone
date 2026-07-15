import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  { label: 'Graphic Designing', path: 'popular-course' },
  { label: 'Digital Marketing', path: 'popular-course' },
  { label: 'Web Development', path: 'popular-course' },
  { label: 'Spoken English / IELTS', path: 'popular-course' },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'WhatsApp: 0315-4297472', path: 'https://wa.me/923154297472' },
  { label: 'Phone: 041-4313500', path: 'tel:0414313500' },
  { label: 'Info.milestonejrw@gmail.com', path: 'mailto:Info.milestonejrw@gmail.com' },
  { label: 'milestonejrw.pk', path: 'https://milestonejrw.pk' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  const isExternal = path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')

  if (isExternal) {
    return (
      <MuiLink
        href={path}
        underline="hover"
        target={path.startsWith('http') ? '_blank' : undefined}
        rel={path.startsWith('http') ? 'noopener noreferrer' : undefined}
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    )
  }

  return (
    <Link href={path.startsWith('#') ? path : `/#${path}`} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Courses" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path + label} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path + label} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Contact" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path + label} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
