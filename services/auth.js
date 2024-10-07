import { supabase } from '../services/supabase'; // Chemin vers votre fichier Supabase config
import 'react-native-get-random-values'; // Si vous avez besoin d'utiliser `uuid` avec React Native
import { v4 as uuidv4 } from 'uuid'; // Bibliothèque pour générer des UUID dans React Native


export const signUp = async (email, password, nom, prenom, telephone, role) => {
    try {
        // Vérification du rôle
        if (role !== 'customer' && role !== 'restaurant') {
            throw new Error("Le rôle doit être soit 'customer' soit 'restaurant'.");
        }

        // Inscription de l'utilisateur dans Supabase Authentication
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            throw authError;
        }

        // Si l'authentification réussit, insérer l'utilisateur dans la table `users`
        const { data: userData, error: userError } = await supabase
            .from('users')
            .insert([
                {
                    id: authData.user.id, // Utilise l'ID généré par l'authentification
                    email: email,
                    nom: nom,
                    prenom: prenom,
                    telephone: telephone,
                    role: role, // Ajouter le rôle dans la table `users`
                },
            ]);

        if (userError) throw userError;

        return { authData, userData };
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error.message);
        throw error;
    }
};



export const signIn = async (email, password) => {
    try {
        // Connexion de l'utilisateur avec email et mot de passe
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) throw authError;

        return authData;
    } catch (error) {
        console.error('Error signing in:', error.message);
        throw error;
    }
};