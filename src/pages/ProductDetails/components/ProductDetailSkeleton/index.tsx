import './style.css'
import React from 'react'
import { Skeleton, Grid, Box } from '@mui/material'

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <Grid container spacing={4} className="product-detail-skeleton">
      <Grid item xs={12} sm={6}>
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="80%" height={100} />
        <Box mt={2}>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Box>
      </Grid>
    </Grid>
  )
}
