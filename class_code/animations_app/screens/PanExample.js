import React, { useRef, useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Animated,
  PanResponder,
} from 'react-native';
import globalStyles from '../shared/GlobalStyles';

const PanExample = () => {

  const dragPosition = useRef(new Animated.ValueXY()).current
  const dragResponder = useRef(
    PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      //event to respond when user starts moving the object
      onPanResponderMove: Animated.event(
        [null,
          {
            dx: dragPosition.x, dy: dragPosition.y
          }
        ],
        { useNativeDriver: false }
      ),

      // event to perform changes when gesture is active
      onPanResponderGrant: () => {
        //move the object from prev location to the current
        dragPosition.setOffset(
          { x : dragPosition.x._value, y : dragPosition.y._value})

        //set the current x and y coordinate as present position
        dragPosition.setValue({x: 0, y: 0})
      },

      // event to respond when user releases the touch
      onPanResponderRelease: () =>{
        //keep the object at the current position
        // set the current position with current x & y coordinates using flatteOffset()
        dragPosition.flattenOffset()
      }

    })
  ).current

  //duration of double tap should be less than 300 millisconds
  const doubleTapPosition = useRef(new Animated.Value(0)).current; //y axis for the ball
  const lastTapTime = useRef(0)

  const doubleTapResponder = (event) => {
    //operations to perform when the ball is double-tapped

    const now = Date.now()

    //check if user tapped 2 time within 0.3 seconds
    if (now - lastTapTime.current < 300){
      //trigger the Animation if user double tapped

      doubleTapPosition.setValue(0) //reset the value before starting the animation

      Animated.sequence([
        Animated.timing(
          doubleTapPosition,
          {
            toValue: -100,
            duration: 200,
            useNativeDriver: false
          }
        ),
        Animated.spring(
          doubleTapPosition,
          {
            toValue: 0, //target value is the original place
            useNativeDriver: false,
            // bounciness: 5,
            stiffness: 170,
            damping: 20,
            mass: 1
          }
        )

      ]).start()
    }

    //reset lastTapTime
    lastTapTime.current = now

  };

  const [longPressVisible, setLongPressVisible] = useState(true);
  //opacity 1 means 100% visible
  // opacity 0.5 means 50% visible
  //opacity 0 meand 0% visible (invisible)
  const rocketOpacity = useRef(new Animated.Value(1)).current;

  const handleLongPress = () => {
    //operations to perform when the rocket is long-pressed
    Animated.timing(
      rocketOpacity,
      {
        toValue: 0, //change opacity to 0 to make it invisible
        duration: 300,
        useNativeDriver: true
      }
    ).start(() => setLongPressVisible(false))
  };

  const resetLongPress = () => {
    setLongPressVisible(true);

    //operations to perform when the rocket is reset
    Animated.timing(
      rocketOpacity,
      {
        toValue: 1, //change opacity to 1 to make it visible
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  };

  return (
    <View style={globalStyles.panContainer}>


    <Animated.View
      {...dragResponder.panHandlers}
      
      style={
        { transform: dragPosition.getTranslateTransform()}
      }
    >

      <Text style={globalStyles.shapeBlock}>🌺</Text>

    </Animated.View>


      <Text style={globalStyles.infoText}>Drag the flower anywhere on screen</Text>

      <Animated.View
        style={
          { transform: [ {translateY: doubleTapPosition }]}
        }
        onTouchEnd={doubleTapResponder}
      >
        <Text style={globalStyles.shapeBlock}>🏀</Text>

      </Animated.View>

      <Text style={globalStyles.infoText}>Double-Tap the ball</Text>

      {longPressVisible ? (

        <Animated.View
          style={
            {opacity: rocketOpacity}
          }
        >

          <TouchableWithoutFeedback onLongPress={handleLongPress}>
            
            <Text style={globalStyles.shapeBlock}>🚀</Text>
          </TouchableWithoutFeedback>
        </Animated.View>


      ) : (

        <TouchableWithoutFeedback onPress={resetLongPress}>
          <Text style={[globalStyles.infoText, { color: "green" }]}>Block disappeared! Tap to reset.</Text>
        </TouchableWithoutFeedback>

      )}
      <Text style={globalStyles.infoText}>LongPress the rocket</Text>

    </View>
  );
};

export default PanExample;
