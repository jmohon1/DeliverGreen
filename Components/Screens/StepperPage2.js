import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../styles/styles'

export const StepperPage2 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('StepperPage3');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Stepper Page 2' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage2.png')} />
        <Button onPress={navigateDetails}>NEXT</Button>
      </Layout>
    </SafeAreaView>
  );
}; 