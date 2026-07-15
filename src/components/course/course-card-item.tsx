import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          transition: (theme) => theme.transitions.create(['box-shadow', 'transform']),
          '&:hover': {
            boxShadow: 3,
            transform: 'translateY(-4px)',
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 2, height: 56, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-course" value={item.rating} max={5} sx={{ color: 'secondary.main', mr: 1 }} readOnly />
            <Typography component="span" variant="h5">
              ({item.ratingCount})
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="primary.main">
              Admission Open
            </Typography>
          </Box>
          <IconButton
            color="primary"
            sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseCardItem
