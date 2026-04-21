import pureform from '../assets/pureform.png'
import prisaofederal from '../assets/prisaofederal.png'
import xfiles from '../assets/xfiles.png'
import carrinhoCompras from '../assets/carrinhoCompras.png'
import filmes from '../assets/filmes.png'
import todo from '../assets/todo.png'

const ArrayProjects = () => [
  {
    id: 1,
    name: 'Prisão Federal',
    img: prisaofederal,
    tags: ['React', 'Java', 'Spring Boot', 'CSS'],
    description: 'Sistema prisional inspirado em "Orange is the New Black". Front-end em React com layout responsivo; back-end em Java com Spring Boot gerenciando dados dos detentos.',
    complexDetails: 'Sistema prisional feito em Java com Spring Boot. Na navbar há a opção "Inmates" que consome a API e exibe os dados dos presos cadastrados no sistema. Ainda em desenvolvimento.',
    link: 'https://prisaofederaljava.netlify.app/'
  },
  {
    id: 2,
    name: 'Fanfic X-Files',
    img: xfiles,
    tags: ['HTML', 'CSS'],
    description: 'Site temático da série X-Files. Projeto inicial focado em estrutura semântica HTML e estilização CSS do zero, sem frameworks.',
    link: 'https://xfilesfanfic.netlify.app/'
  },
  {
    id: 3,
    name: 'Buscador de Filmes',
    img: filmes,
    tags: ['React', 'API REST', 'CSS'],
    description: 'App que consome a API do TMDB para exibir os filmes mais populares, detalhes e busca em tempo real por título.',
    complexDetails: 'Consome a API do TMDB (themoviedb.org). Exibe ranking de filmes, página de detalhes e campo de busca com debounce.',
    link: 'https://filmesreactapp.netlify.app/'
  },
  {
    id: 4,
    name: 'Site Academia PureForm',
    img: pureform,
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'Landing page completa para academia: apresentação de planos, horários e formulário de contato — tudo em JavaScript puro.',
    link: 'https://pureformfitness.netlify.app/index.html'
  },
  {
    id: 5,
    name: 'Carrinho de Compras',
    img: carrinhoCompras,
    tags: ['React', 'API REST'],
    description: 'Carrinho de compras integrado à API do Mercado Livre. Permite buscar produtos, adicionar ao carrinho e gerenciar quantidades.',
    link: 'https://carrinhocomprasbetinsk.netlify.app/'
  },
  {
    id: 6,
    name: 'To-Do List',
    img: todo,
    tags: ['React', 'Java', 'Spring Boot'],
    description: 'Gerenciador de tarefas com categorias. Front-end em React conectado a uma API REST em Spring Boot com persistência em banco de dados.',
    complexDetails: 'Possui integração com API Java/Spring Boot para salvar tarefas no banco. Suporta criação de tarefas por categoria, marcação como concluída e filtragem por status.',
    link: 'https://todolistapisp.netlify.app/'
  },
];

export default ArrayProjects;
