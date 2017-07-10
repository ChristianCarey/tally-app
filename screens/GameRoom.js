import React from 'react';
import {
ScrollView,
StyleSheetAlert,
AppRegistry,
Button,
StyleSheet,
TouchableHighlight,
View,
Image,
Text,
Alert
} from 'react-native';


export default class GameRoom extends React.Component {
  static navigationOptions = {
    title: 'Game Room',
  };
  _onPressButton() {
    Alert.alert('Submission Recieved')

  }

  render() {
      return (
      <ScrollView style={styles.container}>
          <View style={styles.gameRoom}>
              <Text style={{
                textAlign: 'center',
                fontSize: 30,
                color: 'blue'
              }}>
              What one thing of Mike’s would Ashley most want to throw away?
              </Text>
            <View style={styles.buttonContainer}>
              <View style={styles.indvButton}>
                <Button
                  onPress={this._onPressButton}
                  title="his motorcycle"
                  color="black"
                  />
              </View>
              <View style={styles.indvButton}>
                <Button
                  onPress={this._onPressButton}
                  title="his cowboy hat"
                  />
              </View>
              <View style={styles.indvButton}>
                <Button
                  onPress={this._onPressButton}
                  title="his hawaiian button-up"
                  />
              </View>
              <View style={styles.indvButton}>
                  <Button
                  onPress={this._onPressButton}
                  title="his crazy red pants"
                  />
              </View>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#75afea',
   alignItems: 'center',
   justifyContent: 'center'
  },
  questionWidget: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  indvQuestion: {
    height:10,
    width:10,
    backgroundColor: 'grey'
  },
  gradedQuestion: {
    height:10,
    width:10,
    backgroundColor: 'white'
  },
  currentQuestion: {
    height:10,
    width:10,
    backgroundColor: 'green'
  },
  gameRoom: {
    backgroundColor: 'grey',
    width:350,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:5,
    paddingRight:5,
    borderRadius:5,
    flex:1,
    justifyContent: 'center',
  },
  buttonContainer: {
  },
  indvButton: {
    color: 'black',
    backgroundColor: 'white',
    padding:15,
    margin:10,
  }


})
