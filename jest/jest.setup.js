/* eslint-disable no-undef */
import 'jest';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockNotifee from '@notifee/react-native/jest-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('react-native-localize', () => {
  return {
    getTimeZone: jest.fn(),
    getCountry: jest.fn(),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@notifee/react-native', () => mockNotifee);

jest.mock('@react-native-firebase/analytics', () => ({
  messaging: jest.fn(() => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
  })),
  notifications: jest.fn(() => ({
    onNotification: jest.fn(),
    onNotificationDisplayed: jest.fn(),
  })),
  analytics: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

jest.mock('react-native-text-input-mask', () => 'TextInputMask');

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-orientation-locker', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    lockToPortrait: jest.fn(),
    lockToLandscapeLeft: jest.fn(),
    lockToLandscapeRight: jest.fn(),
    lockToLandscape: jest.fn(),
    unlockAllOrientations: jest.fn(),
  };
});

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
