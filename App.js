import React, { useEffect } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CodePush from 'react-native-code-push';

const CODE_PUSH_OPTIONS = {
  checkFrequency:CodePush.CheckFrequency.ON_APP_START
}

const App = () => {

  // use effect hook for CodePush
  useEffect(() => {
    CodePush.sync({installMode:CodePush.InstallMode.IMMEDIATE},syncWithCodePush);
  }, [])

  const syncWithCodePush = status => {
    console.log('CodePush sync status', status);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        CodePush: Empowering React Native Developers with Seamless Over-the-Air
        Updates
      </Text>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{uri: 'https://www.catster.com/wp-content/uploads/2023/11/siamese-cat-e1606771182522.jpg'}}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Black Siamese cat so cute uwu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'orange',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default CodePush(CODE_PUSH_OPTIONS)(App);