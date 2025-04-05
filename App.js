import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';

export default function App() {
  const [prices, setPrices] = useState([]);
  const [prediction, setPrediction] = useState([]);
  const [wallet, setWallet] = useState('');

  // 1. Take the crypto price
  const fetchPrices = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    setPrices([...prices, response.data.bitcoin.usd]);
  };

  // 2. Price prediction with LSTM model (simulation)
  const predictPrice = async () => {
    await tf.ready();
    // Simple model for example
    const model = tf.sequential({
      layers: [tf.layers.lstm({ units: 50, inputShape: [7, 1] }), tf.layers.dense({ units: 1 })],
    });
    // Dummy prediction
    const fakePrediction = prices.slice(-7).map(price => price * 1.02);
    setPrediction(fakePrediction);
  };

  // 3. Generate wallet
  const generateWallet = async () => {
    const fakeAddress = `0x${Math.random().toString(36).substring(7)}`;
    await AsyncStorage.setItem('wallet', fakeAddress);
    setWallet(fakeAddress);
  };

  // Run when application starts
  useEffect(() => {
    fetchPrices();
    AsyncStorage.getItem('wallet').then(address => setWallet(address || ''));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💰 CryptoAI Mobile</Text>

      {/* Home Button */}
      <Button title="Refresh Prices" onPress={fetchPrices} />
      <Button title="Predict" onPress={predictPrice} />
      <Button title="Create Wallet" onPress={generateWallet} />

      {/* Show Price */}
      <Text style={styles.section}>Latest Bitcoin Prices: ${prices.slice(-1)[0] || 'Loading...'}</Text>

      {/* Prediction Chart */}
      {prediction.length > 0 && (
        <>
          <Text style={styles.section}>Price Prediction:</Text>
          <LineChart
            data={{ labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], datasets: [{ data: prediction }] }}
            width={300}
            height={200}
            chartConfig={{ color: (opacity = 1) => `rgba(0, 150, 255, ${opacity})` }}
          />
        </>
      )}

      {/* Info Wallet */}
      {wallet && <Text style={styles.wallet}>Your wallet: {wallet}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  section: { fontSize: 18, marginVertical: 10 },
  wallet: { marginTop: 20, color: 'green' },
});
