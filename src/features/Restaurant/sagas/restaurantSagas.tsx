import { PayloadAction } from '@reduxjs/toolkit';
import { RestaurantInformationResponseInterface } from '../interfaces';

export function* getRestaurantInformationSaga({
  payload,
}: PayloadAction<{
  restaurant_id: number;
  callback: (response: RestaurantInformationResponseInterface) => void;
}>) {
  const response: RestaurantInformationResponseInterface = {
    restaurant: {
      restaurant_name: 'Sunrise Diner',
      restaurant_description: 'Eastern ⋅ Breakfast ⋅ Vegetarian Friendly',
      restaurant_address: '123 Main St, Cityville',
      restaurant_image:
        'https://www.deliveroo.co.uk/static/images/menus/restaurant/sunrise_diner.jpg',
      restaurant_rating: 4.5,
      restaurant_rating_count: 150,
      restaurant_delivery_time: '30-40 min',
      restaurant_delivery_fee: '£2.50',
    },
    foods: {
      categories: [
        'Middle Eastern',
        'Classic Breakfast',
        'Vegetarian Friendly',
        'Pancakes',
        'Sagnature Sandwiches',
        'Morning Breakfast Croissant',
        'Brioche French Toast',
        'Freshly Baked Pastries',
        'Coffee and Tea',
        'Juices and Smoothies',
      ],
      popularWithOthers: [
        {
          id: 1,
          name: 'Shakshuka',
          description:
            'Two eggs poached in a spicy tomato sauce with peppers and onions. Served with warm pita bread.',
          price: 12.99,
          image:
            'https://www.deliveroo.co.uk/static/images/menus/restaurant/shakshuka.jpg',
          available: true,
        },
        {
          id: 2,
          name: 'Falafel Wrap',
          description:
            'Crispy falafel balls wrapped in a warm pita with lettuce, tomato, cucumber, and tahini sauce.',
          price: 9.99,
          image:
            'https://www.deliveroo.co.uk/static/images/menus/restaurant/falafel_wrap.jpg',

          available: true,
        },
      ],
      categorizedFoods: [
        {
          category: 'Middle Eastern',
          foods: [
            {
              id: 1,
              name: 'Shakshuka',
              description:
                'Two eggs poached in a spicy tomato sauce with peppers and onions. Served with warm pita bread.',
              price: 12.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/shakshuka.jpg',
              available: true,
            },
            {
              id: 2,
              name: 'Falafel Wrap',
              description:
                'Crispy falafel balls wrapped in a warm pita with lettuce, tomato, cucumber, and tahini sauce.',
              price: 9.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/falafel_wrap.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Classic Breakfast',
          foods: [
            {
              id: 3,
              name: 'Full English Breakfast',
              description:
                'Two eggs, bacon, sausage, baked beans, grilled tomatoes, mushrooms, and toast.',
              price: 14.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/full_english.jpg',

              available: true,
            },
            {
              id: 4,
              name: 'Pancakes with Maple Syrup',
              description:
                'Stack of fluffy pancakes served with butter and maple syrup.',
              price: 8.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/pancakes.jpg',

              available: false,
            },
          ],
        },
        {
          category: 'Vegetarian Friendly',
          foods: [
            {
              id: 5,
              name: 'Avocado Toast',
              description:
                'Smashed avocado on toasted sourdough bread, topped with cherry tomatoes and a sprinkle of chili flakes.',
              price: 10.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/avocado_toast.jpg',

              available: true,
            },
            {
              id: 6,
              name: 'Vegetarian Omelette',
              description:
                'Three-egg omelette filled with spinach, mushrooms, tomatoes, and cheese. Served with a side salad.',
              price: 11.99,
              image:
                'https://www.deliveroo.co.uk  /static/images/menus/restaurant/veg_omelette.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Pancakes',
          foods: [
            {
              id: 7,
              name: 'Blueberry Pancakes',
              description:
                'Fluffy pancakes filled with fresh blueberries, served with whipped cream and maple syrup.',
              price: 9.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/blueberry_pancakes.jpg',

              available: true,
            },
            {
              id: 8,
              name: 'Chocolate Chip Pancakes',
              description:
                'Pancakes loaded with chocolate chips, served with chocolate sauce and whipped cream.',
              price: 10.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/choc_chip_pancakes.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Sagnature Sandwiches',
          foods: [
            {
              id: 9,
              name: 'Club Sandwich',
              description:
                'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo. Served with fries.',
              price: 11.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/club_sandwich.jpg',
              available: true,
            },
            {
              id: 10,
              name: 'BLT Sandwich',
              description:
                'Bacon, lettuce, and tomato sandwich with mayo on toasted bread. Served with fries.',
              price: 10.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/blt_sandwich.jpg',
              available: true,
            },
          ],
        },
        {
          category: 'Morning Breakfast Croissant',
          foods: [
            {
              id: 11,
              name: 'Ham and Cheese Croissant',
              description:
                'Buttery croissant filled with ham and melted cheese. Served with a side salad.',
              price: 7.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/ham_cheese_croissant.jpg',

              available: true,
            },
            {
              id: 12,
              name: 'Almond Croissant',
              description:
                'Flaky croissant filled with almond paste and topped with sliced almonds and powdered sugar.',
              price: 6.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/almond_croissant.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Brioche French Toast',
          foods: [
            {
              id: 13,
              name: 'Classic Brioche French Toast',
              description:
                'Thick slices of brioche soaked in egg custard, grilled to perfection, and served with maple syrup and butter.',
              price: 9.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/brioche_french_toast.jpg',

              available: true,
            },
            {
              id: 14,
              name: 'Berry Compote French Toast',
              description:
                'Brioche French toast topped with a mixed berry compote and whipped cream.',
              price: 10.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/berry_french_toast.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Freshly Baked Pastries',
          foods: [
            {
              id: 15,
              name: 'Croissant',
              description:
                'Buttery and flaky croissant, perfect for breakfast or a snack.',
              price: 3.49,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/croissant.jpg',

              available: true,
            },
            {
              id: 16,
              name: 'Pain au Chocolat',
              description:
                'Flaky pastry filled with rich chocolate, perfect for a sweet treat.',
              price: 3.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/pain_au_chocolat.jpg',

              available: true,
            },
          ],
        },
        {
          category: 'Coffee and Tea',
          foods: [
            {
              id: 17,
              name: 'Cappuccino',
              description:
                'Espresso topped with steamed milk and a thick layer of foam.',
              price: 2.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/cappuccino.jpg',

              available: true,
            },
            {
              id: 18,
              name: 'Earl Grey Tea',
              description:
                'Classic black tea infused with bergamot oil, served with lemon or milk.',
              price: 2.49,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/earl_grey.jpg',
              available: true,
            },
          ],
        },
        {
          category: 'Juices and Smoothies',
          foods: [
            {
              id: 19,
              name: 'Fresh Orange Juice',
              description:
                'Cold-pressed fresh orange juice, packed with vitamin C.',
              price: 3.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/orange_juice.jpg',
              available: true,
            },
            {
              id: 20,
              name: 'Strawberry Banana Smoothie',
              description:
                'Blended smoothie made with fresh strawberries, banana, and yogurt.',
              price: 4.99,
              image:
                'https://www.deliveroo.co.uk/static/images/menus/restaurant/strawberry_banana_smoothie.jpg',
              available: true,
            },
          ],
        },
      ],
    },
  };

  payload.callback(response);
}
