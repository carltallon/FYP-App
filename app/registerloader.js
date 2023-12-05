import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export default function RegisterLoader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/'); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{
        marginBottom: 20,
        marginTop: 40,
      }}>
        <Image
            source={require('./images/icon.png')} 
            style={styles.iconloader}
        />
      </View>
      <Text style={{fontSize: 25}}>You're new here? Let's do this.</Text>
    </View>
  );
};


