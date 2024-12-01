import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: 'Stickyfy' } } />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
