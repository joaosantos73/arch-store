import styled from 'styled-components';

export const Container = styled.div`
    margin: 15px 15px;
    a {
        text-decoration: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5em;
        font-style: italic;
        color: ${props => props.theme.colors.text};
        padding: 10px;
    }


    .menu-categories {
        background-color: ${props => props.theme.colors.menu};
        width: 300px;
        height: auto;
        border-radius: 4%;
        
        h1 {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            padding: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-style: italic;
            border-bottom: 2px solid ${props => props.theme.colors.border};
        }

        ul, li {
            list-style: none;
            padding: 10px;
            padding-bottom: 30px;
        }
    }
`;

