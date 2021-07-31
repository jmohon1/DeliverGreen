import React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../styles/styles'

export const StepperPage2 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('StepperPage3');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='' alignment='center'/>
      <Layout style={globalStyles.container}>
      <Image style={globalStyles.stepperLogo} source={require('../Images/appstore.png')} />
      <Text style={globalStyles.stepperh1}>Shop!{"\n"}With Confidence</Text>
      <Text style={globalStyles.stepperp}>Our menu's curated with the best selling products from the best selling brands. Why settle for anything less?</Text>
      <Button style={globalStyles.button} onPress={navigateDetails}>NEXT</Button>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage2.png')} />
      </Layout>
    </SafeAreaView>
  );
}; 