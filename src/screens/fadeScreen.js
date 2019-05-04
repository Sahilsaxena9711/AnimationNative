import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default class FadeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0)
        }
    }

    _fadeAnimate(){
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.animationView, {opacity: this.state.fadeValue}]}>

                </Animated.View>
                <TouchableOpacity style={styles.btn} onPress={() => this._fadeAnimate()}>
                    <Text style={styles.btnText}>Animate</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animationView: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    btn: {
        backgroundColor: 'steelblue',
        height: 45,
        marginTop: 20
    },
    btnText: {
        color: 'white',
        padding: 11,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold' 
    }
});