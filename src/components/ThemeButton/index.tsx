import React from 'react'
import { ThemeButtonProps } from '../../interfaces';
import { Icon, ThemeIcon } from './styles';


const ThemeButton: React.FC<ThemeButtonProps> = ({changeTheme}) => {
  return (
    <Icon onClick={changeTheme}>
        <ThemeIcon/>
    </Icon>
  )
}

export default ThemeButton;