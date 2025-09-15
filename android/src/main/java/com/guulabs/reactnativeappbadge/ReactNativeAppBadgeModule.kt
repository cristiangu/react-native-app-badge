package com.guulabs.reactnativeappbadge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.Promise

@ReactModule(name = ReactNativeAppBadgeModule.NAME)
class ReactNativeAppBadgeModule(reactContext: ReactApplicationContext) :
  NativeReactNativeAppBadgeSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun setAppBadgeCount(count: Double, promise: Promise) {
    promise.resolve(null)
  }

  companion object {
    const val NAME = "ReactNativeAppBadge"
  }
}
