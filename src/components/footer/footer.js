import React from 'react'
import './footer.scss'

export default function Footer() {
  return(
    <footer>
      <div>
        <div className="footer-header">
          <h2>Gabriela Xavier</h2>
          <p>Abrigo Gabriela Xavier</p>
          <p>CNPJ 00.000.000/0000-00</p>
          <p>contato@contato.com.br</p>
        </div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Dribbble</li>
          <li>Linkedin</li>
        </ul>
        <div>© Copyright Gabriela Xavier. <br/> All Rights Reserved</div>
      </div>
    </footer>
  )
}