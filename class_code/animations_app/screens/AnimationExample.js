import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';
import globalStyles from '../shared/GlobalStyles';

const AnimationExample = () => {
    const [shapes, setShapes] = useState([]);
    const { width: screenWidth, height : screenHeight } = Dimensions.get('window')

    useEffect(() => {

        //create interval for generating shapes
        const interval = setInterval(() => {
            createShape()
        }, 1000) //every 1 second

        //stop the interval and its process when component is dismounted
        return () => clearInterval(interval)
    },[])

    const createShape = () => {
        //create shape at regular interval and and add it to the shapes array

        const shapeID = Date.now()

        const newShape = {
            id : shapeID,
            x : Math.random() * (screenWidth - 70), //generate random horizontal position ; x - axis
            animatedY : new Animated.Value(screenHeight) // y-axis
        }

        //add the shape to the array of existing shapes
        setShapes((prevShapes) => [...prevShapes, newShape])

        //start animating generated shape
        animateShape(newShape)
    };

    const animateShape = (shape) => {
        //animate the shape

        Animated.timing(
            shape.animatedY,
            {
                toValue: 0, //target value
                duration: 6000, //10 seconds; speed of animation
                useNativeDriver: true //if supported, offload to native driver for smoother animations
            }
        ).start( ({finished}) => {
            //check if animation is complete
            if(finished){
                // if yes, remove the shape from array to free up memory
                setShapes((prevShapes) => 
                    prevShapes.filter((oldShape) => oldShape.id === shape.id)
                )
            }
        })
    };

    return (
        <View style={globalStyles.animationContainer}>
            <View style={globalStyles.gameArea}>
                {
                    shapes.map((shape) => (

                        <Animated.View
                            key={shape.id}
                            style={[
                                globalStyles.shapeContainer,
                                { 
                                    left: shape.x, //specify the x coordinate for the view
                                    transform: [{ translateY: shape.animatedY}]
                                }
                            ]}
                        >

                            <Text style={globalStyles.shapeText}>🎈</Text>

                        </Animated.View>
                    ))
                }
            </View>
        </View>
    );
};

export default AnimationExample;
