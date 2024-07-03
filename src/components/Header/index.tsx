import { AccountCircle, ShoppingCart } from '@mui/icons-material/'
import { AppBar, Toolbar, Typography, Paper, Badge } from '@mui/material'
import './style.css'
import { useState } from 'react'

interface HeaderProps {
  text: string
}

export function Header({ text }: HeaderProps) {
  const [cartItemsCount] = useState(3)

  return (
    <AppBar position="sticky" className="app-bar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="typography-title">
          {text}
        </Typography>
        <div className="buttons-container">
          <Paper className="paper-container">
            <Badge badgeContent={cartItemsCount} color="primary">
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
