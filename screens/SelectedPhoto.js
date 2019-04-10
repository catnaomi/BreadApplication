import React from 'react';
import {
  Image,
  View,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import UserScreen from './UserScreen';

const SelectedPhoto = (props) => {
  const { uri } = props;
  return (
    <View style={styles.container}>
      <View style = {styles.yesButton}>
        <Button
          onPress={() => {
            
          }}
          title="Yes"
        />
      </View>
      <Image
        source={{uri: uri}}
        style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 500,
    width: 350
  },
  yesButton: {
    height: 30,
    width: 300,
  }
});

export default SelectedPhoto;