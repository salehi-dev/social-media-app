import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';

import Title from './src/components/title/Title';
import styles from './assets/style/styles';
import {data} from './src/data/userStory';
import UserStory from './src/components/UserStory';
import {User} from './types/users';

function App(): React.JSX.Element {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderedData, setRenderedData] = useState([]);
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
        <View style={styles.userStoryContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <UserStory {...item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
