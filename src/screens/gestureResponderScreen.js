import React from 'react';
import { View, Dimensions, PanResponder, Animated, StyleSheet } from 'react-native';

export default class GestureResponderScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1)
        }
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
                // this.state.pan.setOffset({ x: 0, y: 0 })
                Animated.spring(
                    this.state.scale,
                {
                    toValue: 1.3,
                    friction: 3
                }).start();
            },
            onPanResponderMove: Animated.event([
                null,
                {dx: this.state.pan.x, dy: this.state.pan.y}
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,
                {
                    toValue: 1, friction: 3 
                }).start();
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.animatedView, 
                    {
                        transform: [{scale: this.state.scale}, {translateX: this.state.pan.x}, {translateY: this.state.pan.y}],

                    }]}
                    {...this._panResponder.panHandlers}    
                >
                    <Animated.Text style={styles.text}>Drag me</Animated.Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        textAlignVertical: 'center',
        backgroundColor: 'steelblue'
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginTop: (100-14)/2,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})