import * as React from 'react';
import { setAppBadgeCount } from 'react-native-app-badge';

export default function App() {

  React.useEffect(() => {
    setAppBadgeCount(5)
  }, []);

  return null;
}
