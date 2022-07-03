import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface User {
    email: String
    password: String
}

export interface SignData {
    email: string;
    password: string;
}

export interface ThemeButtonProps {
    changeTheme: () => void;
}

export interface Picture {
    uri: string;
    path: string;
    fName: string;
}

export interface AvatarI {
    handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
    setSelectedImage: Dispatch<SetStateAction<string>>
    selectedImage: string;
}

export interface CardProps {
    children?: JSX.Element | JSX.Element[];
}

export interface labelProps {
    align?: 'center' | string;
}