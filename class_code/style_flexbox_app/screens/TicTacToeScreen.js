import React, { useState } from "react";
import { StyleSheet, Alert, Text, View, TouchableOpacity } from "react-native";
import appStyles from "../shared/AppStyles";
import { COLORS } from "../shared/Constants";

const TicTacToeScreen = () => {

  // Initialize the board as a 3x3 2D array
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (board) => {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
      // Check columns
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }
    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }
    // Check for draw
    const isDraw = board.every(row => row.every(cell => cell !== null));
    return isDraw ? "Draw" : null;
  };

  const handleCellPress = (row, col) => {
    if (board[row][col] || gameOver) return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (isXNext ? "X" : "O") : cell))
    );

    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameOver(true);
      if (winner !== "Draw") {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
        Alert.alert("Game Over", `${winner} Wins!`);
      } else {
        Alert.alert("Game Over", "It's a Draw!");
      }
    }
  };

  const resetGame = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setIsXNext(true);
    setGameOver(false);
  };

  return (
      <View style={appStyles.container}>
        <Text style={ [ 
            appStyles.headerStyle, 
            styles.title , 
            { color: COLORS.titleColor} ,
            { backgroundColor: COLORS.background}
            // { color: 'mediumturquoise'} 
          ] 
          }>
          Tic Tac Toe
        </Text>
        <View style={appStyles.scoreBoard}>
          <Text style={appStyles.textStyle}>X: {score.X}</Text>
          <Text style={appStyles.textStyle}>O: {score.O}</Text>
        </View>
        <View style={appStyles.board} >
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (

              <TouchableOpacity
                key={`${rowIndex}-${colIndex}`}
                style={appStyles.cell}
                onPress={ () => {handleCellPress(rowIndex, colIndex)}}
              >
                  <Text style={appStyles.textStyle}> {cell} </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        <TouchableOpacity
          onPress={ () => {resetGame()}}
        >
            <Text style={appStyles.textStyle}>Reset Game</Text>
        </TouchableOpacity>
      </View>
  );
};

export default TicTacToeScreen;

const styles = StyleSheet.create({

  title: {
    color: 'darkorchid',
    backgroundColor : 'gainsboro'
  }
});