import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BottomNav from '../components/BottomNav';

const IntroScreen = ({ navigation }) => {
  const handleMultipleChoicePress = () => {
    // Navigate to the multiple choice questions screen
    navigation.navigate('MultipleChoiceQuestions');
  };

  const handleOpenEndedPress = () => {
    // Navigate to the open-ended questions screen
    navigation.navigate('OpenEndedQuestions');
  };

  return (
    <View className="flex items-center justify-center px-4">
      <Image
        source={require('../assets/images/intro.png')}
        className="w-[75%] h-[50%] mb-5 rounded-full p-4"
      />
      <Text className="text-2xl font-bold mb-2">Thank you for being here</Text>
      <Text className="text-base text-center mb-8">
        Your feedback is important to us and will be kept anonymous. It will only be used to
        help our company improve.
      </Text>
      <Text className="text-base font-bold mb-2">Choose a Survey Type:</Text>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded mb-2"
        onPress={handleMultipleChoicePress}
      >
        <Text className="text-white font-bold">Multiple Choice Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 py-2 px-4 rounded"
        onPress={handleOpenEndedPress}
      >
        <Text className="text-white font-bold">Open-Ended Questions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;
