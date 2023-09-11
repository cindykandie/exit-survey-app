import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Help and Support</Text>
      <Text className="text-base mb-4">
        If you have any questions, concerns, or need assistance, please don't hesitate to contact our support team. You can reach us through the following channels:
      </Text>
      <Text className="text-base mb-2">
        Email: <Text className="text-blue-500 font-bold">support@example.com</Text>
      </Text>
      <Text className="text-base mb-2">
        Phone: <Text className="text-blue-500 font-bold">+1 (123) 456-7890</Text>
      </Text>
      <Text className="text-base mb-2">
        Live Chat: Visit our website for live chat support during business hours.
      </Text>
      <Text className="text-base mb-4">
        Our support team is available from Monday to Friday, 9:00 AM - 5:00 PM (local time). We are here to assist you with any issues or questions you may have.
      </Text>
      <Text className="text-base">
        Thank you for using our Exit Survey App!
      </Text>
    </ScrollView>
  );
};

export default HelpScreen;
