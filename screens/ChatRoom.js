import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';

export default class ChatRoom extends React.Component {
  static navigationOptions = {
    title: 'TallyChat',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.switchButtons}>
        <View style={styles.selectedContainer}>
          <Button title="chat"/>
        </View>
        <View style={styles.selectedContainer}>
          <Button title="leaderboard"/>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#75afea',
  },
  switchButtons: {
    backgroundColor: 'grey',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedContainer: {
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  unselected: {
    marginLeft: 20,
    paddingHorizontal: 10,
    backgroundColor: 'grey'
  }
});
