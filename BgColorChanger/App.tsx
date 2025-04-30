import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  const [randomBackground , setRandomBackgound] = useState("#ffffff");

  const generateColor = () =>{
     const hexRange = "0123456789ABCDEF"

     let color = "#"

     for (let i=0;i<6;i++){
       color += hexRange[Math.floor(Math.random() * 16)]
     }

     setRandomBackgound(color)   // Now the randomBackground value will be updated by this value here automatically . 
  }
    return (
      <>
        <StatusBar backgroundColor={randomBackground} /> // changes the top status bar
        <View style={[styles.container , {backgroundColor: randomBackground}]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}> Press ME ! </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#0A3D62',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#EAF0F1',
    textTransform: 'uppercase',
  },
});

export default App;
