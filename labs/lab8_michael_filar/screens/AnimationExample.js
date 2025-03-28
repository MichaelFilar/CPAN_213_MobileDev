import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    Animated,
    Button
} from 'react-native';
import globalStyles from '../shared/GlobalStyles';

const Cat = (props) => {
    return (
        <Animated.View
            key={props.shape.id}
            style={[
                globalStyles.shapeContainer,
                {
                    top: props.shape.y,
                    left: props.shape.x, //specify the x coordinate for the view
                    transform: [{ rotate: props.RotateValue }],
                    opacity: props.opacity,
                }
            ]}
        >
            <Text style={globalStyles.shapeText}>🐱</Text>
        </Animated.View>
    )
}

const AnimationExample = () => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const rotation = useRef(new Animated.Value(0)).current;
    const catOpacity = useRef(new Animated.Value(1)).current;
    const [shape, setShape] = useState({
        id: Date.now(),
        x: ((screenWidth / 2)-(globalStyles.shapeContainer.width/2)),
        y: ((screenHeight / 2)-(globalStyles.shapeContainer.height)),

    });


    const spinCat = () => {

        Animated.timing(
            rotation,
            {
                toValue: 1,
                duration: 600,
                useNativeDriver: true
            }
        ).start(({ finished }) => {
            if (finished) {
                Animated.timing(
                    rotation,
                    {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }).start()
            }
        })
    };

    const catDisappear = () => {
        Animated.timing(
            catOpacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start(({ finished }) => {
            if (finished) {
                Animated.timing(
                    catOpacity,
                    {
                        toValue: 1,
                        duration: 300, 
                        useNativeDriver: true
                    }).start()
            }
        });
    }

    return (
        <View style={globalStyles.animationContainer}>
            <View style={globalStyles.gameArea}>
                {
                    <Cat
                        shape={shape}
                        RotateValue={rotation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] })}
                        opacity={catOpacity}
                    />
                }
            </View>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="Cat Spin"
                    onPress={() => { spinCat() }}
                />
                <Button
                    title="Cat Vanish"
                    onPress={() => { catDisappear() }}
                />
            </View>

        </View>
    );
};

export default AnimationExample;
