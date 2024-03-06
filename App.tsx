import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';

import Title from './src/components/title/Title';
import styles from './assets/style/styles';

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

export default App;
