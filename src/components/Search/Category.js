import Meal from "./Meals";

export const HOTELS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Pearl Continental',
      'affordable',
      '3 Star',
      'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768',
      20,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Continetal',
      'affordable',
      '3 Star',
      'data:image/jpeg;base64,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',
      10,
      [
        '1 Slice White Bread',
        '1 Slice Ham',
        '1 Slice Pineapple',
        '1-2 Slices of Cheese',
        'Butter'
      ],
      [
        'Butter one side of the white bread',
        'Layer ham, the pineapple and cheese on the white bread',
        'Bake the toast for round about 10 minutes in the oven at 200°C'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Classic Continental',
      '4 Star',
      '3 Star',
      'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
      45,
      [
        '300g Cattle Hack',
        '1 Tomato',
        '1 Cucumber',
        '1 Onion',
        'Ketchup',
        '2 Burger Buns'
      ],
      [
        'Form 2 patties',
        'Fry the patties for c. 4 minutes on each side',
        'Quickly fry the buns for c. 1 minute on each side',
        'Bruch buns with ketchup',
        'Serve burger with tomato, cucumber and onion'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Burj al Arab',
      'luxurious',
      '5 Star',
      'https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg',
      60,
      [
        '8 Veal Cutlets',
        '4 Eggs',
        '200g Bread Crumbs',
        '100g Flour',
        '300ml Butter',
        '100g Vegetable Oil',
        'Salt',
        'Lemon Slices'
      ],
      [
        'Tenderize the veal to about 2–4mm, and salt on both sides.',
        'On a flat plate, stir the eggs briefly with a fork.',
        'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
        'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
        'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
        'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
        'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Atlantis the palm',
      'luxurious',
      '3 Star',
      'https://ak-d.tripcdn.com/images/0222k1200084amt9u5416_Z_550_412_R5_Q70_D.jpg',
      15,
      [
        'Arugula',
        "Lamb's Lettuce",
        'Parsley',
        'Fennel',
        '200g Smoked Salmon',
        'Mustard',
        'Balsamic Vinegar',
        'Olive Oil',
        'Salt and Pepper'
      ],
      [
        'Wash and cut salad and herbs',
        'Dice the salmon',
        'Process mustard, vinegar and olive oil into a dessing',
        'Prepare the salad',
        'Add salmon cubes and dressing'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Marco polo hotel',
      'affordable',
      '5 Star',
      'data:image/jpeg;base64,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',
      240,
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel'
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Merriott Hotle',
      'affordable',
      '3 Star',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1',
      20,
      [
        '1 1/2 Cups all-purpose Flour',
        '3 1/2 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
        '1 Tablespoon White Sugar',
        '1 1/4 cups Milk',
        '1 Egg',
        '3 Tablespoons Butter, melted'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Kings Park Hotel',
      '4 Star',
      '5 Star',
      'https://media.cntraveler.com/photos/5f678a13b981fb78a3045f90/master/w_2560,h_1707,c_limit/archipelagos-hotel-mykonos.jpg',
      35,
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Address SkyView',
      'affordable',
      '5 Star',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFicM3hrLpJ0-7MJ4LHLt4sCwr_0JsUVp3Q&usqp=CAU',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Taj Dubai',
      'luxurious',
      '3 Star',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-X9IGkokOAV_-t62CmQJCVx5RkWXk20A2g&usqp=CAU',
      30,
      [
        'White and Green Asparagus',
        '30g Pine Nuts',
        '300g Cherry Tomatoes',
        'Salad',
        'Salt, Pepper and Olive Oil'
      ],
      [
        'Wash, peel and cut the asparagus',
        'Cook in salted water',
        'Salt and pepper the asparagus',
        'Roast the pine nuts',
        'Halve the tomatoes',
        'Mix with asparagus, salad and dressing',
        'Serve with Baguette'
      ],
      true,
      true,
      true,
      true
    )
  ];