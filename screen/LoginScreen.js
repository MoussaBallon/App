// LoginScreen
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { signIn } from '../services/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await signIn(email, password);
            Alert.alert('Succès', 'Connexion réussie!');
        } catch (error) {
            Alert.alert('Erreur', error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Se connecter</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <Button title="Se connecter" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
