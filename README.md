# Crypto-AI-Integrated-System

## 🌟 Feature
- Real-Time Prices: Displays Bitcoin, Ethereum, etc., prices via CoinGecko API.
- AI Price Prediction: Shows 7-day price predictions using an LSTM model.
- Wallet Simulator: Generates a simulated wallet address and saves it locally.
- Simple UI: Only 3 main buttons and intuitive charts.

## Technologies Used
- React Native: For mobile app development.
- CoinGecko API: Fetches crypto prices.
- TensorFlow.js Lite: Runs LSTM models on mobile.
- AsyncStorage: Saves wallet data locally.

## 🚀 Instalation

Step 1: Project Setup.
Install basic tools and create a new project.

      # Install Node.js from https://nodejs.org  
      # Install React Native CLI  
      npm install -g react-native-cli  

      # Create a new project  
      npx react-native init CryptoAIMobile  
      cd CryptoAIMobile  


Step 2: Add Dependencies.
Copy these commands into the terminal!

      npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context axios @tensorflow/tfjs-react-native @react-native-async-storage/async-storage react-native-chart-kit  


Step 3: Main Code.
Create App.js and paste, or download App.js here!


Step 4: Run the App.
For Beginners: Run these commands in the terminal.

      # For Android  
      npx react-native run-android  

      # For iOS (requires macOS)  
      npx react-native run-ios  


Step 5: Explanation for Non-Technical Users.

"Refresh Prices" Button: Tap to update the latest Bitcoin price.

"Predict" Button: Displays a 7-day price prediction chart (simulated 2% daily increase).

"Create Wallet" Button: Generates a fake wallet address and saves it on the device.



