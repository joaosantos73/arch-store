import React from 'react';
import { Container } from './style';

const Categories: React.FC = () => {
    return (
       <Container>
           <div className='menu-categories'>
               <h1>Categorias</h1>
               <ul>
                   <li><a href="/categories/mens-fashion">Moda masculina  ⮕</a></li>
                   <li><a href="/categories/womens-fashion">Moda feminina  ⮕</a></li>
                   <li><a href="/categories/jewlary-and-watches">Jóias e Relógios  ⮕</a></li>
                   <li><a href="/categories/bags-and-shoes ">Mochilas e calçados ⮕</a></li>
                   <li><a href="/categories/phone-and-tablets">Telefones e tablets  ⮕</a></li>
               </ul>
               <a href="/register" className='button-register'>
                    Crie um novo produto
                </a>
            </div>
       </Container>
    )
};

export default Categories;