/**
 * This preset fixes the "Warning: You called act(async () => ...) without await." error.
 * React native replace the native implementation of Promises with the 'promises' package and
 * then, some act() calls, return a Promise-like value that is not awaited and because of that
 * the warning is throwed.
 *
 * The patch first save Promise native implementation in the global variable 'nativePromise', load the react-native
 * original preset, and then saves the polyfilled one in the global variable 'polyfilledPromise'. That way we could swap
 * the implementations as we need.
 *
 * Source: https://stackoverflow.com/a/69201830
 * Opened react-native issue (2020-07-08): https://github.com/facebook/react-native/issues/29303
 * Solution based on https://github.com/sbalay/without_await/commit/64a76486f31bdc41f5c240d28263285683755938
 */

const reactNativePreset = require('react-native/jest-preset');

module.exports = {
  ...reactNativePreset,
  setupFiles: [require.resolve('./save-native-promise.js')]
    .concat(reactNativePreset.setupFiles)
    .concat([require.resolve('./save-polyfilled-promise.js')]),
};
