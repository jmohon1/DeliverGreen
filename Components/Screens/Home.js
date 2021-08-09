import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <WebView options={{
      title: 'My home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
        source={{ uri: 'https://delivergreen.webjoint.xyz/premiumshop/index.html#' }}
        style={{ marginTop: 15, backgroundColor: '#000' }}
      />
  );
};