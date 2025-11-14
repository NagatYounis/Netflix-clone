import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home' >
      <Navbar/>
    <div className="hero">
    
      <img src={hero_banner} alt=""  className='banner'/>
      <div className="hero-caption">
        <img src={hero_title} alt=""  className='cap
        '/>
      
        <p>Discovering  his ties to secret ancient order ,man livin in
         modern Lorem, ipsum dolor sit amet
         consectetur adipisicing elit. Maxime, veritatis.</p>
      
      <div className="hero-btns">

        <button><img src={play_icon} alt="" />play</button>
        <button className='dark'><img src={info_icon} alt="" />play</button>
      </div>
     <div className="title-cards">
       <TitleCards/>
     </div>
      </div>
    
    </div>
      <div className="more-cards">
            <TitleCards  title="Blockbouster"/>
      <TitleCards title="Only On Netflex"/>
      <TitleCards title="UpComming"/>


      </div>
      <Footer/>
    </div>
  )
}

export default Home
