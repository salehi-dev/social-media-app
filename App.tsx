import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';

import Title from './src/components/title/Title';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Title title="Let's Explore" />
          <Pressable style={styles.messgeIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
            <View style={styles.messageContainer}>
              <Text style={styles.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 26,
  },
  messgeIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
  messageContainer: {
    width: 14,
    height: 14,
    padding: 3,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    top: 10,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 7,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 7,
  },
});

export default App;
