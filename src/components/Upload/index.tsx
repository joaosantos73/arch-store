import React from 'react';
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from './style';

const Upload: React.FC = () => {
    let acceptTypes = {
        'image/png': ['.png'],
    };

    return (
        <div>
            <Dropzone accept={acceptTypes} onDropAccepted={() => {}}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                  <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    <UploadMessage>
                        Arraste sua Imagem aqui
                    </UploadMessage>
                </DropContainer>
                ) }
            </Dropzone>
        </div>
    );
};

export default Upload;