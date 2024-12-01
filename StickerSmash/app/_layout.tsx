import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: 'Stickyfy' } } />
      <Stack.Screen name="+not-found" />
      <StatusBar style="light" />
    </Stack>
  );
}
