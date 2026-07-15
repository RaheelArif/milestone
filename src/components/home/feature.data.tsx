import React, { ReactNode } from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule'
import SchoolIcon from '@mui/icons-material/School'
import ConstructionIcon from '@mui/icons-material/Construction'
import HandshakeIcon from '@mui/icons-material/Handshake'
import WorkIcon from '@mui/icons-material/Work'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Flexible Classes',
    description: 'Choose class timings that fit your routine — learn without putting life on hold.',
    icon: <ScheduleIcon />,
  },
  {
    title: 'Expert Mentoring',
    description: 'Learn from experienced instructors who guide you step by step toward real skills.',
    icon: <SchoolIcon />,
  },
  {
    title: 'Hands-On Projects',
    description: 'Build practical projects so you gain portfolio-ready experience, not just theory.',
    icon: <ConstructionIcon />,
  },
  {
    title: 'Practical Trainings',
    description: 'Training focused on freelancing and online earning — skills you can use from day one.',
    icon: <HandshakeIcon />,
  },
  {
    title: 'Career Support',
    description: 'Get guidance on freelancing profiles, interviews, and how to start making money online.',
    icon: <WorkIcon />,
  },
  {
    title: 'Certified Diplomas',
    description: 'Earn recognized certificates that strengthen your CV and professional profile.',
    icon: <WorkspacePremiumIcon />,
  },
]
