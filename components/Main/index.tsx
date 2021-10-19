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

const Main: React.FC = () => {
  const [device, setDevide] = useState<IDevice>('desktop' as IDevice);

  useEffect(() => {
    screen && window.innerWidth > 1024? 
      setDevide('desktop') 
      :
      setDevide('mobile');
  }, [])

  return (
    <Container>
      <AnimatedBackground />
      <Header device={device}/>
      <Resume/>
      <ScrollArrow ancora="about"/>
      <About />
      <ScrollArrow ancora="experience"/>
      <Experience />
      <ScrollArrow ancora="about"/>
      { device === 'desktop' && <Footer/> }
    </Container>
  );
}

export default Main;