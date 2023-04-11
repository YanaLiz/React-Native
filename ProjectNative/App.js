import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default function App() {
const [showPassword, setShowPassword]=useState(true)
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('./assets/bg.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.form}>
            <Text style={styles.text}>Войти</Text>
            <TextInput style={[styles.input, { marginTop: 33, borderColor: 'orange' }]}
              keyboardType={'email-address'}
              onChangeText={(text) => console.log(text)}
              placeholder={'Адрес электронной почты'}
              placeholderTextColor={'#BDBDBD'}
            />
            <View style={{ width: '100%' }} >
              <TextInput style={[styles.input, { marginTop: 16, borderColor: 'orange' }]}
                secureTextEntry={showPassword}
                onChangeText={(text) => console.log(text)}
                placeholder={'Пароль'}
                placeholderTextColor={'#BDBDBD'}
              />
              <TouchableOpacity
                onPress={togglePassword}
                style={{ position: 'absolute', right: 16, bottom: 16, }} >
                <Text >Показать</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent:'flex-end'
  },
  text: {
    color: '#212121',
    fontSize: 30,
    alignSelf: 'center',
     fontWeight: 500,
    marginTop:32,
  },
  form: {
    width: '100%',
    // height:100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal:32,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    backgroundColor: '#F6F6F6',
   }
});
