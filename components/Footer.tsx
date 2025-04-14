'use client'

import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} PhD2Pro. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <Link href="https://phd2pro.teachable.com/l/products">Products</Link>
          <Link href="https://linkedin.com/in/eugenegeis" target="_blank">LinkedIn</Link>
          <Link href="https://phd2pro.teachable.com" target="_blank">Course</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
