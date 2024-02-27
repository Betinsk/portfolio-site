
import pureform from '../assets/pureform.png'

const ArrayProjects = async () => {
const projectsData = [
        {
          id: 1,
          name: 'Prisão federal',
          img: pureform,
          description: 'Um sistema de prisão federal Americano, inspirado na serie de tv, Orange is the new black',
          link: 'https://prisaofederal.netlify.app/'
        },
        {
          id: 2,
          name: 'Site para academia',
          img: pureform,
          description: 'Um sistema de academia, feito em javaScript',
          link: 'https://pureformfitness.netlify.app/index.html'
        },
        // Adicione mais objetos de projeto conforme necessário
      ];
    
    
        return projectsData
}


export default ArrayProjects