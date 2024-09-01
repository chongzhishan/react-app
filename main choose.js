import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WaterMain from './water/WaterMain';

export default function MainChoose() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <ImageBackground
        source={require('./assets/cap.png')} // Background image
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.textSubTitle}>請選著一項元素</Text>
          <TouchableOpacity onPress={() => navigation.navigate('WaterMain')}>
            <Image 
              source={require('./assets/water.png')} // Separate image
              style={styles.image}
            />
          </TouchableOpacity>
          <Image 
            source={require('./assets/paddy.png')} // Separate image
            style={styles.image1}
          />
          <Image 
            source={require('./assets/street.png')} // Separate image
            style={styles.image2}
          />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
            <Text style={styles.buttonText}>確定</Text>
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
  content: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  textSubTitle: {
    fontSize: 25,
    color: '#5B4F3A',
    marginBottom: 20, // Space between the text and the first image
    left: '-20%',
    top: "0%",
  },
  image: {
    width: 335, // Adjust the width as needed
    height: 143, // Adjust the height as needed
    marginBottom: 20, // Space between the two images
    top: "0%",
  },
  image1: {
    width: 335, // Adjust the width as needed
    height: 143, // Adjust the height as needed
    marginBottom: 20,
    top: "0%",
  },
  image2: {
    width: 335, // Adjust the width as needed
    height: 143, // Adjust the height as needed
    marginBottom: 20,
    top: "0%",
  },
  button: {
    backgroundColor: '#5B4F3A',
    padding: 10,
    borderRadius: 30,
    marginTop: 0,
    alignItems: 'center',
    width: '85%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
