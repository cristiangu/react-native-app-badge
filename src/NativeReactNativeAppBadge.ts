import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  setAppBadgeCount(count: number): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ReactNativeAppBadge');
