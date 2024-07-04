import './style.css'
import { useState, FC } from 'react'
import { AlertUi } from '@/components'
import { useCart } from '@/hooks/useCart'
import { PurchaseModal } from './components/SuccessPurchase'
import { Grid, Typography, Button, Card, CardContent } from '@mui/material'

export const Cart: FC = () => {
  const { state, removeFromCart, getTotalPrice, clearCart, addToCart } =
    useCart()
  const [alertOpen, setAlertOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId)
    setAlertOpen(true)
    setTimeout(() => {
      setAlertOpen(false)
    }, 3000)
  }

  const handleIncreaseQuantity = (itemId: number) => {
    addToCart(state.items.find((item) => item.id === itemId)!, 1)
  }

  const handleDecreaseQuantity = (itemId: number) => {
    const currentItem = state.items.find((item) => item.id === itemId)!
    if (currentItem.quantidade > 1) {
      addToCart(currentItem, -1)
    }
  }

  const handleCheckout = () => {
    setModalOpen(true)
    clearCart()
    setTimeout(() => {
      setModalOpen(false)
    }, 3000)
  }

  // Exemplo de informações gerais
  const enderecoEntrega = 'Rua Exemplo, 123'
  const estimativaEntrega = '5 dias úteis'
  const valorFrete = 'R$ 10,00'

  return (
    <Grid container spacing={4} className="cart-container">
      <Grid item xs={12} md={8} className="cart-items-container">
        <div className="scrollable-content">
          {state.items.map((item) => (
            <Card key={item.id} className="cart-item">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img
                      src="https://i.zst.com.br/thumbs/12/2d/39/1282779957.jpg"
                      alt={item.nome}
                      className="cart-item-image"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">{item.nome}</Typography>
                    <Typography variant="body1">
                      <Button onClick={() => handleDecreaseQuantity(item.id)}>
                        -
                      </Button>
                      {item.quantidade}
                      <Button onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </Button>
                      {' x R$ '}
                      {item.preco}
                    </Typography>
                    <Typography variant="body1">{item.descricao}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remover
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className="cart-summary">
          <CardContent>
            <Typography variant="h5">Resumo do Pedido</Typography>
            <Typography variant="body1">Total: R$ {getTotalPrice()}</Typography>
            <Typography variant="body1">
              Endereço de Entrega: {enderecoEntrega}
            </Typography>
            <Typography variant="body1">
              Estimativa de Entrega: {estimativaEntrega}
            </Typography>
            <Typography variant="body1">
              Valor do Frete: {valorFrete}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              fullWidth
              className="checkout-button"
            >
              Finalizar Compra
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <AlertUi
        severity="success"
        text="Produto removido do carrinho"
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      />
      <PurchaseModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Grid>
  )
}
