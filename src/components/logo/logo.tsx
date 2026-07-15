import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontWeight: 700,
          fontSize: { xs: '1.45rem', md: '1.75rem' },
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
        }}
      >
        Mile<span>stone</span>
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: 'text.secondary',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          mt: 0.35,
          fontSize: { xs: '0.58rem', md: '0.62rem' },
          fontWeight: 600,
        }}
      >
        Institute of Professional Studies
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
