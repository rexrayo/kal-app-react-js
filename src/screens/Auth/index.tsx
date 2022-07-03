import React, { useState } from 'react'
import { Container, Logo, SignTextMode, StyledBody, StyledButton, StyledForm, StyledInput, StyledLabel } from '../../components/Global';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../Firebase';

const Auth: React.FC = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({email: '', password: ''});
    const [mode, setMode] = useState('signIn')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (mode === 'signUp') {
            await signUp({
              email: user.email, 
              password: user.password
            }).then(res => {
              if (res.user) {
                navigate("../create_profile", { replace: true });
              }
            }).catch(err => {
                alert(err.message);
            })
          } else {
            await signIn({
              email: user.email, 
              password: user.password
            }).then(res => {
              if (res.user) {
                navigate("../create_profile", { replace: true });
              }
            }).catch(err => {
                alert(err.message);
            })
          }
    }

    return (
        <Container>
            <StyledBody style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Logo/>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput
                        placeholder='Email'
                        type="text"
                        value={ user.email } 
                        onChange={(text) => setUser({...user, email: text.target.value})}
                    ></StyledInput>

                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                        placeholder='Password'
                        type="password"
                        value={ user.password } 
                        onChange={(text) => setUser({...user, password: text.target.value})}
                    ></StyledInput>
                    <StyledButton type="submit">
                        {(mode === 'signIn' ? 'Sign In' : 'Sign Up')}
                    </StyledButton>
                </StyledForm>
                <SignTextMode onClick={() => setMode(mode === 'signIn' ? 'signUp' : 'signIn')}>
                    {(mode === 'signIn' ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In')} 
                </SignTextMode>
            </StyledBody>
        </Container>
    )
}

export default Auth;