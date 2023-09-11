import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SurveyQuestionsScreen = ({ navigation }) => {
  // Sample survey questions (replace with your actual questions)
  const surveyQuestions = [
    'How satisfied were you with your role?',
    'Did you find the work environment comfortable?',
    'Were you able to achieve your professional development goals?',
    'Did you receive adequate support from your supervisor/manager?',
    'How would you rate the communication within the organization?',
    'Were your concerns and feedback addressed promptly?',
    'Did you have opportunities for career growth?',
    'How would you rate the overall workplace culture?',
    'Were you satisfied with the compensation and benefits?',
    'Do you have any suggestions for improvement?',
    // Add more questions here
  ];

  // State to track user responses
  const [responses, setResponses] = useState(Array(surveyQuestions.length).fill(''));

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle user's response to a question
  const handleResponse = (index, response) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = response;
    setResponses(updatedResponses);
  };

  // Function to navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Function to navigate to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Function to handle submission
  const handleSubmit = () => {
    // Check if all questions are answered
    if (responses.every((response) => response !== '')) {
      // Navigate to the SubmissionConfirmationScreen and pass the responses
      navigation.navigate('SubmissionConfirmationScreen', { responses });
    } else {
      // Display an alert or message indicating that all questions must be answered
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <View className="flex items-center justify-center px-4">
      <Text className="text-base mb-2">
        Question {currentQuestionIndex + 1} of {surveyQuestions.length}
      </Text>
      <Text className="text-xl font-bold mb-5">
        {surveyQuestions[currentQuestionIndex]}
      </Text>
      {/* Display response options/buttons */}
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded mb-2"
        onPress={() => handleResponse(currentQuestionIndex, 'Option A')}
      >
        <Text className="text-white font-bold">Option A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded mb-2"
        onPress={() => handleResponse(currentQuestionIndex, 'Option B')}
      >
        <Text className="text-white font-bold">Option B</Text>
      </TouchableOpacity>
      {/* Add more response options/buttons as needed */}
      <View className="flex flex-row justify-between w-full mb-2">
        <TouchableOpacity
          className={`bg-blue-500 py-2 px-4 rounded ${
            currentQuestionIndex === 0 ? 'opacity-50' : ''
          }`}
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <Text className="text-white font-bold">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`bg-blue-500 py-2 px-4 rounded ${
            currentQuestionIndex === surveyQuestions.length - 1 ? 'opacity-50' : ''
          }`}
          onPress={handleNextQuestion}
          disabled={currentQuestionIndex === surveyQuestions.length - 1}
        >
          <Text className="text-white font-bold">Next</Text>
        </TouchableOpacity>
      </View>
      {/* Submit button */}
      <TouchableOpacity
        className={`bg-green-500 py-2 px-4 rounded ${
          responses.includes('') ? 'opacity-50' : ''
        }`}
        onPress={handleSubmit}
        disabled={responses.includes('')}
      >
        <Text className="text-white font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurveyQuestionsScreen;
