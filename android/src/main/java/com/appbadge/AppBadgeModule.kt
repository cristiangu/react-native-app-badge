package com.appbadge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AppBadgeModule internal constructor(context: ReactApplicationContext) :
  AppBadgeSpec(context) {

  override fun getName(): String {
    return NAME
  }

  override fun setAppBadgeCount(count: Double) {
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun setAppBadgeCount(count: Int, promise: Promise) {
    promise.resolve(null)
  }

  companion object {
    const val NAME = "AppBadge"
  }
}
