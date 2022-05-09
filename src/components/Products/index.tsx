import React, {useEffect, useState} from 'react';
import { Container } from './style';
import api from '../../services/api'
import noImage from '../../assets/no-image.jpg'
interface Props {
    category?: string;
}

interface Product {
    id: number;
    title: string;
    imageSource: string;
    price: number;
    description: string;
  }

const Products: React.FC<Props> = ({ category }) => {
    const [items, setItems]   = useState<Product[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        api
          .get('categories/' + category)
          .then(response => {
              setItems(response.data.data.products);
          });
      }, []);

    return (
       <Container>
           {items.map((item) => (
                <div className='products' key={item.id}>
                    <img src={item.imageSource ? item.imageSource : noImage} alt="Camiseta"/>
                    <p className='title'>{item.title}</p>
                    <p className='description'>{item.description ? item.description : 'Sem descrição'}</p>
                    <span><sup>R$</sup>{item.price}</span>
                    <button>Carrinho</button>
                </div>
           ))}
       </Container>
    )
};

export default Products;