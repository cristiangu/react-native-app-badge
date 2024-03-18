
#import <UserNotifications/UserNotifications.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAppBadgeSpec.h"

@interface AppBadge : NSObject <NativeAppBadgeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AppBadge : NSObject <RCTBridgeModule>
#endif

@end
