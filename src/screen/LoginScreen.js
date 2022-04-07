import React from 'react';
import {
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Pressable,
    View,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
    return (
        <ImageBackground style={styles.imageBackground} source = {require('../../assets/fundo.png')}>
        
        <Image style={styles.imageLogo} source = {require('../../assets/logo.png')}/>
        
        <Text style={styles.textTitle}>Entrar</Text>
        
        <TextInput style={styles.textInput}
            placeholder="Username"
            placeholderTextColor='white'
        />
        <TextInput style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor='white'
        />
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>
                ENTRAR
            </Text>
        </Pressable> 
        <View style={styles.viewOps}>
            <Pressable 
                >
                <Text 
                    style={styles.textOps} 
                    onPress={() => navigation.replace('Cadastro')}>
                    Cadastrar
                </Text>
            </Pressable>
            <Pressable 
                >
                <Text style={styles.textOps}>
                    Esqueceu a senha
                </Text>
            </Pressable>
            
        </View>
        
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
        color: '#fff',
        margin: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:12,
        paddingHorizontal:32,
        backgroundColor: '#ee125a',
        marginTop: 8,
        width: '80%'
    },
    textInput: {
        width: '80%', 
        height: 40, 
        opacity: 0.5,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 8,
        borderRadius:0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    
    },
    viewOps: {
        flex: 1,
        flexDirection: "row",
        maxHeight: '1em',
        width: '80%',
        justifyContent:'space-between',
    },
    textOps: {
        color:'white',
    },
  });

export default LoginScreen;
