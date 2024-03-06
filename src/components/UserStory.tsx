import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {User} from '../../types/users';

export default function UserStory(user: User) {
  return (
    <View style={styles.userStoryContainer}>
      <View style={styles.userImageContainer}>
        <Image source={require('../../assets/images/default-profile.png')} />
      </View>
      <Text style={styles.name}>{user.firstName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userStoryContainer: {
    marginRight: 20,
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 8,
  },
  userImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 50,
  },
});
