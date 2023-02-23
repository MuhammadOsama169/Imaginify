import React from 'react'

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
