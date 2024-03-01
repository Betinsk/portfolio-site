
import pureform from '../assets/pureform.png'
import prisaofederal from '../assets/prisaofederal.png'
import carrinhoCompras from '../assets/carrinhoCompras.png'
import filmes from '../assets/filmes.png'


const ArrayProjects = async () => {
const projectsData = [
        {
          id: 1,
          name: 'Prisão federal',
          img: prisaofederal,
          description: 'Um sistema de prisão federal Americano, inspirado na serie de tv, Orange is the new black',
          link: 'https://prisaofederal.netlify.app/'
        },
        {
          id: 2,
          name: 'Api de filmes',
          img: filmes,
          description: 'Carrinho de compras feito em react, baseado numa api do Mercado Livre',
          link: ' https://filmesreactapp.netlify.app/ '
        },
        {
          id: 3,
          name: 'Site para academia',
          img: pureform,
          description: 'Um sistema de academia, feito em javaScript',
          link: 'https://pureformfitness.netlify.app/index.html'
        },
        {
          id: 4,
          name: 'Carrinho de compras Mercado Livre',
          img: carrinhoCompras,
          description: 'Carrinho de compras feito em react, baseado numa api do Mercado Livre',
          link: 'https://carrinhocomprasbetinsk.netlify.app/'
        },
        // Adicione mais objetos de projeto conforme necessário
      ];
    

    
        return projectsData
}


export default ArrayProjects