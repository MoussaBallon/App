import { supabase } from '../services/supabase';



// Fonction pour récupérer tous les restaurants
export const fetchRestaurants = async () => {
    const { data, error } = await supabase
        .from('restaurants')
        .select('*');

    if (error) {
        console.log('Erreur de récupération des restaurants:', error);
        return [];
    }

    return data;
};