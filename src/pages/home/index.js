import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './style.scss'
import { ArrowRight } from '../../assets'

const gatos = [
  {
    nome: 'gatinho1',
    img: 'https://cdn2.thecatapi.com/images/9ju.jpg'
  },
  {
    nome: 'gato2',
    img: 'https://64.media.tumblr.com/tumblr_m10npmUpc11qb8a3ro1_250.jpg'
  },
  {
    nome: 'gato3',
    img: 'https://64.media.tumblr.com/tumblr_m1qtpmMUC01qze0hyo1_250.jpg'
  },
  {
    nome: 'gato4',
    img: 'https://cdn2.thecatapi.com/images/8VWdBtAtK.jpg'
  },
  {
    nome: 'gato5',
    img: 'https://cdn2.thecatapi.com/images/Qn4EYMnLM.jpg'
  }
]

export default function Home() {
  return(
    <div className="home-wrapper">
      <h3 className="title">Encontre seu amigo</h3>
      <Carousel animation="slide" className="carousel-wrapper">
        {gatos.map(gatoObj => (
            <div className="carousel-item" style={{backgroundImage: `url(${gatoObj.img})`}} />
        ))}
      </Carousel>
      <div className="about">
        <h4 className="about--title">Conheça a <br/> Gabriela Xavier</h4>
        <ArrowRight />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis quis velit at blandit.</p>
        <br/>
        <p className="read-more">Leia mais...</p>
      </div>
      <div className="last-posts">
        <div className="last-posts__header">
          <h3>Últimas Postagens</h3>
          <span>Ver Tudo <ArrowRight/></span>
        </div>
        <div className="post">
          <img src="https://rapidmaterials.com/wp-content/uploads/catalog/product/2081_1.png" alt="fundo post" />
          <label>Campanhas<br/> 8 Junho, 2020</label>
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis quis velit at blandit.</p>
        </div>
        <div className="post">
          <img src="https://rapidmaterials.com/wp-content/uploads/catalog/product/2081_1.png" alt="fundo post" />
          <label>Campanhas<br/> 8 Junho, 2020</label>
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis quis velit at blandit.</p>
        </div>
        <div className="post">
          <img src="https://rapidmaterials.com/wp-content/uploads/catalog/product/2081_1.png" alt="fundo post" />
          <label>Campanhas<br/> 8 Junho, 2020</label>
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis quis velit at blandit.</p>
        </div>
      </div>
    </div>
  )
}