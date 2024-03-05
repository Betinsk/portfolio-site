
import pureform from '../assets/pureform.png'
import prisaofederal from '../assets/prisaofederal.png'
import carrinhoCompras from '../assets/carrinhoCompras.png'
import filmes from '../assets/filmes.png'
import todo from '../assets/todo.png'

const ArrayProjects = async () => {
const projectsData = [
        {
          id: 1,
          name: 'Prisão federal',
          img: prisaofederal,
          description: 'Um sistema de prisão federal Americano, inspirado na serie de tv, Orange is the new black, feito em react e css responsivo',
          complexDetails: 'Um sistema prisional feito, baseado em uma api da internet que trás pessoas e informações, ainda está em desenvolvimento, na navbar tem uma opção chamada imates, que trás os dados dos supostos presos que estão no sitema',
          link: 'https://prisaofederal.netlify.app/'
        },
        {
          id: 2,
          name: 'Api de filmes',
          img: filmes,
          description: 'Carrinho de compras feito em react, baseado numa api do Mercado Livre',
          complexDetails: 'Site para busca de filmes baseada na api https://www.themoviedb.org/, ela trás os melhores filmes, os detalhes deles e tem uma busca sobre filmes',
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

        {
          id: 5,
          name: 'To do list',
          img: todo,
          description: 'Lista de coisas a se fazer, feito em react',
          complexDetails: 'Essa lista possui uma api para salvar os dados no banco de dados, que está sendo desenvolvida em java, ultilizando o framework Sprinboot, e ainda está em construção, em uma de suas funções está a capacidade de criar tárefas de diferentes categorias e completá las',
          link: 'https://todolistapisp.netlify.app/'
        },
        // Adicione mais objetos de projeto conforme necessário

        
      ];
    

    
        return projectsData
}


export default ArrayProjects