import './style.css'
import { AlertUi } from '@/components'
import { useCart } from '@/hooks/useCart'
import { useState, useEffect, FC } from 'react'
import { Item, itemsParaCompra } from '@/utils/utils'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography, TextField, Grid } from '@mui/material'
import { ProductDetailSkeleton } from './components/ProductDetailSkeleton'

export const ProductDetail: FC = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [alertOpen, setAlertOpen] = useState(false)
  const [product, setProduct] = useState<Item | null>(null)

  useEffect(() => {
    setLoading(true)
    const productId = Number(id)
    const foundProduct = itemsParaCompra.find((item) => item.id === productId)
    setTimeout(() => {
      setProduct(foundProduct || null)
      setLoading(false)
    }, 3000)
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
      setAlertOpen(true)
      setTimeout(() => {
        setAlertOpen(false)
      }, 3000)
    }
  }

  if (loading) {
    return <ProductDetailSkeleton />
  }

  if (!product) {
    return (
      <AlertUi
        severity="error"
        text="Produto não encontrado."
        open={true}
        onClose={() => navigate(-1)}
      />
    )
  }

  return (
    <Grid container spacing={4} className="product-detail">
      <Grid item xs={12} sm={6}>
        <img
          src="https://i.zst.com.br/thumbs/12/2d/39/1282779957.jpg"
          alt={product.nome}
          className="product-detail-image"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">{product.nome}</Typography>
        <Typography variant="h5" color="textSecondary">
          R$ {product.preco}
        </Typography>
        <Typography variant="body1" paragraph>
          {product.descricao}
        </Typography>
        <TextField
          label="Quantidade"
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value))
          }}
          InputProps={{ inputProps: { min: 1 } }}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          fullWidth
        >
          Comprar
        </Button>
      </Grid>
      <AlertUi
        severity="success"
        text="Produto adicionado ao carrinho."
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      />
    </Grid>
  )
}
