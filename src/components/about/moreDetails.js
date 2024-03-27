import React from 'react';
import '../../css/about.css'
import DownloadLink from './download';
import Header from '../header';


function MoreDetails() {
  return (
    <div className='containerMore'>
    <Header/>
    <div className='description'>
      <p>Olá, meu nome é Carlos Carvalho, nasci em Belo Horizonte, que fica no estado de Minas Gerais. Aspiro trabalhar como desenvolvedor web, pois acho muito interessante essa área. É gratificante para mim, construir coisas e trabalhar em equipe.</p>

      <DownloadLink/>
    </div>
    </div>
  );
}

export default MoreDetails;