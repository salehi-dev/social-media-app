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
import {posts} from './src/data/posts';
import UserStory from './src/components/UserStory';
import {User} from './types/users';
import UserPost from './src/components/UserPost';
import {Posts} from './types/Posts';

function App(): React.JSX.Element {
  const pageSize = 4;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [pageNumber, setPageNumber] = useState<number>(1);

  const pageSizePosts = 2;
  const [postPageNumber, setPostPageNumber] = useState<number>(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false);
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const pagination = (
    data: User[] | Posts[],
    pageNumber: number,
    pageSize: number,
    posts = false,
  ): any => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };
  const reachedEndHandler = () => {
    if (!isLoading) {
      setIsLoading(true);
      setRenderedData(prev => [
        ...prev,
        ...pagination(data, pageNumber + 1, pageSize),
      ]);
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
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
                onMomentumScrollBegin={() => setIsLoadingPosts(false)}
                onEndReachedThreshold={0.5}
                onEndReached={reachedEndHandler}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderedData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <UserStory {...item} />}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userPostContainer}>
            <UserPost {...item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
