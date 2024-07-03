import { FC } from 'react'
import { Header } from '@/components'
import { GridProducts } from './components/'
import { itemsParaCompra } from '@/utils/utils'

export const Home: FC = () => {
  return (
    <div>
      <Header text="Compras" />
      <div className="w-full h-full">
        <GridProducts productArray={itemsParaCompra} />
      </div>
    </div>
  )
}
