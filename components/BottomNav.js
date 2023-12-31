import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationState, useNavigation } from '@react-navigation/native';

function BottomNav() {
  const navigationState = useNavigationState((state) => state);
  const navigation = useNavigation();

  const activeRouteName = navigationState?.routes[navigationState?.index]?.name;

  const [selectedTab, setSelectedTab] = useState(activeRouteName);

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    navigation.navigate(tabName);
  };

  const tabItems = [
    { handle:'Home', name: 'IntroScreen', icon: 'home' },
    { handle:'Profile', name: 'Profile', icon: 'person' },
    { handle:'Settings', name: 'Settings', icon: 'settings' },
    { handle:'Help', name: 'HelpScreen', icon: 'help' },
  ];

  const screensToShowBottomNav = ['IntroScreen', 'Profile', 'Settings', 'HelpScreen'];

  if (!screensToShowBottomNav.includes(activeRouteName)) {
    return null;
  }

  return (
    <View
      className={`flex-row justify-between items-center bg-green-400 p-2 content-evenly bg-white gap-1 px-2 py-0 pb-3`}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
      }}
    >
      {tabItems.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => handleTabPress(tab.name)}
          className={`flex-1 items-center p-1`}
          style={{
            alignItems: 'center',
            borderTopWidth: activeRouteName === tab.name ? 2 : 0,
            borderColor: activeRouteName === tab.name ? 'green' : 'transparent',
          }}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeRouteName === tab.name ? 'green' : 'black'}
          />
          <Text
            style={{
              fontSize: 12,
              paddingTop: 0,
              color: activeRouteName === tab.name ? 'green' : 'black',
            }}
          >
            {tab.handle}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default BottomNav;
