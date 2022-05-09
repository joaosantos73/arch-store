import styled from 'styled-components';

export const Container = styled.div`
    margin: 29px 15px;
    a {
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.5em;
        color: ${props => props.theme.colors.text};
        padding: 10px;
    }


    .menu-categories {
        background-color: ${props => props.theme.colors.menu};
        width: 300px;
        height: 585px;
        border-radius: 4%;
        
        h1 {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            padding: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            border-bottom: 2px solid ${props => props.theme.colors.border};
        }

        ul, li {
            list-style: none;
            padding: 10px;
            padding-bottom: 30px;
        }

        ul {
            border-bottom: 2px solid ${props => props.theme.colors.border};
        }

        .button-register {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 1.6em;
            margin-top: 40px;
            padding: 10px;
            font-weight: bold;

        }
    }

    li, a:hover {
        color: #a1a1a1;
    }

`;

