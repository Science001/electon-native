This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

The most recent version of the guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Electon-Native

Twitter Polls, Facebook Likes, Favorites, etc. We bring you a single, free, user-friendly application that allows you to elect anything.
Electon allows registered users to cast their votes as well as nominate themselves for any topic of discussion, image or idea. Our Administrators will initiate and moderate the elections.
Our users can upload text or media and allow other users to cast their votes on it. The results of every “election” will be displayed at the end of the time-limit.
This is the mobile version of the Electon app, made with `React Native`.

## How it works?

Admin can start an election like "Who's got the best selfie?" and anyone can nominate themselves with a valid selfie of theirs within a nomination deadline. After nomination deadline, the voting process starts and anyone can vote till the voting deadline. After said deadline the ultimate result will be displayed. After this the nominees are free to compete in other elections. A nominee in one election cannot nominate himself for any other election until the former is finished.

## How is it built?

The Authentication pages are built using pure React Native and an open source module [tcomb-form-native](https://github.com/gcanti/tcomb-form-native/) for the forms, wrapped around Hasura's Auth API. The main app is divided into several screens and each of them are linked into the Navigation chain, using React Navigation.

## How to run?

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.
