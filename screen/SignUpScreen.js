// SignUpScreen
import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { signUp } from '../services/auth';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [role, setRole] = useState('customer');

    const handleSignUp = async () => {
        try {
            const response = await signUp(email, password, nom, prenom, telephone, role);
            Alert.alert('Succès', 'Inscription réussie!');
        } catch (error) {
            Alert.alert('Erreur', error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Créer un compte</Text>
            <TextInput placeholder="Nom" value={nom} onChangeText={setNom} style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="Prénom" value={prenom} onChangeText={setPrenom} style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="Téléphone" value={telephone} onChangeText={setTelephone} style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 10, borderWidth: 1, padding: 10 }} />
            <Picker
                selectedValue={role}
                onValueChange={(itemValue) => setRole(itemValue)}
            >
                <Picker.Item label="Customer" value="customer" />
                <Picker.Item label="Restaurant" value="restaurant" />
            </Picker>
            <Button title="S'inscrire" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;
