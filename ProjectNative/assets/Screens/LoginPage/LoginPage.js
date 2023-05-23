
import { useState } from 'react';
import styles from './styles';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';



export function LoginPage() {
  const [keyboardShow, setKeyboardShow] = useState(false)
const [showPassword, setShowPassword]=useState(true)
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        setKeyboardShow(false)
      }}>
        <ImageBackground source={require('../../../assets/bg.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.form}>
            <Text style={styles.text}>Войти</Text>
            <TextInput
            onFocus={()=>setKeyboardShow(true)}
              style={[styles.input, { marginTop: 33, borderColor: 'orange' }]}
              keyboardType={'email-address'}
              onChangeText={(text) => console.log(text)}
              placeholder={'Адрес электронной почты'}
              placeholderTextColor={'#BDBDBD'}
            />
            <View style={{ width: '100%' }} >
              <TextInput style={[styles.input, { marginTop: 16, borderColor: 'orange' }]}
                onFocus={()=>setKeyboardShow(true)}
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 16,    marginBottom:keyboardShow?32:144,}}>
              <Text style={styles.registr}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      
  );
}


