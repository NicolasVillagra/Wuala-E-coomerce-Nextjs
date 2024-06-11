import DeliveryInfo from '@/components/common/DeliveryInfo/DeliveryInfo'
import OrderNow from '@/components/common/OrderNow/OrderNow'
import React from 'react'

const page = () => {
  return (
    <div>
        <OrderNow/>
        <DeliveryInfo/>
    </div>
  )
}

export default page