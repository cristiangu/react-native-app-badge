import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { setAppBadgeCount } from '@guulabs/react-native-app-badge';

export default function App() {
  React.useEffect(() => {
    setAppBadgeCount(5);
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <TouchableOpacity onPress={() => setAppBadgeCount(0)}>
        <Text>Clear app badge</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAppBadgeCount(5)}>
        <Text>Set app badge</Text>
      </TouchableOpacity>
    </View>
  );
}
