import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  darkModeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
