import ReactNativeAppBadge from './NativeReactNativeAppBadge';

export function setAppBadgeCount(count: number): Promise<void> {
  return ReactNativeAppBadge.setAppBadgeCount(count);
}
