import React, { useContext, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../../../components/ThemeContext';
import styles from './styles';
import { images } from '../../../../assets';
import { goBack } from '../../../../navigation/NavigationService';
import { Text } from '../../../../components/typography';
import { RestaurantFoodInterface } from '../../interfaces';
import { StaticScreenProps } from '@react-navigation/native';
import Divider from '../../../../components/Divider';
import Button from '../../../../components/Button';

type Props = StaticScreenProps<{ food: RestaurantFoodInterface }>;

const RestaurantFoodInformationContainer: React.FC<Props> = ({
  route: {
    params: { food },
  },
}) => {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState(1);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1472680285/photo/healthy-meal-with-grilled-chicken-rice-salad-and-vegetables-served-by-woman.jpg?s=612x612&w=0&k=20&c=E4Y94oLIj8lXYk0OovBhsah3s_sC--WF95xPDvbJPlU=',
            }}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={goBack}
            activeOpacity={0.8}
            style={styles.headerCloseButton}
          >
            <Image source={images.close} style={styles.headerCloseIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{food.name}</Text>
          <Text style={styles.description}>{food.description}</Text>
        </View>
      </ScrollView>
      <Divider />
      <View style={styles.cartWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setValue(pre => --pre)}
          disabled={value === 1}
        >
          <Image source={images.decrement} style={styles.cartIcon(value > 1)} />
        </TouchableOpacity>
        <Text style={styles.cartValue}>{value}</Text>
        <TouchableOpacity
          onPress={() => setValue(pre => ++pre)}
          activeOpacity={0.8}
        >
          <Image source={images.increment} style={styles.cartIcon(true)} />
        </TouchableOpacity>
      </View>
      <Button>Add for ${food.price}</Button>
    </SafeAreaView>
  );
};

export default RestaurantFoodInformationContainer;
