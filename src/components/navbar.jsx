"use client";

import React from 'react'
import '../styles/globals.css';
import '../styles/navbar.css';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <nav className="navbar">

        <div className="navbar-brand">
          <a onClick={() => router.push("/")}>Movie App</a>
        </div>

        <div className="navbar-links">
          <a onClick={() => router.push("/")}>Home</a>
          <a onClick={() => router.push("/favorites")}>Favorites</a>
          <a onClick={() => router.push("/about")}>About</a>
          <a onClick={() => router.push("/contact")}>Contact</a>
        </div>

    </nav>
  </div>
  )
}