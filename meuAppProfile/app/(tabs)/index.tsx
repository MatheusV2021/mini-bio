import { View, Text, StyleSheet } from 'react-native';


import Profile from '@/components/Profile';

export default function HomeScreen() {
  return (

  
    <View style={styles.container}>

      
      <Text style={styles.title}>
        Programação para Dispositivos Móveis
      </Text>

   
      <Profile />

    </View>

  );
}


const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

});