import React from 'react';
import { Container } from './style';

const Categories: React.FC = () => {
    return (
       <Container>
           <div className='menu-categories'>
               <h1>Categorias</h1>
               <ul>
                   <li><a href="#">Camisetas  ⮕</a></li>
                   <li><a href="#">Canecas  ⮕</a></li>
                   <li><a href="#">Livros  ⮕</a></li>
                   <li><a href="#">Acessorios  ⮕</a></li>
                   <li><a href="#">Quadros  ⮕</a></li>
               </ul>
           </div>
       </Container>
    )
};

export default Categories;