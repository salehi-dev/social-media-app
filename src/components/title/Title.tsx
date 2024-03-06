import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Title({title}: {title: string}) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
  },
});
