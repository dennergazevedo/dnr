import React from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

import { Button } from './styles';
import { IPasswordButton } from './types';

const PasswordButton: React.FC<IPasswordButton> = ({ locale, Icon }: IPasswordButton) => {
  return (
    <Button>
      <div className="icon">
        <Icon className="share" size={24} color={'#333'}/>
        <div className="password-share">
          <AiOutlineCopy size={20} color={'#333'}/>
        </div>
      </div>
      <p>{locale}</p>
    </Button>
  );
}

export default PasswordButton;