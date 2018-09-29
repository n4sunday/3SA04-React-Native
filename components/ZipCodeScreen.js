import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight ,ImageBackground } from 'react-native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Kathu', code: '83120' },
    { place: 'Thung Song', code: '80110' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.text5}>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('../zp.jpeg')} style={styles.backdrop}>
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                    />
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    zipItem: { flexDirection: 'row', margin: 20 },
    zipPlace: { flex: 2 },
    zipCode: { flex: 2 },

    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    flexDir: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 360,
        backgroundColor: 'black',
        opacity: 0.5,

    },
});