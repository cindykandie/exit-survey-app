import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SurveyQuestionsScreen = ({ navigation }) => {
  const surveyStatements = [
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
  ];

  const [responses, setResponses] = useState(Array(surveyStatements.length).fill(0));
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);

  // Text descriptions for each rating
  const ratingTexts = [
    'Very Bad',
    'Meh',
    'Could Have Been Better',
    'Neutral',
    'Cant Complain',
    'I Really Loved It',
  ];

  // Colors for each rating
  const ratingColors = [
    'transparent',
    'maroon',
    'hotpink',
    'cyan',
    'lightblue',
    'green',
  ];

  const handleStarRating = (index, rating) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = rating;
    setResponses(updatedResponses);
  };

  const handlePreviousStatement = () => {
    if (currentStatementIndex > 0) {
      setCurrentStatementIndex(currentStatementIndex - 1);
    }
  };

  const handleNextStatement = () => {
    if (currentStatementIndex < surveyStatements.length - 1) {
      setCurrentStatementIndex(currentStatementIndex + 1);
    }
  };

  const renderStars = (statementIndex) => {
    const rating = responses[statementIndex];

    return (
      <View style={{ flexDirection: 'row' }}>
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <TouchableOpacity
            key={starIndex}
            onPress={() => handleStarRating(statementIndex, starIndex)}
          >
            <Ionicons
              name="star"
              size={32}
              color={starIndex <= rating ? ratingColors[rating] : 'gray'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleSubmit = () => {
    if (responses.every((rating) => rating > 0)) {
      // All statements have been rated
      // You can navigate to the next screen or perform other actions here
      navigation.navigate('SubmissionConfirmationScreen', { responses });
    } else {
      // Display an alert or message indicating that all statements must be rated
      alert('Please rate all statements before proceeding.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
      <Image
        source={require('../assets/images/questions.png')}
        style={{ width: '75%', height: '30%', marginBottom: 20, borderRadius: 50 }}
      />
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Statement {currentStatementIndex + 1} of {surveyStatements.length}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        {surveyStatements[currentStatementIndex]}
      </Text>
      <Text style={{ fontSize: 16, color: ratingColors[responses[currentStatementIndex]] }}>
        {ratingTexts[responses[currentStatementIndex]]}
      </Text>
      {renderStars(currentStatementIndex)}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginRight: 20,
            display: currentStatementIndex === 0 ? 'none' : 'flex',
          }}
          onPress={handlePreviousStatement}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            display: currentStatementIndex === surveyStatements.length - 1 ? 'flex' : 'flex',
          }}
          onPress={handleNextStatement}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: responses[currentStatementIndex] === 0 ? 'gray' : 'blue',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop: 20,
          display:
            currentStatementIndex === surveyStatements.length - 1 ? 'flex' : 'flex',
        }}
        onPress={handleSubmit}
        disabled={responses[currentStatementIndex] === 0}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurveyQuestionsScreen;

