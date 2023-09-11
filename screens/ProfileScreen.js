import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [userName, setUserName] = useState('John Doe'); // Replace with the user's actual name
  const [userEmail, setUserEmail] = useState('johndoe@example.com'); // Replace with the user's actual email
  const [userBio, setUserBio] = useState(''); // State to track user's bio

  // Function to update user's bio
  const handleBioChange = (text) => {
    setUserBio(text);
  };

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Profile</Text>
      <Text className="text-base mb-2">Name:</Text>
      <TextInput
        className="bg-white border border-gray-300 rounded px-4 py-2 mb-4"
        value={userName}
        onChangeText={(text) => setUserName(text)}
        placeholder="Your Name"
      />
      <Text className="text-base mb-2">Email:</Text>
      <TextInput
        className="bg-white border border-gray-300 rounded px-4 py-2 mb-4"
        value={userEmail}
        onChangeText={(text) => setUserEmail(text)}
        placeholder="Your Email"
        keyboardType="email-address"
      />
      <Text className="text-base mb-2">Short Bio (Optional):</Text>
      <TextInput
        className="bg-white border border-gray-300 rounded px-4 py-2 mb-4"
        value={userBio}
        onChangeText={handleBioChange}
        placeholder="Add a short bio..."
        multiline
      />
      <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded mb-4">
        <Text className="text-white font-bold">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
