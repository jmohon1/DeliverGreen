import React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';
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
      <TopNavigation title='' alignment='center'/>
      <Layout style={globalStyles.container}>
      <Image style={globalStyles.stepperLogo} source={require('../Images/delivergreen_logo_withtext-01.png')} />
      <Text style={globalStyles.stepperh1}>Pay!{"\n"}With Ease</Text>
      <Text style={globalStyles.stepperp}>Pay with your credit card, and get it delivered in an average of 27 minutes. We've made it that easy.</Text>
      <Button style={globalStyles.button} onPress={navigateDetails}>Get Started</Button>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage3.png')} />
      </Layout>
    </SafeAreaView>
  );
}; 