import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Detail({navigation}: any) {
    const product = {
        name: 'Pina Mountain',
        discount: '15% OFF',
        originalPrice: 449,
        discountedPrice: 350,
        description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        image: 'link_to_image', 
    };

    return (
        <View style={styles.container}>
            <Image source={require('../img/pinaMoutain.png')} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.discount}>{product.discount} | ${product.discountedPrice}</Text>
            <Text style={styles.originalPrice}>${product.originalPrice}</Text>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity style={styles.addToCartButton} 
              onPress={() => {navigation.navigate("Init")}}
              >
                <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        margin: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    discount: {
        fontSize: 16,
        color: '#e91e63',
        marginBottom: 2,
    },
    originalPrice: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'line-through',
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
        textAlign: 'center',
    },
    addToCartButton: {
        backgroundColor: '#e91e63',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    addToCartText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
