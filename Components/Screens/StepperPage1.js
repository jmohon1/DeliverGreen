import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../styles/styles'

export const StepperPage1 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('StepperPage2');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Stepper Page 1' alignment='center'/>
      <Divider/>
      <Layout style={globalStyles.layout}>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage1.png')} />
        <Button onPress={navigateDetails}>NEXT</Button>
      </Layout>
    </SafeAreaView>
  );
}; 