import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const FeedbackScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0); // State to track user's rating (0-5 stars)
  const [comment, setComment] = useState(''); // State to track user's comment

  // Function to handle rating selection
  const handleRating = (value) => {
    setRating(value);
  };

  // Function to navigate to the HelpScreen
  const handleHelpPress = () => {
    navigation.navigate('HelpScreen');
  };

  // Function to submit feedback
  const handleSubmit = () => {
    // You can handle the submission of feedback (rating and comment) here
    // For now, let's display the selected rating and comment
    navigation.navigate('IntroScreen');  };

  return (
    <View className="flex items-center justify-center px-4">
      <Image
        source={require('../assets/images/feedback.png')}
        className="w-[75%] h-[40%] mb-5 rounded-3xl p-4"
      />
      <Text className="text-2xl font-bold mb-2">Feedback</Text>
      <Text className="text-base text-center mb-4">
        Please Help us improve by rating your experience and leave a comment.
      </Text>
      {/* Star rating */}
      <View className="flex flex-row mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            className="mr-2"
            onPress={() => handleRating(star)}
          >
            <FontAwesome
              name={star <= rating ? 'star' : 'star-o'} // Filled or outline star based on the rating
              size={30}
              color={star <= rating ? '#FFD700' : '#CCC'} // Yellow or gray color
            />
          </TouchableOpacity>
        ))}
      </View>
      {/* Comment input */}
      <TextInput
        className="bg-white border border-gray-300 rounded px-4 py-2 w-full mb-4"
        placeholder="Leave a comment..."
        value={comment}
        onChangeText={(text) => setComment(text)}
        multiline
      />
      {/* Submit button */}
      <TouchableOpacity
        className={`bg-green-500 py-2 px-4 rounded ${
          rating === 0 || comment === '' ? 'opacity-50' : ''
        }`}
        onPress={handleSubmit}
        disabled={rating === 0 || comment === ''}
      >
        <Text className="text-white font-bold">Submit</Text>
      </TouchableOpacity>
      {/* Link to HelpScreen */}
      <TouchableOpacity
        className="mt-4 underline"
        onPress={handleHelpPress}
      >
        <Text className="text-blue-500 font-bold">Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackScreen;
