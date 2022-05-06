import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

interface DropProps {
    isDragActive: boolean;
    isDragReject: boolean;
}

export const DropContainer = styled.div<DropProps>`
    border: 1px dashed ${props => props.theme.colors.text};
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => props.theme.colors.text};
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;