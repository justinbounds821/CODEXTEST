# Magic App

This React Native app built with Expo implements the core features from the `APP` prompt. Users can log in and view a list of locations fetched from the Magic API. The authentication token is stored securely so returning users are logged in automatically.

## Features

- Secure login with error handling
- Persistent authentication token
- Logout option from the main screen
- Fetches locations from the API

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npx expo start
   ```

The API base URL is defined in `src/utils/constants.js`. If you prefer using environment variables, create a `.env` file and export `EXPO_PUBLIC_API_URL`, then adjust the constant to read from `process.env.EXPO_PUBLIC_API_URL`.

## Scripts

- `npm start` – run the app with Expo
- `npm run android` – launch on Android emulator/device
- `npm run ios` – launch on iOS simulator
- `npm run web` – run the web version

Happy coding!
