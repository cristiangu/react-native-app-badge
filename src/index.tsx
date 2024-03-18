import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@guulabs/react-native-app-badge' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const AppBadgeModule = isTurboModuleEnabled
  ? require('./NativeAppBadge').default
  : NativeModules.AppBadge;

const AppBadge = AppBadgeModule
  ? AppBadgeModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setAppBadgeCount(count: number): void {
  AppBadge.setAppBadgeCount(count);
}
