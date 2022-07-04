import React from 'react'
import { FaCamera } from 'react-icons/fa';
import { AvatarI } from '../../interfaces';
import { StyleOpacity } from './styles';
import img from '../../assets/Images/avatar.png'


const Avatar: React.FC<AvatarI> = ({handleFile, selectedImage, setSelectedImage}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column'
    }}>

    <label  htmlFor="inputFile" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignSelf: 'center', marginTop: 50 }}>
        <input onChange={handleFile} name="" type="file" id="inputFile" hidden />
        {!selectedImage ? <img src={img} alt='input' style={{
            borderRadius: 100,
            width: 200,
            height: 200,

        }} /> : 
        <img src={selectedImage} alt='input' style={{
            borderRadius: 100,
            width: 200,
            height: 200,
            objectFit: 'cover'
        }} />
        
        }
        <StyleOpacity>
            <FaCamera/>
            SUBIR FOTO DEL PERFIL
        </StyleOpacity>
    </label>
    </div>
  )
}

export default Avatar;