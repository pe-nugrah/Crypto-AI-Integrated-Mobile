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

  // 1. Ambil harga kripto
  const fetchPrices = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    setPrices([...prices, response.data.bitcoin.usd]);
  };

  // 2. Prediksi harga dengan model LSTM (simulasi)
  const predictPrice = async () => {
    await tf.ready();
    // Model sederhana untuk contoh
    const model = tf.sequential({
      layers: [tf.layers.lstm({ units: 50, inputShape: [7, 1] }), tf.layers.dense({ units: 1 })],
    });
    // Prediksi dummy
    const fakePrediction = prices.slice(-7).map(price => price * 1.02);
    setPrediction(fakePrediction);
  };

  // 3. Generate wallet
  const generateWallet = async () => {
    const fakeAddress = `0x${Math.random().toString(36).substring(7)}`;
    await AsyncStorage.setItem('wallet', fakeAddress);
    setWallet(fakeAddress);
  };

  // Jalankan saat aplikasi dimulai
  useEffect(() => {
    fetchPrices();
    AsyncStorage.getItem('wallet').then(address => setWallet(address || ''));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💰 CryptoAI Mobile</Text>

      {/* Tombol Utama */}
      <Button title="Refresh Harga" onPress={fetchPrices} />
      <Button title="Prediksi 7 Hari" onPress={predictPrice} />
      <Button title="Buat Wallet" onPress={generateWallet} />

      {/* Tampilkan Harga */}
      <Text style={styles.section}>Harga Bitcoin Terkini: ${prices.slice(-1)[0] || 'Loading...'}</Text>

      {/* Grafik Prediksi */}
      {prediction.length > 0 && (
        <>
          <Text style={styles.section}>Prediksi Harga:</Text>
          <LineChart
            data={{ labels: ['Hari 1', 'Hari 2', 'Hari 3', 'Hari 4', 'Hari 5', 'Hari 6', 'Hari 7'], datasets: [{ data: prediction }] }}
            width={300}
            height={200}
            chartConfig={{ color: (opacity = 1) => `rgba(0, 150, 255, ${opacity})` }}
          />
        </>
      )}

      {/* Info Wallet */}
      {wallet && <Text style={styles.wallet}>Wallet Anda: {wallet}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  section: { fontSize: 18, marginVertical: 10 },
  wallet: { marginTop: 20, color: 'green' },
});
