import React from 'react'
import { Button } from '../elements/Button'

export default function NavbarLayout() {
  return (
    <header className="border-b px-2">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">EduPay</span>
        </div>
        <Button className='bg-black p-2 text-white rounded'>Pembayaran</Button>
      </div>
    </header>
  )
}

