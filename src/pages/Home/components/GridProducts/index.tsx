import './style.css'
import { Item } from '@/utils/utils'
import { FC, useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { ProductCard, ProductCardSkeleton } from '../'

interface ProductsProps {
  productArray: Item[]
}

export const GridProducts: FC<ProductsProps> = ({ productArray }) => {
  const [loading, setLoading] = useState(true)
  const [showProducts, setShowProducts] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setShowProducts(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="products-container">
      {loading && <ProductCardSkeleton />}
      {!loading && showProducts && (
        <Grid container spacing={12}>
          {productArray.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
