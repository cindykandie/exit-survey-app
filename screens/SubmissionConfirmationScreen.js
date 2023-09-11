import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SubmissionConfirmationScreen = ({ navigation, route }) => {
  const { responses } = route.params;

  const handleFinishPress = () => {
    // Navigate to the desired screen after submission (e.g., WelcomeScreen or any other screen)
    navigation.navigate('FeedBackScreen');
  };

  return (
    <View className="flex items-center justify-center px-4">
      <Text className="text-2xl font-bold mb-5">Submission Successful</Text>
      <Text className="text-base text-center mb-8">
        Thank you for completing the survey. Your feedback is important to us.
      </Text>
      {/* Optionally, you can display a summary of the user's responses here */}
      <Text className="text-base mb-8">Survey Responses:</Text>
      <View className="mb-4">
        {responses.map((response, index) => (
          <Text key={index} className="text-base">
            Question {index + 1}: {response}
          </Text>
        ))}
      </View>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded"
        onPress={handleFinishPress}
      >
        <Text className="text-white text-base font-bold">Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmissionConfirmationScreen;
