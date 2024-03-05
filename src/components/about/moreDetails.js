import React from 'react';
import '../../css/about.css'
import DownloadLink from './download';
import Header from '../header';


function MoreDetails() {
  return (
    <>
    <Header/>
    <div className=''>
      <p>Olá, meu nome é Carlos Carvalho, tenho 30 anos e nasci em Belo Horizonte, que fica no estado de Minas Gerais. Aspiro a trabalhar como desenvolvedor web, pois gosto muito dessa profissão. É gratificante construir coisas e trabalhar em equipe.</p>

      <DownloadLink/>
    </div>
    </>
  );
}

export default MoreDetails;