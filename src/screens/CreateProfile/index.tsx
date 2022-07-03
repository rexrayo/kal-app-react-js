import React, { ChangeEvent, useState } from 'react'
import Avatar from '../../components/Avatar';
import { Container, StyledInput, StyledLabel } from '../../components/Global';

const CreateProfile = () => {
    
    const [selectedImage, setSelectedImage] = useState('');


    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const [file]: any = e.target.files;
        setSelectedImage(URL.createObjectURL(file));
    }

    return (
        <Container>
            <Avatar 
                selectedImage={selectedImage}
                handleFile={handleFile}
                setSelectedImage={setSelectedImage}
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                <StyledLabel align='left'>Tu Nombre</StyledLabel>
                <StyledInput></StyledInput>
            </div>
        </Container>
    )
}

export default CreateProfile;