import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function UserProfileImage() {
  return (
    <View style={styles.userImageContainer}>
      <Image source={require('../../assets/images/default-profile.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  userImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 50,
  },
});
