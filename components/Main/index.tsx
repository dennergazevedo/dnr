import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import Resume from '../Resume';
import About from '../About';
import { Container  } from './styles';
import { IDevice } from './types';
import ScrollArrow from '../Common/ScrollArrow';
import AnimatedBackground from '../Common/AnimatedBackground';
import Experience from '../Experience';
import Technology from '../Technology';

const Main: React.FC = () => {
  const [device, setDevide] = useState<IDevice>('desktop' as IDevice);

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)
  }, [])

  function updateWindowDimensions(){
    window.innerWidth > 1024? 
    device !== 'desktop' && setDevide('desktop') 
    :
    device !== 'mobile' &&  setDevide('mobile');
  }

  return (
    <Container>
      <AnimatedBackground />
      <Header device={device}/>
      <Resume/>
      <ScrollArrow ancora="about"/>
      <About />
      <ScrollArrow ancora="experience"/>
      <Experience />
      <ScrollArrow ancora="technology"/>
      <Technology />
      { device === 'desktop' && <Footer/> }
    </Container>
  );
}

export default Main;