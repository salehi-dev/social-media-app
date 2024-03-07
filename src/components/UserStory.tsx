import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {User} from '../../types/users';
import UserProfileImage from './UserProfileImage';

export default function UserStory(user: User) {
  return (
    <View style={styles.userStoryContainer}>
      <UserProfileImage />
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
