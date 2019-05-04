import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Easing, Dimensions } from 'react-native';
var {width, height} = Dimensions.get('window');
export default class FadeTranslateScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeValue: new Animated.Value(1),
            xValue: new Animated.Value(0),
            springValue: new Animated.Value(0.3)
        }
    }

    _fadeAnimate(){
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    _moveAnimate(){
        Animated.timing(this.state.xValue, {
            toValue: width - 100,
            duration: 1000,
            easing: Easing.linear,
            // easing: Easing.back()
        }).start(() => {
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
                // easing: Easing.back()
            }).start(() => {
                this._moveAnimate();
            }); 
        });
    }

    _springAnimate(){
        Animated.spring(this.state.springValue, {
            toValue: 1,
            friction: 1
        }).start(() => {
            Animated.spring(this.state.springValue, {
                toValue: 0.3,
                friction: 1
            }).start();  
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.animationView1, 
                    // {opacity: this.state.fadeValue}
                    {left: this.state.xValue}
                ]}>
                </Animated.View>
                <TouchableOpacity style={styles.btn} onPress={() => this._moveAnimate()}>
                    <Text style={styles.btnText}>Animate</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.animationView2, 
                    // {opacity: this.state.fadeValue}
                    // {left: this.state.xValue}
                    {transform : [{ scale: this.state.springValue}]}
                ]}>
                </Animated.View>
                <TouchableOpacity style={styles.btn} onPress={() => this._springAnimate()}>
                    <Text style={styles.btnText}>Spring</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    animationView1: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'skyblue'
    },
    animationView2: {
        width: 100,
        alignSelf: 'center',
        height: 100,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: 'skyblue'
    },
    btn: {
        backgroundColor: 'steelblue',
        height: 45,
        marginTop: 20,
        alignSelf: 'center'
    },
    btnText: {
        color: 'white',
        padding: 11,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold' 
    }
});