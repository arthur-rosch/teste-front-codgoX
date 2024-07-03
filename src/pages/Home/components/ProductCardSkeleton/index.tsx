import { FC } from 'react'
import { Grid, Skeleton } from '@mui/material'
import './style.css'

export const ProductCardSkeleton: FC = () => {
  const productArray = [...Array(5)]

  return (
    <Grid container spacing={12}>
      {productArray.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <div className="product-card-skeleton">
            <Skeleton variant={'rectangular'} width="100%" height={120} />
            <div className="product-card-details-skeleton">
              <div className="product-card-title-skeleton">
                <Skeleton variant="text" width={50} height={40} />
                <Skeleton variant="text" width={50} height={40} />
              </div>
              <Skeleton variant="rectangular" width="80%" height={20} />
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}
