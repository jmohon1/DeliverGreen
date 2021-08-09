import React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../styles/styles'

export const StepperPage1 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Home');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation style={globalStyles.navigatorheader} title='' alignment='center'/>
      <Layout style={globalStyles.container}>
      <Image style={globalStyles.stepperLogo} source={require('../Images/delivergreen_logo_withtext-01.png')} />
      <Text style={globalStyles.stepperh1}>Welcome!{"\n"}To Deliver Green</Text>
      <Text style={globalStyles.stepperp}>We negotiate with local businesses, to get you the best prices on cannabis.{"\n"}To begin reviewing available products in your area, <Text style={{fontWeight: 'bold'}}>please immediately setup</Text> your local address</Text>
      <Button style={globalStyles.button} onPress={navigateDetails}>Get Started</Button>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage1.png')} />
      </Layout>
    </SafeAreaView>
  );
}; 