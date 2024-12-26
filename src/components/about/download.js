import React from 'react';
import documentoPDF from '../../assets/CARLOS ALBERTO FIDELIS DE CARVALHO.pdf';
import '../../css/about.css'


function DownloadLink() {
  return (
    <div className='DownloadLink'>
      <p>Clique no link abaixo para ter acesso ao meu Curriculum</p>
      <a href={documentoPDF} download>Download Curriculum</a>
    </div>
  );
}

export default DownloadLink;