import React, { useCallback, useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { BiLockAlt } from 'react-icons/bi';
import { SiGmail } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { GoCheck } from 'react-icons/go';
import { AiOutlineCopy, AiOutlineReload } from 'react-icons/ai';
import { 
  BsInstagram,
  BsLinkedin 
} from 'react-icons/bs';
import { 
  ImFacebook,
  ImGithub
} from 'react-icons/im';

import PasswordButton from '../../components/PasswordButton';
import Unauthorized from '../../components/Unauthorized';
import Header from '../../components/Header';

import { 
  Container, 
  Title, 
  Body, 
  Generate 
} from './styles';

function PasswordVault() {
  const [passwordSize, setPasswordSize] = useState<number>(12);
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const { data: session } = useSession();

  const generatePassword = useCallback(() => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    let newPass = '';
    for (var i = 0; i < passwordSize; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      newPass += chars.substring(randomNumber, randomNumber + 1);
    }
    setCopied(false);
    setPassword(newPass);
  }, [passwordSize])

  const copyToClipboard = useCallback(async () => {
    setCopied(true);
    return await navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [passwordSize])

  if(session) {
    return (
      <Container>
        <Header />
        <Title>
          <h1>
            <BiLockAlt size={22} color={"#FFF"}/>
            Baú de senhas
          </h1>
          <p>Organize as suas senhas</p>
        </Title>
        <Body>
          <PasswordButton 
            locale='Github'
            Icon={ImGithub}
          />
          <PasswordButton 
            locale='Facebook'
            Icon={ImFacebook}
          />
          <PasswordButton 
            locale='Instagram'
            Icon={BsInstagram}
          />
          <PasswordButton 
            locale='LinkedIn'
            Icon={BsLinkedin}
          />
          <PasswordButton 
            locale='GMAIL'
            Icon={SiGmail}
          />
          <PasswordButton 
            locale='Faculdade'
            Icon={FaGraduationCap}
          />
        </Body>
        <Generate>
          <h3>
            <MdPassword className="icon" size={24} color="#333"/>
            Gerador de Senhas
          </h3>
          <div className='generatorContainer'>
            <div className='passwordGenerated'>
              <span>{password}</span>
              <div className='passwordActionContainer'>
                {
                  copied ? 
                    <GoCheck 
                      className="icon" 
                      size={20} 
                      color="#2ec5ea"
                      onClick={copyToClipboard}
                    />
                  :
                    <AiOutlineCopy 
                      className="icon" 
                      size={20} 
                      color="#333"
                      onClick={copyToClipboard}
                    />
                }
                <AiOutlineReload 
                  className="icon" 
                  size={20} 
                  color="#333" 
                  onClick={generatePassword}
                />
              </div>
            </div>
            <div className="generatorRangeSizeContainer">
              <label className="passwordSizeSlider">Tamanho: {passwordSize}</label>
              <input 
                className="slider"
                type="range" 
                min="8" 
                max="30" 
                value={passwordSize}
                onChange={e => setPasswordSize(Number(e.target.value))}
              />
            </div>
          </div>
        </Generate>
      </Container>
    )
  }
  return <Unauthorized />
}

export default PasswordVault;