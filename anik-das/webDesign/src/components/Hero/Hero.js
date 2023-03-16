import React from 'react'
import HeroImg from '../../assets/portfolio_man.png';
import Button from '../Button/Button';
import Header from '../Header/Header';

function Hero() {
  return (
    <div 
        className="bg-cover bg-center w-full h-550" 
        style={{backgroundImage: `url(${HeroImg})`}} >
            
            <Header />
            <div className='container mx-auto pl-16 pt-20'>
                <div className='text-7xl font-bold text-gray-700'>Keiths Williams</div>
                <div><p className='uppercase tracking-widest mt-3'>Senior Developer</p></div>
                <div className='flex mt-8'>
                    <Button className='text-blue-700 border border-blue-700'>View Portfolio</Button>
                    <Button className='text-white border bg-blue-700 ml-3'>Download Resume</Button>
                </div>
 
            </div>
        </div>
  )
}

export default Hero