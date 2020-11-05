
export const recipes: any[] = [
  // {
  //   id: 2,
  //   name: 'Apple Crumb Pie',
  //   author: 'Jacob',
  //   createdDate: new Date('2020-10-27'),
  //   modifiedDate: new Date('2020-10-27'),
  //   description: 'Thick & flaky crust apple pie with apple filling soaked streusel topping.',
  //   tags: [
  //     'Fruit Pie',
  //     'Deep Dish'
  //   ],
  //   quantity: 1,
  //   yieldString: '9" deep dish pie',
  // },
  {
    id: 1,
    name: 'Chocolate Chunk Cookies',
    author: 'Jacob',
    createdDate: new Date('2020-10-27'),
    modifiedDate: new Date('2020-10-27'),
    description: 'Fudgy, coffee-y, tasty! Chocolate coffee pecan cookies.',
    details: 'These cookies are chewy with a thin layer of fudginess in the middle! Toasted pecans, bourbon, and milk powder add depth to these cookies. Espresso powder or instant decaf coffee is added to highlight the chocolate flavor.',
    prepTime: '35 minutes',
    bakeTime: '15-28 minutes',
    inactiveTime: 'Up to 2 days',
    tags: [
      'Easy',
      'Drop Cookie'
    ],
    quantity: 12,
    yieldString: '2.5oz cookies',
    recipeSteps: [
      {
        id: 1,
        recipeId: 1,
        ordinal: 1,
        imageSrc: null,
        text: 'Brown or melt the butter & cool slightly. Toast nuts in a 350 degree oven for 8-10 minutes.'
      },
      {
        id: 2,
        recipeId: 1,
        ordinal: 2,
        imageSrc: null,
        text: 'In a big bowl mix the dry soluble ingredients: sugars, salt, milk powder.'
      },
      {
        id: 3,
        recipeId: 1,
        ordinal: 3,
        imageSrc: null,
        text: 'Add the brown butter and whisk until the sugars are slightly dissolved and the bowl is cool to the touch. Mix in the vanilla, eggs and bourbon. Whisk until the mixture has taken in a bunch of air and is a pale color.'
      },
      {
        id: 4,
        recipeId: 1,
        ordinal: 4,
        imageSrc: null,
        text: 'In a separate bowl mix dry ingredients: flours, baking soda (I put it in my palm and squish the clumps), baking powder, cornstarch. Briefly mix (with paddle attachment or spatula) the dry into the wet ingredients one half at a time, there should still be a lot of unincorporated flour.'
      },
      {
        id: 5,
        recipeId: 1,
        ordinal: 5,
        imageSrc: null,
        text: 'Mix in chocolate & nuts (electric mixers will break whole pieces up nicely) until only a small amount of flour is unincorporated.'
      },
      {
        id: 6,
        recipeId: 1,
        ordinal: 6,
        imageSrc: null,
        text: 'Refrigerate 0 to 48 hours. Portion out 2.5oz (ice cream scoop) round cookies. The cookies can be frozen at this point.'
      },
      {
        id: 7,
        recipeId: 1,
        ordinal: 7,
        imageSrc: null,
        text: 'Just before baking, sprinkle with sea salt. Bake at 350F for 15-20 minutes for thick, crispy outside, fudgy inside cookies. Try 275F for 25-28 minutes for more spread out, evenly cooked, lighter cookies.'
      }
    ],
    recipeIngredients: [
      {
        id: 1,
        recipeId: 1,
        ordinal: 1,
        name: 'bread flour',
        quantity: 5,
        unit: 'oz',
        isOptional: false,
        note: null
      },
      {
        id: 2,
        recipeId: 1,
        ordinal: 2,
        name: 'all-purpose flour',
        quantity: 5.5,
        unit: 'oz',
        isOptional: false,
        note: null
      },
      {
        id: 3,
        recipeId: 1,
        ordinal: 3,
        name: 'dark brown sugar',
        quantity: 150,
        unit: 'g',
        isOptional: false,
        note: null
      },
      {
        id: 4,
        recipeId: 1,
        ordinal: 4,
        name: 'white granulated sugar',
        quantity: 50,
        unit: 'g',
        isOptional: false,
        note: 'Use less sugars for cakey cookies'
      },
      {
        id: 5,
        recipeId: 1,
        ordinal: 5,
        name: 'unsalted butter',
        quantity: 8,
        unit: 'oz',
        isOptional: false,
        note: null
      },
      {
        id: 6,
        recipeId: 1,
        ordinal: 6,
        name: 'eggs',
        quantity: 2,
        unit: 'ct',
        isOptional: false,
        note: null
      },
      {
        id: 7,
        recipeId: 1,
        ordinal: 7,
        name: 'egg yolk',
        quantity: 1,
        unit: 'ct',
        isOptional: true,
        note: 'omitting the 3rd white makes the cookie more fudgy, use 2 eggs otherwise'
      },
      {
        id: 8,
        recipeId: 1,
        ordinal: 8,
        name: 'semisweet chocolate',
        quantity: 7,
        unit: 'oz',
        isOptional: false,
        note: '>=60% cacao'
      },
      {
        id: 9,
        recipeId: 1,
        ordinal: 9,
        name: 'iodized salt',
        quantity: .5,
        unit: 'tsp',
        isOptional: false,
        note: null
      },
      {
        id: 10,
        recipeId: 1,
        ordinal: 10,
        name: 'baking soda',
        quantity: .5,
        unit: 'tsp',
        isOptional: false,
        note: null
      },
      {
        id: 11,
        recipeId: 1,
        ordinal: 11,
        name: 'baking powder',
        quantity: 1.5,
        unit: 'tsp',
        isOptional: false,
        note: null
      },
      {
        id: 12,
        recipeId: 1,
        ordinal: 12,
        name: 'vanilla extract ',
        quantity: 2,
        unit: 'tsp',
        isOptional: true,
        note: null
      },
      {
        id: 13,
        recipeId: 1,
        ordinal: 13,
        name: 'instant coffee',
        quantity: 1,
        unit: 'tbsp',
        isOptional: true,
        note: 'decaf if sharing these, double for a clear coffee flavor'
      },
      {
        id: 14,
        recipeId: 1,
        ordinal: 14,
        name: 'pecans',
        quantity: 4,
        unit: 'oz',
        isOptional: true,
        note: 'or walnuts, lightly toasted'
      },
      {
        id: 15,
        recipeId: 1,
        ordinal: 15,
        name: 'nonfat milk powder',
        quantity: 2,
        unit: 'tbsp',
        isOptional: true,
        note: 'improves the caramelization and flavor of the cookies'
      },
      {
        id: 16,
        recipeId: 1,
        ordinal: 16,
        name: 'cornstarch',
        quantity: 1,
        unit: 'tsp',
        isOptional: true,
        note: 'contributes to chew and fudginess'
      },
      {
        id: 17,
        recipeId: 1,
        ordinal: 17,
        name: 'flaky sea salt',
        quantity: null,
        unit: null,
        isOptional: true,
        note: 'for topping'
      },
      {
        id: 18,
        recipeId: 1,
        ordinal: 18,
        name: 'bourbon',
        quantity: 2,
        unit: 'tbsp',
        isOptional: true,
        note: null
      }
    ]
  },
  // {
  //   id: 3,
  //   name: 'Vegan Apple Crumb Pie',
  //   author: 'Jacob',
  //   createdDate: new Date('2020-10-27'),
  //   modifiedDate: new Date('2020-10-27'),
  //   tags: [
  //     'Vegan',
  //     'Fruit Pie',
  //     'Deep Dish'
  //   ],
  //   quantity: 1,
  //   yieldString: '9" deep dish pie',
  //   description: 'Freestanding vegan apple pie with an extra crunchy walnut oat topping. Great with vegan ice cream!',
  // },
];
