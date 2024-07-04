import './style.css'
import { Item } from '@/utils/utils'
import { FC, useState } from 'react'
import { AlertUi } from '@/components'
import { useCart } from '@/hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { Button, Typography, Grid } from '@mui/material'

interface ProductCardProps {
  product: Item
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart, state } = useCart()
  const [alertOpen, setAlertOpen] = useState(false)

  const handleAddProductInCart = () => {
    addToCart(product, 1)
    setAlertOpen(true)
    setTimeout(() => {
      setAlertOpen(false)
    }, 3000)
  }

  const handleViewDetails = () => {
    navigate('/product/' + product.id)
  }

  console.log(state)

  return (
    <>
      <Button className="product-card">
        <header className="product-card-header">
          <img
            loading="lazy"
            src={'https://i.zst.com.br/thumbs/12/2d/39/1282779957.jpg'}
            alt="Product"
            className="product-card-image"
          />
        </header>
        <div className="product-card-details">
          <div className="product-card-title">
            <Typography variant="body1" className="product-card-price">
              R$ {product.preco}
            </Typography>
            <Typography variant="h6" className="product-card-title-text">
              {product.nome}
            </Typography>
          </div>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Button
                className="buy-button"
                variant="contained"
                color="primary"
                onClick={handleAddProductInCart}
                fullWidth
              >
                Comprar
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                className="buy-button"
                variant="contained"
                color="primary"
                onClick={handleViewDetails}
                fullWidth
              >
                Info
              </Button>
            </Grid>
          </Grid>
        </div>
      </Button>
      <AlertUi
        severity="success"
        text="Produto adicionado no carrinho"
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      />
    </>
  )
}
