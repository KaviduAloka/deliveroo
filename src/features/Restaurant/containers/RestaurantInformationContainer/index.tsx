import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurantInformation } from '../../store/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuNavHeader from '../views/MenuNavHeader';
import { ThemeContext } from '../../../../components/ThemeContext';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { images } from '../../../../assets';
import styles from './styles';
import { goBack } from '../../../../navigation/NavigationService';
import { Text } from '../../../../components/typography';

interface Props {
  route: { params: { restaurant_id: number } };
}

const RestaurantInformationContainer: React.FC<Props> = ({
  route: { params },
}) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getRestaurantInformation({ restaurant_id: params.restaurant_id }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderListHeader = () => (
    <>
      <View style={styles.headerImageWrapper}>
        <Image
          source={images.RESTAURANT_HEADER}
          resizeMode="cover"
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image source={images.BACK_ARROW_24} style={styles.backButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.restaurantDetailsWrapper}>
        <Text style={styles.restaurantName}>Nando's - Soho</Text>
        <Text style={styles.restaurantSubText}>
          20 - 30 · Portuguese · Sandwiches · Burgers
        </Text>
        <Text style={styles.restaurantSubText}>
          0.60 miles away · Closes at 21:00 · $8.00 minimum · $2 delivery
        </Text>
      </View>
    </>
  );

  const keyExtractor = (item: any, index: number) => index.toString();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <MenuNavHeader />
      <FlatList
        data={[]}
        renderItem={() => <></>}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ListHeaderComponentStyle={{ marginHorizontal: -20 }}
        ListHeaderComponent={renderListHeader}
      />
    </SafeAreaView>
  );
};

export default RestaurantInformationContainer;
