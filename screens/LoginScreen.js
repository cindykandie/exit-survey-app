import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Perform user authentication logic here
    // Check if the email is registered in the main system
    // If authenticated, navigate to the SurveyQuestionsScreen
    if (isEmailValid(email)) {
      navigation.navigate('IntroScreen');
    } else {
      // Display an error message for invalid email
      alert('Invalid email. Please use your company email.');
    }
  };

  const isEmailValid = (inputEmail) => {
    // Replace this with your actual authentication logic
    // For example, you can check if the email is in your database
    // and meets your company's criteria for valid emails
    return inputEmail.endsWith('@company.com'); 
    // Replace with your company's domain
  };

  const handleSkipLogin = () => {
    // Navigate to the SurveyQuestionsScreen without authentication
    navigation.navigate('IntroScreen');
  };

  return (
    <View className="flex items-center justify-center px-4">
        <Image
        source={require('../assets/images/login.png')}
        className="w-[75%] h-[50%] mb-5 rounded-full p-4"
      />
      <Text className="text-2xl font-bold mb-5">Login</Text>
      <TextInput
        className="bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 mb-3"
        placeholder="Your Company Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity
        className="mb-8 bg-blue-500 py-2 px-4 rounded mb-3"
        onPress={handleLogin}
      >
        <Text className="text-white font-bold">Login</Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        className="bg-green-500 py-2 px-4 rounded"
        onPress={handleSkipLogin}
      >
        <Text className="text-white text-base font-bold">Skip login and proceed to survey questions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
