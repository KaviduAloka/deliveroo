import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRestaurantInformation } from '../../store/actions';
import MenuNavHeader from '../views/MenuNavHeader';
import { ThemeContext } from '../../../../components/ThemeContext';
import { colors, images } from '../../../../assets';
import styles from './styles';
import { goBack } from '../../../../navigation/NavigationService';
import { Text } from '../../../../components/typography';
import {
  RestaurantFoodInterface,
  RestaurantInformationResponseInterface,
} from '../../interfaces';
import commonStyles from '../../../../themes/commonStyles';
import Divider from '../../../../components/Divider';
import { navigateToRestaurantFoodInformation } from '../../../../navigation/navigationHelpers';

interface Props {
  route: { params: { restaurant_id: number } };
}

const RestaurantInformationContainer: React.FC<Props> = ({
  route: { params },
}) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const horizontalListRef = useRef(null);
  const verticalListRef = useRef(null);

  const [restaurantInformation, setRestaurantInformation] =
    React.useState<null | RestaurantInformationResponseInterface>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  useEffect(() => {
    dispatch(
      getRestaurantInformation({
        restaurant_id: params.restaurant_id,
        callback: setRestaurantInformation,
      }),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50, // consider item "visible" if 50% is in view
  }).current;

  const onViewableItemsChanged = useCallback(
    (
      { viewableItems }: { viewableItems: ViewToken[] },
      categoriesList: string[],
    ) => {
      if (viewableItems.length > 0) {
        const currentItem = viewableItems[0].item;
        const index = categoriesList.findIndex(
          item => item === currentItem.category,
        );
        if (currentItem.category && index !== -1) {
          horizontalListRef?.current?.scrollToIndex({
            index: index,
            animated: true,
            viewOffset: 5,
          });

          setActiveCategoryIndex(index);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onStickyHeaderItemPress = (index: number) => {
    verticalListRef?.current.scrollToIndex({
      index: index + 2,
      animated: true,
      viewOffset: 70,
    });
  };

  const renderListSeparator = () => <Divider style={styles.foodSeparator} />;

  const renderListHeader = () => (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <View style={styles.headerImageWrapper}>
        <Image
          source={{ uri: restaurantInformation?.restaurant.restaurant_image }}
          resizeMethod="scale"
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image source={images.back_arrow_24} style={styles.backButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.restaurantInfoWrapper}>
        <Text style={styles.restaurantName}>Nando's - Soho</Text>
        <Text style={styles.restaurantSubText}>
          {restaurantInformation?.restaurant.restaurant_description}
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
          <Text style={styles.rowItemTitle}>
            {restaurantInformation?.restaurant.restaurant_rating} Excellent
          </Text>
          <Text style={styles.rowItemSubTitle}>
            Sell all {restaurantInformation?.restaurant.restaurant_rating_count}
            reviews
          </Text>
        </View>
        <Image source={images.right_arrow} style={styles.rightArrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerRowItemWrapper}>
        <Image source={images.delivery} style={styles.deliveryIcon} />
        <Text style={styles.deliveryText}>
          Deliver in{' '}
          {restaurantInformation?.restaurant.restaurant_delivery_time}
        </Text>
        <Text style={styles.deliveryChangeText}>Change</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStickyHeader = () => (
    <View
      style={[
        styles.stickyHeaderWrapper,
        { backgroundColor: theme.backgroundColor },
      ]}
    >
      <FlatList
        horizontal
        ref={horizontalListRef}
        style={styles.stickyList}
        showsHorizontalScrollIndicator={false}
        data={restaurantInformation?.foods.categories}
        renderItem={({ item, index }) => {
          const active = index === activeCategoryIndex;

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onStickyHeaderItemPress(index)}
              style={[
                styles.stickyHeaderItem,
                {
                  backgroundColor: active
                    ? colors.PRIMARY_GREEN
                    : theme.backgroundColor,
                },
              ]}
            >
              <Text style={styles.stickyHeaderItemText(active)}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );

  const renderPopularWithPeopleView = () => {
    return (
      <>
        <Text style={styles.listCategoryText}>Popular with other people</Text>
        <FlatList
          horizontal
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          data={restaurantInformation?.foods.popularWithOthers}
          renderItem={renderPopularWithOthersViewListItem}
        />
      </>
    );
  };

  const renderFoodItem = ({ item }: { item: RestaurantFoodInterface }) => {
    return (
      <TouchableOpacity
        disabled={!item.available}
        activeOpacity={0.8}
        style={[
          styles.foodListItemWrapper,
          { opacity: item.available ? 1 : 0.5 },
        ]}
        onPress={() => navigateToRestaurantFoodInformation({ food: item })}
      >
        <View style={commonStyles.fullFlex}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.rowItemSubTitle}>{item.description}</Text>
          <Text style={styles.foodPrice}>${item.price} G</Text>
        </View>
        {item.image ? (
          <View>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/1472680285/photo/healthy-meal-with-grilled-chicken-rice-salad-and-vegetables-served-by-woman.jpg?s=612x612&w=0&k=20&c=E4Y94oLIj8lXYk0OovBhsah3s_sC--WF95xPDvbJPlU=',
              }}
              style={styles.foodImage}
              resizeMode="cover"
              resizeMethod="scale"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addToCartButton}
              disabled={!item.available}
              onPress={() =>
                navigateToRestaurantFoodInformation({ food: item })
              }
            >
              <Image source={images.plus} style={styles.addToCartIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addToCartDisabledButton}
              disabled={!item.available}
            >
              <Image source={images.plus} style={styles.addToCartIcon} />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderPopularWithOthersViewListItem = ({
    item,
  }: {
    item: RestaurantFoodInterface;
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.verticalCard,
          { backgroundColor: theme.backgroundColor },
        ]}
        onPress={() => navigateToRestaurantFoodInformation({ food: item })}
      >
        <View>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1472680285/photo/healthy-meal-with-grilled-chicken-rice-salad-and-vegetables-served-by-woman.jpg?s=612x612&w=0&k=20&c=E4Y94oLIj8lXYk0OovBhsah3s_sC--WF95xPDvbJPlU=',
            }}
            style={styles.verticalCardImage}
          />
          <TouchableOpacity
            style={styles.addToCartButtonVerticalCard}
            onPress={() => navigateToRestaurantFoodInformation({ food: item })}
          >
            <Image
              source={images.plus}
              style={styles.addToCartIconVerticalCard}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalCardBody}>
          <Text
            style={styles.verticalCardTitle}
            defaultTextProps={{ numberOfLines: 2 }}
          >
            {item.name}
          </Text>
          <Text>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListFooter = () => <View style={styles.footerView} />;

  const renderItem = ({
    item,
  }: {
    item:
      | { sticky_view: boolean }
      | { popular_items: boolean }
      | {
          category: string;
          foods: Array<{
            sticky_view?: boolean;
            id: number;
            name: string;
            description: string;
            price: number;
            image: string;
          }>;
        };
  }) => {
    if ('category' in item && 'foods' in item) {
      //  list item
      return (
        <>
          <Text style={styles.listCategoryText}>{item.category}</Text>
          <FlatList
            style={[
              styles.foodsList,
              { backgroundColor: theme.backgroundColor },
            ]}
            keyExtractor={keyExtractor}
            data={item.foods}
            renderItem={renderFoodItem}
            ItemSeparatorComponent={renderListSeparator}
            scrollEnabled={false}
          />
        </>
      );
    } else if ('sticky_view' in item && item.sticky_view) {
      // sticky header view
      return renderStickyHeader();
    } else if ('popular_items' in item && item.popular_items) {
      //  popular with other people view
      return renderPopularWithPeopleView();
    }
  };

  const keyExtractor = (item: any, index: number) => index.toString();

  return (
    <SafeAreaView style={{ backgroundColor: theme.backgroundLightColor }}>
      <MenuNavHeader />
      {restaurantInformation && (
        <FlatList
          ref={verticalListRef}
          data={[
            { sticky_view: true },
            { popular_items: true },
            ...restaurantInformation.foods.categorizedFoods,
          ]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListHeaderComponent={renderListHeader}
          stickyHeaderIndices={[1]}
          onViewableItemsChanged={({ viewableItems }) =>
            onViewableItemsChanged(
              { viewableItems },
              restaurantInformation.foods.categories,
            )
          }
          viewabilityConfig={viewabilityConfig}
          ListFooterComponent={renderListFooter()}
        />
      )}
    </SafeAreaView>
  );
};

export default RestaurantInformationContainer;
