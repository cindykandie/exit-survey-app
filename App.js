import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen'; // Import your LoginScreen
import SurveyQuestionsScreen from './screens/SurveyQuestionsScreen'; // Import your SurveyQuestionsScreen
import SubmissionConfirmationScreen from './screens/SubmissionConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="SurveyQuestionsScreen"
          component={SurveyQuestionsScreen}
          options={{ title: 'Survey Questions' }}
        />
        <Stack.Screen
          name="SubmissionConfirmationScreen"
          component={SubmissionConfirmationScreen}
          options={{ title: 'Submission answers' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
