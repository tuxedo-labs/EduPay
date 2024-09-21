import React from 'react'
import { Button } from '../elements/Button'
import Link from 'next/link'

export default function HeroLayout() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Simplify School Payments with EduPay</h1>
        <p className="mb-8 text-xl text-muted-foreground">Effortless digital payments for schools, parents, and students</p>
        <Button className="bg-black rounded p-2 text-white"><Link href='#checkPembayaran'>Check Pembayaran</Link></Button>
      </div>
    </section>
  )
}

