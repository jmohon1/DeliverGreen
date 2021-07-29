import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <WebView
        source={{ uri: 'https://webjointtraining.webjoint.com/premiumshop/index.html#' }}
        style={{ marginTop: 25 }}
      />
  );
};