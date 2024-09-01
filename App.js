import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import SignUp from './sign up';
import MainChoose from './main choose';
import WaterMain from './water/WaterMain';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login}  options={{title : '登入賬號',headerStyle: { backgroundColor: '#EAD4B0'},headerTintColor: '#8B7755',headerTitleStyle: { fontSize: 30, marginLeft: "30%",alignSelf: 'center'}}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title : '註冊賬號',headerStyle: { backgroundColor: '#EAD4B0'},headerTintColor: '#8B7755',headerTitleStyle: { fontSize: 30, marginLeft: "30%",alignSelf: 'center'}}} />
        <Stack.Screen name="MainChoose" component={MainChoose} options={{title : '元素選擇',headerStyle: { backgroundColor: '#EAD4B0'},headerTintColor: '#8B7755',headerTitleStyle: { fontSize: 30, marginLeft: "30%",alignSelf: 'center'}}} />
        <Stack.Screen name="WaterMain" component={WaterMain} options={{title : '水主界面',headerStyle: { backgroundColor: '#EAD4B0'},headerTintColor: '#8B7755',headerTitleStyle: { fontSize: 30, marginLeft: "30%",alignSelf: 'center'}}} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/cap.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>歡迎來到美洲</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>登入賬號</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>註冊賬號</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: '#F0F0F0', // 设置主屏幕的背景颜色
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute', 
    left: '20%', 
    top: '25%',
  },
  text: {
    fontSize: 45,
    color: '#8B7755',
    position: 'absolute', 
    left: '20%', 
    top: '15%',
  },
  button: { // 登入賬號
    backgroundColor: '#8B7755',
    width: "80%",
    height: "10%",
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    justifyContent: 'center', // 将内容（文本）在主轴上居中
    alignItems: 'center', // 将内容（文本）在交叉轴上居中
    left: '0%', 
    top: '25%',
  },
  button2: { // 註冊賬號
    backgroundColor: '#D2B687',
    width: "80%",
    height: "10%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,  // 頂上面
    justifyContent: 'center', // 将内容（文本）在主轴上居中
    alignItems: 'center', // 将内容（文本）在交叉轴上居中
    left: '0%', 
    top: '25%',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  }
});
