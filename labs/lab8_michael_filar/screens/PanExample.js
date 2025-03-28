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
  const [boxColour, setBoxColour] = useState("green")
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
        setBoxColour("yellow")
        //move the object from prev location to the current
        dragPosition.setOffset(
          { x: dragPosition.x._value, y: dragPosition.y._value })

        //set the current x and y coordinate as present position
        dragPosition.setValue({ x: 0, y: 0 })
      },

      
      // event to respond when user releases the touch
      onPanResponderRelease: () => {
        setBoxColour("red")
        //keep the object at the current position
        // set the current position with current x & y coordinates using flatteOffset()
        dragPosition.flattenOffset()
    
      }

    })
  ).current

  return (
    <View style={globalStyles.panContainer}>
      <Animated.View
        {...dragResponder.panHandlers}
        style={
          { 
            backgroundColor: boxColour,
            transform: dragPosition.getTranslateTransform(),
            padding: 50
           }
        }
      >
        <Text style={{fontSize: 50}}>{boxColour.charAt(0).toUpperCase()+boxColour.slice(1)} Box</Text>
      </Animated.View>
      <Text style={globalStyles.standardText}>Drag the box around, watch it change colour.</Text>

    </View>
  );
};
export default PanExample;
