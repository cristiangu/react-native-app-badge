#import "ReactNativeAppBadge.h"
#import <UserNotifications/UserNotifications.h>

@implementation ReactNativeAppBadge
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeReactNativeAppBadgeSpecJSI>(params);
}

- (void)runWithNotificationPermissions:(void (^)(void))execute onPermissionError:(void (^)(NSError *))onPermissionError {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center requestAuthorizationWithOptions:UNAuthorizationOptionBadge completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (error) {
            onPermissionError(error);
            return;
        }
        if (granted) {
            dispatch_async(dispatch_get_main_queue(), ^{
                execute();
            });
            return;
        } else {
            NSDictionary *userInfo = @{@"message": @"No error was thrown, but permission has not been granted."};
            NSError *permissionError = [NSError errorWithDomain:@"" code:0 userInfo:userInfo];
            onPermissionError(permissionError);
            return;
        }
    }];
}

- (void)setAppBadgeCount:(double)count
                 resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject {
  [self runWithNotificationPermissions:^{
      [UIApplication sharedApplication].applicationIconBadgeNumber = count;
      resolve(nil);
  } onPermissionError:^(NSError *error)  {
      reject(@"set_app_badge_count_failure", @"Failed to set app badge count.", error);
  }];
}

@end
