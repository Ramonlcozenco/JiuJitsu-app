import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './Login'; 


export default function Login() {
  
  async function handleGoogleLogin() {
    // Lógica do Firebase aqui...
    console.log("Login pressionado");
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <S.Content>
        
        <S.Logo 
          source={require('../../assets/logo/logo1.png')} 
          resizeMode="contain" 
        />

        <S.TextContainer>
          <S.WelcomeText>Bem-vindo(a)</S.WelcomeText>
          <S.SubTitle>Fighting For Christ Check-in</S.SubTitle>
        </S.TextContainer>

        <S.GoogleButton onPress={handleGoogleLogin} activeOpacity={0.8}>
          <S.GoogleIcon 
            source={{ uri: 'https://pngimg.com/uploads/google/google_PNG19635.png' }} 
          />
          <S.ButtonText>Conectar com Google</S.ButtonText>
        </S.GoogleButton>
      </S.Content>
    </S.Container>
  );
}
