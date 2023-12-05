import { View, Text } from 'react-native';
import { styles } from './styles'; // Import the style
import { Link } from 'expo-router';

export default function Page()  {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>About</Text>

        <Link href="/">Home</Link>

    </View>
    )
}
