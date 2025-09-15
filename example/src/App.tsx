import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { setAppBadgeCount } from '@guulabs/react-native-app-badge';

export default function App() {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => setAppBadgeCount(0)}>
        <Text>Clear app badge</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAppBadgeCount(5)}>
        <Text>Set app badge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
