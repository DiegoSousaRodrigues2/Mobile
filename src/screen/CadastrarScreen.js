import React from 'react';
import {
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Pressable,
    View,
} from 'react-native';
import {TextInput, RadioButton, Checkbox } from 'react-native-paper';


const CadastrarScreen = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');
    const [checkedTermos, setCheckedTermos] = React.useState(false);
    const [checkedEmails, setCheckedEmails] = React.useState(false);


    return (
        <ImageBackground style={styles.imageBackground} source = {require('../../assets/fundo.png')}>
        
        <Image style={styles.imageLogo} source = {require('../../assets/logo.png')}/>
        
        <Text style={styles.textTitle}>Cadastrar</Text>
        
        <TextInput style={styles.textInput}
            placeholder="Username"
            placeholderTextColor='white'
        />
        <TextInput style={styles.textInput}
            placeholder="Nome completo"
            placeholderTextColor='white'
        />
        <TextInput style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor='white'
        />
        <TextInput style={styles.textInput}
            placeholder="Confirmar senha"
            placeholderTextColor='white'
        />
        

        <View style = {styles.view}>
            <Text 
                style = {styles.textRadio}>
                Sexo:
            </Text>
    
            <RadioButton
                value="masculino"
                status={ checked === 'male' ? 'checked' : 'unchecked' }
                color = "white"
                uncheckedColor='white'
                onPress={() => setChecked('male')}
            />
            <Text 
                style = {styles.textRadio} 
                onPress={() => setChecked('male')}>
                Male
            </Text>
           
            <RadioButton
                value="feminino"
                color = "white"
                uncheckedColor='white'
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('female')}
            />
            <Text 
                style = {styles.textRadio} 
                onPress={() => setChecked('female')}>
                Female
            </Text>
            
        </View>

        <View style = {styles.view}>
            <Checkbox
                status={checkedTermos ? 'checked' : 'unchecked'}
                color = "white"
                uncheckedColor='white'
                onPress={() => {
                setCheckedTermos(!checkedTermos);
                }}
            />
            <Text 
                style = {styles.textRadio} >
                Li e concordo com o termo de uso
            </Text>
            <Checkbox
                status={checkedEmails ? 'checked' : 'unchecked'}
                color = "white"
                uncheckedColor='white'
                onPress={() => {
                setCheckedEmails(!checkedEmails);
                }}
            />
            <Text 
                style = {styles.textRadio} >
                Aceito receber emails
            </Text>
        </View>
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>
                CADASTRAR
            </Text>
        </Pressable> 
        <Pressable style={styles.button} >
            <Text 
                style={styles.buttonText}
                onPress={() => navigation.replace('Cadastro')}>
                VOLTAR
            </Text>
        </Pressable> 

        
        
        </ImageBackground>

    );
};



const styles = StyleSheet.create({
    
    view: {
        alignSelf: 'baseline',
        paddingHorizontal: 32,
        
     },
     textRadio: {
        fontSize : 16,
        color:'white',
     },
    title: {
        fontSize : 20,
        marginBottom: 10
     },
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

  export default CadastrarScreen;