import React from 'react';
import { Container } from './style';
import { useParams } from 'react-router-dom';
import Categories from '../../components/Categories';
import Products from '../../components/Products';

const CategoriesPage: React.FC = () => {
    let category = {
        name: ''
    };
    category = useParams();
    
    return (
        <Container>
            <Categories />
            <Products category={category.name}/>
        </Container>
    )
};

export default CategoriesPage;  