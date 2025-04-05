# Crypto-AI-Integrated-System
This project is a mobile extension of my previously developed AI-blockchain integration system, with a focus on accessibility and real-time user interaction. The application combines AI-based price prediction, crypto portfolio management, and decentralized transaction execution through a responsive mobile interface.

Why This Project Matters?

1. Global Accessibility.
Allows retail traders to access professional tools (AI trading, risk analysis) directly from their smartphones, following the mobile-first adoption trend in emerging markets.

2. Multi-Layer Security.
The combination of quantum-resistant encryption (such as Phala Network) and biometric authentication minimizes the risk of account hacking.

3. Market Responsiveness.
Real-time notifications for critical events (e.g., flash crash, whale movement) using a similar mechanism to the alert system in Freqtrade/Jesse.

4. Integrated Ecosystem.
Becoming a bridge between my previous blockchain-DevOps hybrid system and end-users, adopting GitHub Copilot's "code once, deploy everywhere" philosophy.

5. Democratizing AI Trading.
Leveling the playing field between institutional and retail traders through algorithms previously only available to hedge funds (like Numerai).

## 🌟 Feature
- Real-Time Prices: Displays Bitcoin, Ethereum, etc., prices via CoinGecko API.
- AI Price Prediction: Shows 7-day price predictions using an LSTM model.
- Wallet Simulator: Generates a simulated wallet address and saves it locally.
- Simple UI: Only 3 main buttons and intuitive charts.

## ⚙️ Technologies Used
- React Native: For mobile app development.
- CoinGecko API: Fetches crypto prices.
- TensorFlow.js Lite: Runs LSTM models on mobile.
- AsyncStorage: Saves wallet data locally.

## 🚀 Instalation

Step 1: Project Setup!
Install basic tools and create a new project.

      # Install Node.js from https://nodejs.org  
      # Install React Native CLI  
      npm install -g react-native-cli  

      # Create a new project  
      npx react-native init CryptoAIMobile  
      cd CryptoAIMobile  


Step 2: Add Dependencies!
Copy these commands into the terminal!

      npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context axios @tensorflow/tfjs-react-native @react-native-async-storage/async-storage react-native-chart-kit  


Step 3: Main Code!
Create App.js and paste, or download App.js here!


Step 4: Run the App!
For Beginners: Run these commands in the terminal.

      # For Android  
      npx react-native run-android  

      # For iOS (requires macOS)  
      npx react-native run-ios  


Step 5: Explanation for Non-Technical Users!

"Refresh Prices" Button: Tap to update the latest Bitcoin price.
"Predict" Button: Displays a 7-day price prediction chart (simulated 2% daily increase).
"Create Wallet" Button: Generates a fake wallet address and saves it on the device.


For questions or discussions, feel free to open an Issue or email penugrah@criptext.com.
Thank you! 😊
