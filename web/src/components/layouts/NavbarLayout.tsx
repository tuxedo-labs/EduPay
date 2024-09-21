import React from 'react'
import { Button } from '../elements/Button'

export default function NavbarLayout() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">EduPay</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

