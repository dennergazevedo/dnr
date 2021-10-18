import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer'
import ScrollArrow from '../ScrollArrow';
import Resume from '../Resume';
import About from '../About';
import { Container  } from './styles';
import { IDevice } from './types';

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
      <Header device={device}/>
      <Resume/>
      <ScrollArrow />
      <About />
      <ScrollArrow />
      { device === 'desktop' && <Footer/> }
    </Container>
  );
}

export default Main;