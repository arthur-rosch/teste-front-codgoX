import { FC } from 'react'
import { Alert, Snackbar } from '@mui/material'

interface AlertProps {
  text: string
  open: boolean
  onClose: () => void
  severity: 'success' | 'info' | 'warning' | 'error'
}

export const AlertUi: FC<AlertProps> = ({ open, onClose, severity, text }) => {
  const alertContent = (
    <Alert variant="filled" severity={severity}>
      {text}
    </Alert>
  )

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      {alertContent}
    </Snackbar>
  )
}
