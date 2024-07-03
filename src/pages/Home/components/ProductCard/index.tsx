import './style.css'
import { Item } from '@/utils/utils'
import { FC, useState } from 'react'
import { AlertUi } from '@/components'
import { Button, Typography } from '@mui/material'

interface ProductCardProps {
  product: Item
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [alertOpen, setAlertOpen] = useState(false)

  const handleAddProductInCart = () => {
    setAlertOpen(true)
    console.log(alertOpen)
    setTimeout(() => {
      setAlertOpen(false)
    }, 3000)
  }

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

          <Button
            className="buy-button"
            variant="contained"
            color="primary"
            onClick={handleAddProductInCart}
          >
            Comprar
          </Button>
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
