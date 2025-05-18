import React from "react";
import "./Pslide.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
function Slide(){
  return(
    <>
    
    <h1 id='slidename'>Get 4 Classic Games Absolutely FREE!</h1>
    <h4 id="slidetext">Don’t miss this limited-time offer — claim your favorite originals now.Play, enjoy, and dive into nostalgia without paying anything!</h4>
       <Carousel className="main_slice">
      <Carousel.Item className="citem">
        <img src="https://wallpapers.com/images/hd/assassin-s-creed-black-flag-poster-594cooeg7u2gycwp.jpg" id="a"></img>
        <Carousel.Caption id="button">
          <Button variant="light">Claim Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="citem">
        <img src="https://digitalchumps.com/wp-content/uploads/2021/09/tormentedsouls-0.jpg" id="a"></img>
        <Carousel.Caption id="button">
          <Button variant="light">Claim  Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="citem">
        <img src="https://wallpapercave.com/wp/wp1843213.png" id="a"></img>
       <Carousel.Caption id="button">
          <Button variant="light">Claim  Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="citem">
        <img src="https://wallpapercave.com/wp/wp2099248.jpg" id="a"></img>
       <Carousel.Caption id="button">
          <Button variant="light">Claim  Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      </>
  )
}
export default Slide;