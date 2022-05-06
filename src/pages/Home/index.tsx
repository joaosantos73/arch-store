import React from 'react';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import { Container } from './style';

const Home: React.FC = () => {
    return (
       <Container>
           <Categories />
           <Products />
       </Container>
    )
};

export default Home;