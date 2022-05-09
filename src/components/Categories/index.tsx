import React from 'react';
import { Container } from './style';

const Categories: React.FC = () => {
    return (
       <Container>
           <div className='menu-categories'>
               <h1>Categorias</h1>
               <ul>
                   <li><a href="/categories/camisetas">Camisetas  ⮕</a></li>
                   <li><a href="/categories/canecas">Canecas  ⮕</a></li>
                   <li><a href="/categories/livros">Livros  ⮕</a></li>
                   <li><a href="/categories/accessorios ">Acessorios  ⮕</a></li>
                   <li><a href="/categories/quadros">Quadros  ⮕</a></li>
               </ul>
               <a href="/register" className='button-register'>
                    Crie um novo produto
                </a>
            </div>
       </Container>
    )
};

export default Categories;