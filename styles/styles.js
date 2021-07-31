import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const globalStyles = StyleSheet.create({

container: {
    flex: 1,
},
welcome: {
    textAlign: 'center'
},
stepperImages: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    backgroundColor: '#e7f4d5',
    marginTop: 80
},
stepperLogo: {
    height: 100,
    width: 100,
    marginBottom: 20,
    marginLeft: 25,
    marginTop: -20
},
stepperh1: {
    alignContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 25,
},
stepperp: {
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 5,
    color: '#757575'

},
button: {
    marginLeft: 25,
    marginBottom: 20,
    maxWidth: '40%',
    backgroundColor: '#619542',
    borderColor: '#619542',
    borderRadius: 20
},
}
)