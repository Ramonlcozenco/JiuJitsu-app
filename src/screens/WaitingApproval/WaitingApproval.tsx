import React from 'react';
import { StatusBar, Linking, View } from 'react-native';
import * as S from './styles';

export default function WaitingApproval() {
  
  
  const handleContactMaster = () => {
    const message = "Olá Mestre! Acabei de fazer meu cadastro no app Fighting For Christ e aguardo aprovação.";
    const phone = "5522981374673";
    Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
  };

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      
      <S.Content>
        {/* Logo do Projeto */}
       <View>
        <S.Logo 
          source={require('../../assets/logo/logo.png')} 
          resizeMode="contain" 
        />
       </View>
        

        <S.Title>QUASE LÁ, GUERREIRO(A)</S.Title>
        
        <S.Description>
          Seu cadastro foi enviado, Agora é só aguardar o mestre liberar o acesso.{"\n"}
          Oss!
        </S.Description>
      </S.Content>

      
      <S.Footer>
        <S.FooterText>Gostaria de fazer contato com o mestre? </S.FooterText>
        <S.WhatsappButton onPress={handleContactMaster} activeOpacity={0.7}>
          <S.LinkText>Falar com o mestre :</S.LinkText>
          <S.WhatsappIcon 
            source={require('../../assets/icons/whatsappIcon.png') } 
            resizeMode="contain"
          />
        </S.WhatsappButton>
      </S.Footer>
    </S.Container>
  );
}