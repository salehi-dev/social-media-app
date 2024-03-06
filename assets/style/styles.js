import {StyleSheet} from 'react-native';

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
    borderRadius: 14,
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

export default styles;
