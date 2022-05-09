import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import Upload from '../../components/Upload';
import { Container } from './style';
import api from '../../services/api'

interface Categories {
    _id: string;
    name: string;
    slug: string;
}

const Register: React.FC = () => {
    const [categories, setCategories] = useState<Categories[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
      });

    useEffect(() => {
        api
          .get('categories')
          .then(response => {
              setCategories(response.data.data);
          });
      }, []);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSelectCategory(e: ChangeEvent<HTMLSelectElement>) {
        const category = e.target.value;
    
        setSelectedCategory(category);
      }
    
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const { title, price, description } = formData;
        const category = selectedCategory;

        const data = {
            title,
            price,
            category,
            description,
        };

        console.log(data);
        

        await api
            .post('products', data) 
            .then(() => {
                alert('Produto criado com sucesso!')
            })
            .catch(() => {
                alert('Erro ao criar o produto!')
            })
    }

    return (
       <Container>
            <div className='form-register'>
                <h2>Detalhes do produto</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Nome</p> <br />
                        <input onChange={handleInputChange} placeholder="Ex: Camisa Polo" type="text" name="title" />
                    </label>
                
                    <label>
                        <p>Descrição breve</p> <br />
                        <input onChange={handleInputChange} placeholder="Ex: Camiseta 100% Algodão" type="text" name="description" />
                    </label>

                    <label>
                        <p>Categoria</p> <br />
                        <select onChange={handleSelectCategory} name="select">
                            <option value="0">Selecione</option>
                            {categories.map((category) => (
                                <option  key={category._id} value={category._id}>{category.name}</option>
                            ))}
                        </select> 
                          
                    </label>

                    <label>
                        <p>Preço</p> <br />
                        <input onChange={handleInputChange} placeholder='Ex: 60,00' type="number" name="price" />
                    </label>
                    <Upload/>
                    <button>
                        Adicionar
                    </button>
                </form>
            </div>
       </Container>
    )
};

export default Register;