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
    { name: 'IntroScreen', icon: 'home' },
    { name: 'Profile', icon: 'person' },
    { name: 'Settings', icon: 'settings' },
    { name: 'Help', icon: 'Help' },
  ];

  const screensToShowBottomNav = ['Intro', 'Profile', 'Settings', 'Help'];

  if (!screensToShowBottomNav.includes(activeRouteName)) {
    return null;
  }

  return (
    <View
      className={`flex-row justify-between items-center bg-cyan-400 p-2 content-evenly bg-white gap-1 px-2 py-0 pb-3`}
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
            borderColor: activeRouteName === tab.name ? 'cyan' : 'transparent',
          }}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeRouteName === tab.name ? 'cyan' : 'black'}
          />
          <Text
            style={{
              fontSize: 12,
              paddingTop: 1,
              color: activeRouteName === tab.name ? 'cyan' : 'black',
            }}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default BottomNav;
