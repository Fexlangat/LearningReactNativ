// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="About" options={{ title: 'About' }} />
    </Stack>
  );
}
