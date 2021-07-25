import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../assets/styles'

export const StepperPage1 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('StepperPage2');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Stepper Page 1' alignment='center'/>
      <Divider/>
      <Layout style={globalStyles.layout}>
        <Button onPress={navigateDetails}>NEXT</Button>
      </Layout>
    </SafeAreaView>
  );
}; 