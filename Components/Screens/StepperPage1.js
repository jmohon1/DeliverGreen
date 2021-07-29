import React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { globalStyles } from '../../styles/styles'

export const StepperPage1 = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('StepperPage2');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='' alignment='center'/>
      <Divider/>
      <Layout style={globalStyles.container}>
      <Image style={globalStyles.stepperLogo} source={require('../Images/appstore.png')} />
      <Text style={globalStyles.stepperh1}>Welcome!{"\n"}To Deliver Green</Text>
      <Text style={globalStyles.stepperp}>We negotiate with local businesses, to get you the best prices on cannabis. We're like a cannabis superhero.</Text>
      <Button style={globalStyles.button} onPress={navigateDetails}>NEXT</Button>
      <Image style={globalStyles.stepperImages} source={require('../Images/stepperimage1.png')} />
      </Layout>
    </SafeAreaView>
  );
}; 