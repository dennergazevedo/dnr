import React from 'react';
import Image from 'next/image';
import { useSession, signOut } from "next-auth/react";

import { Container } from './styles';

const Header: React.FC = () => {
  const { data: session } = useSession()
  return (
    <Container>
      <div className="descrition">
        <span>{session?.user?.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      {
        session?.user?.image &&
        <div className="imageContainer">
          <Image src={session.user.image} alt="Foto do Perfil" width={32} height={32}/>
        </div>
      }
    </Container>
  )
}

export default Header;