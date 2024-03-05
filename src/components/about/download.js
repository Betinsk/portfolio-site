import React from 'react';
import documentoPDF from '../../assets/CARLOS.pdf';
import '../../css/about.css'


function DownloadLink() {
  return (
    <div className='DownloadLink'>
      <p>Clique no link abaixo para ter acesso ao meu curriculun</p>
      <a href={documentoPDF} download>Download Curriculun</a>
    </div>
  );
}

export default DownloadLink;