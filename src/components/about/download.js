import React from 'react';
import documentoPDF from '../../assets/CARLOS ALBERTO FIDELIS DE CARVALHO.pdf';
import { FaDownload } from 'react-icons/fa';

function DownloadLink() {
  return (
    <a href={documentoPDF} download className="btnSecondary">
      <FaDownload /> Baixar Currículo
    </a>
  );
}

export default DownloadLink;
