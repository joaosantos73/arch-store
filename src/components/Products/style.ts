import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 30px;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;

    .products {
        margin-bottom: 15px;

        img {
            display: block;
            height: 170px;
            width: 80%;
            border-radius: 4%;
            cursor: pointer;
            transition: .5s ease;
            backface-visibility: hidden;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #34c392;
            border: none;
            padding: 7px;
            border-radius: 3px;
            margin-top: 5px;
            width: 80%;
            color: #fff;
            cursor: pointer;
        }

        p, span {
            display: flex;
            justify-content: center;
            margin-top: 5px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 17px;
            font-weight: bold;
            width: 80%;
        }

        .description {
            font-size: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-style: italic;
            color: #898989;
        }

    }

    img:hover {
        opacity: 0.4;
    }
`;