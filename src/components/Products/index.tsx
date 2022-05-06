import React from 'react';
import { Container } from './style';
import camiseta1 from '../../assets/camiseta1.jpg'

const Products: React.FC = () => {
    const items = [
        {
            id: 1,
            name: 'Camisa 1',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 2',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 3',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 4',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 5',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 6',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 7',
            price: 69.99,
            description: 'Feita de algodão'
        },
        {
            id: 1,
            name: 'camisa 8',
            price: 69.99,
            description: 'Feita de algodão'
        }
    ];

    return (
       <Container>
           {items.map((item) => (
                <div className='products' key={item.id}>
                    <img src={camiseta1} alt="Camiseta"/>
                    <p>{item.name}</p>
                    <p className='description'>{item.description}</p>
                    <span><sup>R$</sup>{item.price}</span>
                    <button>Carrinho</button>
                </div>
           ))}
       </Container>
    )
};

export default Products;