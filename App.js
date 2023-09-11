import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen'; // Import your LoginScreen
import SubmissionConfirmationScreen from './screens/SubmissionConfirmationScreen';
import IntroScreen from './screens/IntroScreen';
import OpenEndedQuestions from './screens/OpenQuestions';
import MultipleChoiceQuestions from './screens/ChoiceQuestions';
import FeedbackScreen from './screens/FeedBack';
import Help from './screens/Help';
import BottomNav from './components/BottomNav';
import SettingsScreen from './screens/Settings';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

function Root() {
  return (
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
          name="IntroScreen"
          component={IntroScreen}
          options={{ title: 'Hey!' }}
        />
        <Stack.Screen
          name="OpenEndedQuestions"
          component={OpenEndedQuestions}
          options={{ title: 'Survey Questions' }}
        />
        <Stack.Screen
          name="MultipleChoiceQuestions"
          component={MultipleChoiceQuestions}
          options={{ title: 'Survey Questions' }}
        />
        <Stack.Screen
          name="SubmissionConfirmationScreen"
          component={SubmissionConfirmationScreen}
          options={{ title: 'Submission answers' }}
        />
        <Stack.Screen
          name="FeedBackScreen"
          component={FeedbackScreen}
          options={{ title: 'FeedBack Submission' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
         <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={Help}
          options={{ title: 'Here For You' }}
        />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root />
      <BottomNav />
    </NavigationContainer>
      
  );
  }