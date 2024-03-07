import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {Posts} from '../../types/Posts';
import {} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import UserProfileImage from './UserProfileImage';

export default function UserPost({
  firstName,
  lastName,
  likes,
  bookmarks,
  comments,
  location,
}: Posts) {
  return (
    <View style={styles.userWrapper}>
      <View style={styles.userContainer}>
        <View style={styles.userInfoContainer}>
          <UserProfileImage />
          <View style={styles.userInfo}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
        </Pressable>
      </View>
      <View style={styles.post}>
        <Image
          resizeMode="cover"
          source={require('../../assets/images/default-post.png')}
        />
      </View>
      <View style={styles.actionsContainer}>
        <Pressable style={styles.actions}>
          <FontAwesomeIcon icon={faHeart} style={styles.actionsIcon} />
          <Text style={styles.actionsText}>{likes}</Text>
        </Pressable>
        <Pressable style={styles.actions}>
          <FontAwesomeIcon icon={faComment} style={styles.actionsIcon} />
          <Text style={styles.actionsText}>{comments}</Text>
        </Pressable>
        <Pressable style={styles.actions}>
          <FontAwesomeIcon icon={faBookmark} style={styles.actionsIcon} />
          <Text style={styles.actionsText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userWrapper: {
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    marginBottom: 20,
    paddingBottom: 20,
  },
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 10,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  actions: {
    marginRight: 27,
    flexDirection: 'row',
  },
  actionsIcon: {
    marginRight: 3,
    color: '#79869F',
  },
  actionsText: {
    color: '#79869F',
  },
});
