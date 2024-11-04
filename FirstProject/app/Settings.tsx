// app/Settings.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the Settings Screen</Text>
      <Button title="Go Back" onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.push('/'); // Navigate to home if no back route
        }
      }} />
    </View>
  );
}