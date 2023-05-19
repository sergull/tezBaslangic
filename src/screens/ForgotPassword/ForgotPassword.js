import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import styles from '../ForgotPassword/ForgotPasswordStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword = () => {

    return (
        <View style={styles.container}>

            <View style={styles.inner_container}>
                <Ionicons name='lock-closed-outline' size={100} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Giriş yaparken sorun mu yaşıyorsunuz?</Text>
                </View>

                <View style={styles.footer_container}>
                    <Text style={styles.footer_text}>
                        E-postanızı girin, size hesabınıza tekrar giriş yapmanız için bir bağlantı gönderelim.</Text>
                </View>

            </View>
            <View style={styles.input_container}>
                <Input placeholder='E-posta adresinizi giriniz' />
                <Button text='Gönder' />
            </View>


        </View>
    )
}

export default ForgotPassword;