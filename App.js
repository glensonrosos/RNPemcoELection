import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './setup/navigation';

export default function App() {
  return (
      <SafeAreaView style={{flex:1}}>
        <Navigation/>
      </SafeAreaView>
      
  );
}
