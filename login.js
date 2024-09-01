import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 导入导航钩子
import MainChoose from './main choose';

export default function Login() {
  const navigation = useNavigation(); // 获取导航对象

  const handleForgotPassword = () => {
    navigation.navigate('PasswordReset'); // 导航到密码重置页面
  };

  const handleLogin = () => {
    navigation.navigate('MainChoose'); // 导航到密码重置页面
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <ImageBackground
        source={require('./assets/cap.png')}
        style={styles.background}
      >
        <View>
          <Text style={styles.text}>電子信箱</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入電子信箱"
          />
          <Text style={styles.text1}>密碼</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入密碼"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>忘記密碼？</Text>
          </TouchableOpacity>

          {/* 添加登录按钮 */}
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>登入</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: '#F0F0F0',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#5B4F3A',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    width: '85%', 
    height: 45, 
    left: '5%', 
    top: '-60%', 
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#5B4F3A',
    width: '27%',
    left: '5%',
    top: '-60%',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#5B4F3A',
    width: '27%',
    left: '0%',
    top: '-60%',
  },
  forgotPassword: {
    fontSize: 20,
    textAlign: 'right',
    color: '#D02D16',
    textDecorationLine: 'underline',
    marginTop: 10,
    left: '-10%',
    top: '-400%',
  },
  loginButton: {
    backgroundColor: '#5B4F3A',
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    width: '85%',
    left: '5%',
    top: '-50%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
