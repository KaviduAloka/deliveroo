import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurantInformation } from '../../store/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuNavHeader from '../views/MenuNavHeader';
import { ThemeContext } from '../../../../components/ThemeContext';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import { colors, images } from '../../../../assets';
import styles from './styles';
import { goBack } from '../../../../navigation/NavigationService';
import { Text } from '../../../../components/typography';
import { RestaurantInformationResponseInterface } from '../../interfaces';
import commonStyles from '../../../../themes/commonStyles';
import Divider from '../../../../components/Divider';
import { useDebouncedCallback } from 'use-debounce';

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

  const updateActiveCategoryIndex = useDebouncedCallback((index: number) => {
    setActiveCategoryIndex(index);
  }, 100);

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

          updateActiveCategoryIndex(index);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onStickyHeaderItemPress = (index: number) => {
    verticalListRef?.current.scrollToIndex({
      index: index + 1,
      animated: true,
      viewOffset: 70,
    });
  };

  const renderListSeparator = () => <Divider style={styles.foodSeparator} />;

  const renderListHeader = () => (
    <View style={{ backgroundColor: theme.backgroundColor }}>
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
      <View style={styles.restaurantInfoWrapper}>
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

  const renderFoodItem = ({
    item,
  }: {
    item: {
      id: number;
      name: string;
      description: string;
      price: number;
      image: string;
      available: boolean;
    };
  }) => {
    return (
      <TouchableOpacity
        disabled={!item.available}
        activeOpacity={0.8}
        style={[
          styles.foodListItemWrapper,
          { opacity: item.available ? 1 : 0.5 },
        ]}
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
            >
              <Image source={images.plus} style={styles.addToCardIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addToCartDisabledButton}
              disabled={!item.available}
            >
              <Image source={images.plus} style={styles.addToCardIcon} />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderListFooter = () => <View style={styles.footerView} />;

  const renderItem = ({
    item,
  }: {
    item:
      | { sticky_view: boolean }
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
    if (item.sticky_view === undefined) {
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
    } else {
      return renderStickyHeader();
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
