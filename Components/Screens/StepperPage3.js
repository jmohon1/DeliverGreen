import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../styles/styles'


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
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage3.png')} />
        <Button onPress={navigateDetails}>Next</Button>
      </Layout>
    </SafeAreaView>
  );
}; 