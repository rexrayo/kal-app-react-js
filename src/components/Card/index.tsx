import React from 'react'
import { CardProps } from '../../interfaces'
import { StyledCard } from './styles'


const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <StyledCard>
            { children }
        </StyledCard>
    )
}

export default Card