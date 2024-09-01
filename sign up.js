import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 导入导航钩子
import RuleRegulation from './rule_n_regulation';

export default function SignUp() {
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
          <Text style={styles.text1}>名稱</Text>
          <TextInput
            style={styles.input}
            placeholder="名稱"
            secureTextEntry={true}
          />
          <Text style={styles.text1}>生日</Text>
          <TextInput
            style={styles.input}
            placeholder="生日"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={RuleRegulation}>
            <Text style={styles.ruleregulation}>警語與使用條款</Text>
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
    top: '-10%', 
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#5B4F3A',
    width: '27%',
    left: '5%',
    top: '-10%',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#5B4F3A',
    width: '27%',
    left: '0%',
    top: '-10%',
  },
  ruleregulation: {
    fontSize: 20,
    textAlign: 'right',
    color: '#D02D16',
    textDecorationLine: 'underline',
    marginTop: 10,
    left: '-10%',
    top: '-100%',
  },
  loginButton: {
    backgroundColor: '#5B4F3A',
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    width: '85%',
    left: '5%',
    top: '-10%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
