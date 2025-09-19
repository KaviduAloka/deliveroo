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
import RestaurantInfoHeaderRow from '../views/RestaurantInfoHeaderRow';

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
          source={images.restaurant_header}
          resizeMode="cover"
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image source={images.back_arrow_24} style={styles.backButtonIcon} />
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
      <TouchableOpacity style={styles.headerRowItemWrapper} onPress={() => {}}>
        <Image source={images.info} style={styles.infoIcon} />
        <View style={styles.rowItemContentWrapper}>
          <Text style={styles.rowItemTitle}>Info</Text>
          <Text style={styles.rowItemSubTitle}>
            Map, allergens and hygiene rating
          </Text>
        </View>
        <Image source={images.right_arrow} style={styles.rightArrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerRowItemWrapper} onPress={() => {}}>
        <Image source={images.star} style={styles.infoIcon} />
        <View style={styles.rowItemContentWrapper}>
          <Text style={styles.rowItemTitle}>4.7 Excellent</Text>
          <Text style={styles.rowItemSubTitle}>Sell all 500 reviews</Text>
        </View>
        <Image source={images.right_arrow} style={styles.rightArrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerRowItemWrapper}>
        <Image source={images.delivery} style={styles.deliveryIcon} />
        <Text style={styles.deliveryText}>Deliver in 15 - 30 min</Text>
        <Text style={styles.deliveryChangeText}>Change</Text>
      </TouchableOpacity>
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
        ListHeaderComponent={renderListHeader}
      />
    </SafeAreaView>
  );
};

export default RestaurantInformationContainer;
