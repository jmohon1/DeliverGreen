import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';


const onboardingComplete = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

export const StepperPage3 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Home');
    onboardingComplete(1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Stepper Page 3' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Next</Button>
      </Layout>
    </SafeAreaView>
  );
}; 