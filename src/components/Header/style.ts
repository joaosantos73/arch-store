import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  border-top: 5px solid ${props => props.theme.colors.border};
  img {
    margin-top: 4px;
  }
  .dark-mode {
    display: flex;
    align-items: center;
  }
  .dark-mode p {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;

  h1 {
    margin-left: 7px;
    font-size: 2.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #e3e2e2;
    cursor: context-menu;
  }
`;