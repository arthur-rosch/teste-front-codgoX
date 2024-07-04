import './style.css'
import { useCart } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { AccountCircle, ShoppingCart } from '@mui/icons-material/'
import { AppBar, Toolbar, Typography, Paper, Badge } from '@mui/material'

interface HeaderProps {
  text: string
}

export function Header({ text }: HeaderProps) {
  const { state } = useCart()
  const navigate = useNavigate()

  return (
    <AppBar position="sticky" className="app-bar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="typography-title">
          {text}
        </Typography>
        <div className="buttons-container">
          <Paper className="paper-container" onClick={() => navigate('/cart')}>
            <Badge badgeContent={state.items.length} color="primary">
              <ShoppingCart sx={{ color: '#1B3B89', bgcolor: 'white' }} />
            </Badge>
          </Paper>
          <Paper className="paper-container">
            <AccountCircle
              sx={{ color: 'white', bgcolor: '#1B3B89', borderRadius: 4 }}
            />
            <Typography variant="body1" className="typography-text">
              Olá, Arthur
            </Typography>
          </Paper>
        </div>
      </Toolbar>
    </AppBar>
  )
}
