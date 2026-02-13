import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 200px;
  margin-bottom: 10px;
  align-itens: center;

  margin-top: -250;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 25px;
  
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 26px;
  font-weight: 400;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 80px;
  align-items: center;
  width: 100%;
  
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export const WhatsappButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  text-decoration-line: underline;
  
`;

export const WhatsappIcon = styled.Image`
  width: 32px;
  height: 32px;
`;