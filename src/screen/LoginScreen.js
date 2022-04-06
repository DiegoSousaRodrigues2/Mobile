import React from 'react';
import {
    Text,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginScreen = () => {
    return (
        <ImageBackground style={styles.imageBackground} source = {require('../../assets/fundo.png')}>
        <Image style={styles.imageLogo} source = {require('../../assets/logo.png')}/>
        <Text style={styles.textTitle}>Entrar</Text>
        <TextInput
            placeholder="Username"
        />
        <TextInput
            placeholder="Senha"
        />
        <Button>
            Entrar
        </Button>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    imageBackground:{
      flex:1,
      resizeMode: 'conver',
      justifyContent : 'center',
      alignItems: 'center',
      padding: 16,
    },
    imageLogo:{
        width:150,
        margin: 16,
        resizeMode: 'contain',
        height: 50,
    },
    textTitle:{
        fontSize: 26,
        fontWeight: 'bold',
    },
  });

export default LoginScreen;
