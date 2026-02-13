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
  width: 280px;
  height: 280px;
  margin-bottom: 40px;
`;

export const TextContainer = styled.View`
  align-items: center;
  margin-bottom: 60px;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 4px;
  text-align: center;
`;

export const GoogleButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  height: 65px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  /* Sombra para Android */
  elevation: 5;
  
  /* Sombra para iOS */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.8px;
`;

export const GoogleIcon = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;