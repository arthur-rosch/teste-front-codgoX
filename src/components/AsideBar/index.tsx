import { NavLink } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { ViewInAr, ExitToApp, AddShoppingCart } from '@mui/icons-material'
import { Box, Button, List, ListItem, Typography } from '@mui/material'
import './style.css'

export const AsideBar: FC = () => {
  const [currentScreen, setCurrentScreen] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () =>
      setCurrentScreen(window.location.pathname)
    window.addEventListener('popstate', handleLocationChange)

    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const handleLogout = () => {}

  const navigationLinks = [
    {
      path: '/',
      title: 'Compras',
      icon: (
        <ViewInAr
          sx={{
            width: 28,
            height: 28,
            color: currentScreen === '/' ? '#163276' : '#fff',
          }}
        />
      ),
    },
    {
      path: '/cart',
      title: 'Carrinho',
      icon: (
        <AddShoppingCart
          sx={{
            width: 28,
            height: 28,
            color: currentScreen === '/cart' ? '#163276' : '#fff',
          }}
        />
      ),
    },
  ]

  return (
    <Box className="aside-bar">
      <Box className="aside-bar-container">
        <Box className="aside-bar-navigation">
          <List className="aside-bar-list">
            {navigationLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={link.path}
                  title={link.title}
                  className={`nav-link ${
                    currentScreen === link.path ? 'active' : 'inactive'
                  }`}
                >
                  <Button
                    onClick={() => setCurrentScreen(link.path)}
                    className={`nav-button ${
                      currentScreen === link.path ? 'nav-button-contained' : ''
                    }`}
                  >
                    {link.icon}
                    <Typography variant="h6" fontWeight="bold">
                      {link.title}
                    </Typography>
                  </Button>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className="aside-bar-logout">
          <Button onClick={handleLogout} className="logout-button">
            <ExitToApp sx={{ width: 32, height: 32 }} />
            <Typography variant="h6" fontWeight="bold">
              Sair
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
