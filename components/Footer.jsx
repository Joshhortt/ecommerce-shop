import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>&copy; 2022 Bmatica | Todos os direitos reservados | Privacidade e Segurança </p>
        {/* https://react-icons.github.io/react-icons/search?q=facebook */}
        <p className='icons'>
          <AiFillInstagram />
          <AiOutlineTwitter />
          <AiFillFacebook />
        </p>
    </div>
  )
}

export default Footer