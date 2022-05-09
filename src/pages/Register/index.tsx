import React from 'react';
import Upload from '../../components/Upload';
import { Container } from './style';

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
                        <p>Descrição breve</p> <br />
                        <input placeholder="Ex: Camiseta 100% Algodão" type="text" name="name" />
                    </label>

                    <label>
                        <p>Categoria</p> <br />
                        <select name="select">
                            <option value="valor1">Camiseta</option>
                            <option value="valor2">Caneca</option>
                            <option value="valor3">Livros</option>
                            <option value="valor3">Acessorios</option>
                            <option value="valor3">Quadros</option>
                        </select>   
                    </label>

                    <label>
                        <p>Preço</p> <br />
                        <input placeholder='Ex: 60,00' type="number" name="price" />
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