import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './component/screen';

export default function App() {
  return (
    < >
      <Calculator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});
