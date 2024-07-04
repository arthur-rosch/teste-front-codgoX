import { FC } from 'react'
import { Modal, Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface PurchaseModalProps {
  open: boolean
  onClose: () => void
}

export const PurchaseModal: FC<PurchaseModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-compra-sucesso"
      aria-describedby="modal-compra-sucesso"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: '4rem', color: 'success.main', mb: 2 }}
        />
        <Typography variant="h6" id="modal-compra-sucesso">
          Compra realizada com sucesso!
        </Typography>
      </Box>
    </Modal>
  )
}
