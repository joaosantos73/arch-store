import React from 'react';
import { Container } from './style';
import Upload from '../../components/Upload';

const Register: React.FC = () => {
    return (
       <Container>
            <div className='form-register'>
                <h2>Detalhes do produto</h2>
                <form>
                    <label>
                        <p>Nome</p> <br />
                        <input placeholder="Ex: Camisa Polo" type="text" name="name" />
                    </label>
                
                    <label>
                        <p>Categoria</p> <br />
                        <input placeholder='Ex: Camiseta' type="text" name="category" />
                    </label>

                    <label>
                        <p>Preço</p> <br />
                        <input placeholder='Ex: 60,00' type="number" name="price" />
                    </label>
                    <Upload />
                    <button>
                        Adicionar
                    </button>
                </form>
            </div>
       </Container>
    )
};

export default Register;