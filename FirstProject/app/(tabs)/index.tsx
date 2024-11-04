// import {AppRegistry} from 'react-native';
// import App from '../App';

// AppRegistry.registerComponent('HelloWorld', () => App);



// app/index.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Profile" onPress={() => router.push('/Profile')} />
      <Button title="Go to Settings" onPress={() => router.push('/Settings')} />
      <Button title="Go to About" onPress={() => router.push('/About')} />
    </View>
  );
}
