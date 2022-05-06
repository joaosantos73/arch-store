import styled from 'styled-components';

export const Container = styled.div`
    margin: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .form-register {

        width: 40%;

        h2 {
            font-size: 2em;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-left: 10px;
            margin-bottom: 30px;
            font-weight: bold;
            font-style: oblique;
        }

        input {
            padding: 7px;
            /* margin: 7px; */
            width: 100%;
            border: 1px solid #c5c5c5;
            border-radius: 7px;
            font-style: italic;
        }

        p {
            font-size: 1.5em;
            font-weight: bold;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-style: italic;
            margin-top: 10px;
            text-align: left;
        }

        button {
            margin-top: 20px;
            width: 100%;
            padding: 6px;
            background-color: #34c392;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
        }
    }
`;