import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State to track theme setting
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to track language setting

  // Function to handle theme switch
  const handleThemeChange = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    // You can implement theme change logic here
  };

  // Function to handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can implement language change logic here
  };

  // Function to handle logout
  const handleLogout = () => {
    // Show a confirmation dialog before logging out
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            // You can implement logout logic here
            // For now, let's display an alert to confirm logout
            alert('Logged out successfully');
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Function to navigate to the HelpScreen
  const handleHelpPress = () => {
    navigation.navigate('HelpScreen');
  };

  return (
    <View className="flex items-center justify-center px-4">
      <Text className="text-2xl font-bold mb-4">Settings</Text>
      <View className="flex flex-row justify-between items-center w-full mb-4">
        <Text className="text-base">Dark Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleThemeChange} />
      </View>
      <View className="flex flex-row justify-between items-center w-full mb-4">
        <Text className="text-base">Language</Text>
        <TouchableOpacity onPress={() => handleLanguageChange('English')}>
          <Text className={`text-base ${selectedLanguage === 'English' ? 'font-bold' : ''}`}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageChange('Swahili')}>
          <Text className={`text-base ${selectedLanguage === 'Swahili' ? 'font-bold' : ''}`}>
            Swahili
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageChange('Spanish')}>
          <Text className={`text-base ${selectedLanguage === 'Spanish' ? 'font-bold' : ''}`}>
            Spanish
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageChange('French')}>
          <Text className={`text-base ${selectedLanguage === 'French' ? 'font-bold' : ''}`}>
            French
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mb-4" onPress={handleHelpPress}>
        <Text className="text-blue-500 font-bold">Help</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mb-4" onPress={handleLogout}>
        <Text className="text-red-500 font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
