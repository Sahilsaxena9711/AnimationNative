import React from 'react';
import {View, ScrollView, TouchableHighlight, Text, StyleSheet, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableHighlight style={styles.list} onPress={() => this.props.navigation.navigate('Fade')}>
                        <Text style={styles.text}>
                            Fade Animation
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.list} onPress={() => this.props.navigation.navigate('FadeTranslate')}>
                        <Text style={styles.text}>
                            Fade Translate Animation
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.list} onPress={() => this.props.navigation.navigate('GestureResponder')}>
                        <Text style={styles.text}>
                            Gesture Responder
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    list: {
        width: width*94/100,
        marginLeft: width*3/100,
        height: 40,
        marginTop: 5,
        borderColor: 'black',
        borderRadius: 4,
        textAlignVertical: 'center',
        backgroundColor: 'steelblue'
    },
    text: {
        marginTop: (40-27)/2,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})