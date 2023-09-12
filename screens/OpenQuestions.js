import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const OpenEndedQuestions = ({ navigation }) => {
  // Sample survey questions (replace with your actual questions)
  const surveyQuestions = [
    'What was your primary reason for leaving the company?',
    'Were you satisfied with your role and responsibilities during your tenure here?',
    'How would you rate your work-life balance at the company?',
    'Did you receive the necessary training and support to perform your job effectively?',
    'Were you satisfied with your compensation and benefits package?',
    'Did you feel valued and appreciated for your contributions to the company?',
    'How would you rate the communication within the organization?',
    'Were you provided with opportunities for career growth and development?',
    'Did you experience any issues related to workplace culture or interpersonal relationships?',
    'Were your concerns and feedback addressed promptly and effectively?',
    'Did you have the resources and tools needed to excel in your role?',
    'Would you consider returning to work for the company in the future?',
    // 'Do you have any suggestions for how the company can improve the employee experience?',
    // 'What aspects of your job did you enjoy the most?',
    // 'What aspects of your job did you find most challenging?',
    // 'Do you have any feedback on the companys leadership and management?',
    // 'Were there any specific moments or experiences that significantly influenced your decision to leave?',
    // 'Would you recommend the company as a great place to work to others?',
    // 'Do you have any additional comments or insights you would like to share with us?',
  
  ];
  

  // State to track user responses
  const [responses, setResponses] = useState(Array(surveyQuestions.length).fill(''));

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle user's response to a question
  const handleResponse = (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
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
      <Image
        source={require('../assets/images/questions.png')}
        className="w-[75%] h-[40%] mb-5 rounded-3xl p-4"
      />
      <Text className="text-base mb-2">
        Question {currentQuestionIndex + 1} of {surveyQuestions.length}
      </Text>
      <Text className="text-xl font-bold mb-5">
        {surveyQuestions[currentQuestionIndex]}
      </Text>
      {/* Text input for open-ended response */}
      <TextInput
        className="bg-white border border-gray-300 rounded px-4 py-2 w-full mb-4"
        placeholder="Type your answer here..."
        value={responses[currentQuestionIndex]}
        onChangeText={(text) => handleResponse(text)}
        multiline
      />
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
          responses[currentQuestionIndex] === '' ? 'opacity-50' : ''
        }`}
        onPress={handleSubmit}
        disabled={responses[currentQuestionIndex] === ''}
      >
        <Text className="text-white font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpenEndedQuestions;
