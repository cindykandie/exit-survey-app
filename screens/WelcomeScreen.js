import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate('SurveyQuestions');
  };

  return (
    <View className="flex items-center justify-center px-4">
      <Image
        source={require('../assets/images/welcome.png')}
        className="w-36 h-36 mb-5"
      />
      <Text className="text-2xl font-bold mb-2">
        Welcome to the Exit Survey App
      </Text>
      <Text className="text-base text-center mb-8">
        We value your feedback. Your responses will help us improve our organization.
      </Text>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded"
        onPress={handleNextPress}
      >
        <Text className="text-white text-base font-bold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
