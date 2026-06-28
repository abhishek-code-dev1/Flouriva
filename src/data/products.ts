export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  isBestseller?: boolean;
  specifications: {
    flavour: string;
    weight: string;
    eggless: boolean;
    shelfLife: string;
    servingSize: string;
    ingredients: string;
  };
  availability: "in-stock" | "pre-order" | "out-of-stock";
  tags: string[];
  reviewsList: Review[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Chocolate Truffle Cake",
    description: "Rich, dense chocolate sponge layered with smooth chocolate ganache.",
    detailedDescription: "Indulge in our signature Chocolate Truffle Cake, a true masterpiece crafted for chocolate lovers. This cake features layers of ultra-moist chocolate sponge cake, generously filled and coated with a silky-smooth, rich Belgian chocolate ganache. Every bite offers a perfect balance of deep cocoa flavors and melt-in-your-mouth texture. Topped with delicate chocolate shards and a light dusting of premium cocoa powder, it's perfect for birthdays, anniversaries, or self-indulgent celebrations.",
    price: 850,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cakes",
    isBestseller: true,
    specifications: {
      flavour: "Dutch Chocolate Truffle",
      weight: "500g / 1kg",
      eggless: true,
      shelfLife: "2-3 Days (Refrigerated)",
      servingSize: "6-8 People",
      ingredients: "Premium Dark Chocolate (55% Cocoa), Cocoa Powder, Wheat Flour, Fresh Dairy Cream, Butter, Sugar."
    },
    availability: "in-stock",
    tags: ["chocolate", "truffle", "cake", "bestseller", "eggless"],
    reviewsList: [
      {
        id: "r1",
        author: "Aarav Mehta",
        rating: 5,
        comment: "Absolutely rich and delicious! The ganache was perfectly balanced and not overly sweet. Highly recommended for chocolate fans.",
        date: "2026-06-20"
      },
      {
        id: "r2",
        author: "Priya Sharma",
        rating: 5,
        comment: "Ordered this for my dad's birthday. Everyone loved it. It was incredibly moist and fresh. Delivery was right on time!",
        date: "2026-06-15"
      },
      {
        id: "r3",
        author: "Rohan Das",
        rating: 4,
        comment: "Great taste and quality. A bit dense but that is exactly how a truffle cake should be. Eggless option is excellent.",
        date: "2026-05-28"
      }
    ]
  },
  {
    id: "2",
    name: "Red Velvet Cake",
    description: "Classic red velvet sponge with signature cream cheese frosting.",
    detailedDescription: "Experience the royal elegance of our Red Velvet Cake. Boasting a striking crimson hue, this cake consists of exceptionally soft and velvet-textured cocoa-infused layers. Sandwiched and enveloped by our signature whipped cream cheese frosting, it delivers a wonderful tangy-sweet contrast that lingers on the palate. Garnished beautifully with velvet crumbs, this cake is as stunning to look at as it is delightful to eat.",
    price: 950,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586985289688-ca9acf701150?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cakes",
    isBestseller: true,
    specifications: {
      flavour: "Vanilla Cocoa & Cream Cheese",
      weight: "500g / 1kg",
      eggless: true,
      shelfLife: "2 Days (Refrigerated)",
      servingSize: "6-8 People",
      ingredients: "Premium Cream Cheese, Organic Beet Extract (for color), Light Cocoa Powder, Wheat Flour, Vanilla Extract."
    },
    availability: "in-stock",
    tags: ["red velvet", "cream cheese", "cake", "bestseller", "eggless"],
    reviewsList: [
      {
        id: "r4",
        author: "Meera Nair",
        rating: 5,
        comment: "The cream cheese frosting is out of this world! Tangy, creamy, and sweet. The sponge was super soft.",
        date: "2026-06-25"
      },
      {
        id: "r5",
        author: "Vikram Malhotra",
        rating: 4.5,
        comment: "Stunning presentation and authentic red velvet flavor. My wife loved it for our anniversary.",
        date: "2026-06-10"
      }
    ]
  },
  {
    id: "3",
    name: "Black Forest Cake",
    description: "Layers of chocolate sponge, whipped cream, and fresh cherries.",
    detailedDescription: "A traditional German favorite re-imagined for our luxury menu. Our Black Forest Cake starts with layers of fluffy chocolate sponge cake, soaked with a touch of sweet cherry syrup. We layer it with heaps of light, vanilla-whipped cream and chopped tart cherries. The exterior is coated in more cream, smothered with premium dark chocolate shavings, and topped with whole glazed cherries. It is a light, fruity, and classic chocolate experience.",
    price: 750,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cakes",
    specifications: {
      flavour: "Chocolate Cherry Vanilla",
      weight: "500g / 1kg",
      eggless: true,
      shelfLife: "2-3 Days (Refrigerated)",
      servingSize: "6-8 People",
      ingredients: "Fresh Cherries, Cocoa, Heavy Cream, Sugar, Wheat Flour, Premium Dark Chocolate Shavings."
    },
    availability: "in-stock",
    tags: ["classic", "chocolate", "cherries", "black forest", "cake"],
    reviewsList: [
      {
        id: "r6",
        author: "Siddharth Rao",
        rating: 5,
        comment: "Authentic taste. The cherries were fresh, not canned. Excellent cream texture.",
        date: "2026-06-22"
      },
      {
        id: "r7",
        author: "Anjali Gupta",
        rating: 4,
        comment: "Very light and not too sweet. Perfect cake for summer celebrations.",
        date: "2026-06-18"
      }
    ]
  },
  {
    id: "4",
    name: "Pineapple Cake",
    description: "Light vanilla sponge layered with fresh cream and pineapple chunks.",
    detailedDescription: "Bright, refreshing, and wonderfully tropical. Our Pineapple Cake consists of layers of fluffy golden vanilla sponge cake soaked in rich pineapple juice. Sandwiched between the layers are generous dollops of sweetened whipped cream and sweet pineapple compote made in-house. Decorated with sliced pineapple, cherries, and elegant cream piping, this cake is a light and fruity crowd-pleaser.",
    price: 650,
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cakes",
    specifications: {
      flavour: "Tropical Pineapple Vanilla",
      weight: "500g / 1kg",
      eggless: true,
      shelfLife: "2 Days (Refrigerated)",
      servingSize: "6-8 People",
      ingredients: "Fresh Pineapple Compote, Vanilla Sponge, Whipped Cream, Cherry Toppings, Sugar Syrup."
    },
    availability: "in-stock",
    tags: ["pineapple", "fruit", "cake", "eggless", "light"],
    reviewsList: [
      {
        id: "r8",
        author: "Kunal Jha",
        rating: 4,
        comment: "Excellent taste. The pineapple compote feels natural and not artificial. Very soft sponge.",
        date: "2026-06-12"
      }
    ]
  },
  {
    id: "6",
    name: "Fresh Cream Pastry",
    description: "Delightful single-serve pastry with seasonal fruits and light cream.",
    detailedDescription: "Enjoy a moment of pure bliss with our Fresh Cream Pastry. Perfect for single servings, this pastry offers layers of light, airy sponge cake paired with fluffy fresh dairy cream. It is loaded with chopped seasonal fruits like kiwi, mango, strawberry, and pomegranate. It is the perfect sweet treat to accompany your afternoon tea or coffee.",
    price: 150,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Pastries",
    specifications: {
      flavour: "Vanilla Fruit & Cream",
      weight: "120g (Single Piece)",
      eggless: true,
      shelfLife: "1 Day (Refrigerated)",
      servingSize: "1 Person",
      ingredients: "Fresh Dairy Cream, Seasonal Mixed Fruits, Vanilla Sponge, Custard Cream."
    },
    availability: "in-stock",
    tags: ["pastry", "fruit", "cream", "single-serve", "eggless"],
    reviewsList: [
      {
        id: "r9",
        author: "Sneha Patel",
        rating: 5,
        comment: "So fresh! The fruits were sweet and crisp. The cream is very light and not heavy at all.",
        date: "2026-06-27"
      }
    ]
  },
  {
    id: "7",
    name: "Walnut Brownies",
    description: "Fudgy, gooey chocolate brownies loaded with premium walnuts.",
    detailedDescription: "Our Walnut Brownies are the ultimate comfort food for chocolate aficionados. Made with premium unsweetened chocolate, brown sugar, and real butter, they are baked to a precise fudgy consistency. The center is dense, chewy, and rich, while the top has that coveted shiny crinkle crust. Generously folded with toasted California walnuts, it provides a satisfying crunch to contrast the deep, chocolatey goodness.",
    price: 250,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1564936281404-58a2d1d4186f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cookies",
    isBestseller: true,
    specifications: {
      flavour: "Fudgy Walnut Chocolate",
      weight: "250g (Box of 2)",
      eggless: false,
      shelfLife: "5 Days (Room Temp) / 10 Days (Refrigerated)",
      servingSize: "2 People",
      ingredients: "Premium Cocoa, Whole Eggs, Brown Sugar, Toasted Walnuts, Pure Vanilla Extract, Dairy Butter."
    },
    availability: "in-stock",
    tags: ["brownie", "walnut", "chocolate", "fudgy", "dessert"],
    reviewsList: [
      {
        id: "r10",
        author: "Devendra Verma",
        rating: 5,
        comment: "Microwaved it for 10 seconds and served with vanilla ice cream. Pure heaven! Outstanding chewiness.",
        date: "2026-06-26"
      },
      {
        id: "r11",
        author: "Aditi Roy",
        rating: 4.8,
        comment: "Loads of walnuts! Extremely rich chocolate flavor. Will definitely buy again.",
        date: "2026-06-14"
      }
    ]
  },
  {
    id: "8",
    name: "Assorted Cupcakes",
    description: "Box of 6 cupcakes in vanilla, chocolate, and strawberry flavors.",
    detailedDescription: "Can't decide on a single flavor? Our Assorted Cupcake box is the ideal solution! This curated selection includes 6 moist, perfectly baked cupcakes in our three most-loved flavors: classic Vanilla Bean with vanilla buttercream, Double Chocolate with chocolate ganache frosting, and Sweet Strawberry with fruit swirl frosting. Hand-decorated with beautiful sprinkles, pearls, and curls, they make a perfect gift or party treats.",
    price: 450,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Cupcakes",
    specifications: {
      flavour: "Assorted (Vanilla, Chocolate, Strawberry)",
      weight: "6 Pieces Box",
      eggless: true,
      shelfLife: "2 Days (Refrigerated)",
      servingSize: "3-6 People",
      ingredients: "Wheat Flour, Vanilla Extract, Chocolate Ganache, Strawberry Puree, Buttercream, Sugar."
    },
    availability: "in-stock",
    tags: ["cupcakes", "assorted", "vanilla", "chocolate", "strawberry", "party"],
    reviewsList: [
      {
        id: "r12",
        author: "Ishita Bose",
        rating: 5,
        comment: "So pretty and tasted so good! The frosting was perfect—creamy but not heavy. Kids loved them.",
        date: "2026-06-24"
      }
    ]
  },
  {
    id: "9",
    name: "Sourdough Boule",
    description: "Classic crusty sourdough bread with a soft, open crumb.",
    detailedDescription: "Our artisanal Sourdough Boule is fermented for 24 hours to develop its distinct tangy flavor and complex aroma. Baked in a stone-deck oven, it boasts a thick, caramelized, blistered crust and a wonderfully airy, soft, chewy interior. It is perfect for toast, sandwiches, or dipping in olive oil.",
    price: 180,
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Bread",
    specifications: {
      flavour: "Tangy Sourdough",
      weight: "400g Boule",
      eggless: true,
      shelfLife: "3 Days (Room Temp)",
      servingSize: "4-6 People",
      ingredients: "Organic Wheat Flour, Water, Natural Wild Yeast Starter, Sea Salt."
    },
    availability: "in-stock",
    tags: ["bread", "sourdough", "artisan", "eggless", "vegan"],
    reviewsList: [
      {
        id: "r13",
        author: "Kabir Sen",
        rating: 5,
        comment: "Best sourdough in town! The crust is amazing and the crumb is so airy. Love it toasted with butter.",
        date: "2026-06-25"
      }
    ]
  },
  {
    id: "10",
    name: "Butter Croissant",
    description: "Flaky, golden-brown French pastry made with premium butter.",
    detailedDescription: "Transport yourself to Paris with our premium Butter Croissant. Prepared using the traditional French laminating technique with high-fat Normandy butter, this pastry features dozens of paper-thin layers that bake into a light, flaky, shatteringly crisp exterior and a soft, honeycomb-textured buttery interior.",
    price: 120,
    rating: 4.9,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Bread",
    specifications: {
      flavour: "Rich Butter",
      weight: "80g (Single Piece)",
      eggless: false,
      shelfLife: "1 Day (Room Temp)",
      servingSize: "1 Person",
      ingredients: "Normandy Butter, Wheat Flour, Yeast, Sugar, Milk, Egg Wash."
    },
    availability: "in-stock",
    tags: ["croissant", "butter", "pastry", "french", "classic"],
    reviewsList: [
      {
        id: "r14",
        author: "Zara Khan",
        rating: 5,
        comment: "So flaky and buttery! Truly authentic. Best enjoyed warmed up in the oven for a few minutes.",
        date: "2026-06-27"
      }
    ]
  },
  {
    id: "11",
    name: "French Macarons Box",
    description: "Elegant box of 6 delicate macarons in assorted flavors.",
    detailedDescription: "Treat yourself or someone special to our exquisite French Macarons. This box of 6 features a variety of delicate, crisp-yet-chewy almond meringue shells filled with luscious chocolate ganache, tangy raspberry jam, and smooth pistachio buttercream. They are gluten-free and look like colorful jewels.",
    price: 480,
    rating: 4.8,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Desserts",
    specifications: {
      flavour: "Assorted (Chocolate, Pistachio, Raspberry)",
      weight: "6 Pieces Box",
      eggless: false,
      shelfLife: "4 Days (Refrigerated)",
      servingSize: "2-3 People",
      ingredients: "Almond Flour, Powdered Sugar, Egg Whites, Cream, Pistachio Paste, Raspberry Puree, Dark Chocolate."
    },
    availability: "in-stock",
    tags: ["macarons", "french", "dessert", "gluten-free", "gift"],
    reviewsList: [
      {
        id: "r15",
        author: "Nisha Kapoor",
        rating: 5,
        comment: "Delightful texture and authentic flavors. The raspberry filling was tangy and delicious.",
        date: "2026-06-22"
      }
    ]
  },
  {
    id: "12",
    name: "Classic Fruit Tart",
    description: "Shortcrust pastry shell filled with vanilla custard and fresh fruit.",
    detailedDescription: "A visual and culinary delight. Our Fruit Tart starts with a buttery, sweet shortcrust pastry shell, brushed with dark chocolate. It is filled with a rich, silky vanilla bean pastry cream and artfully topped with a vibrant mosaic of fresh glazed berries, kiwi, and mango slices. It is clean, fresh, and perfect for dinner parties.",
    price: 320,
    rating: 4.7,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Desserts",
    specifications: {
      flavour: "Vanilla Fruit Custard",
      weight: "200g (Individual Tart)",
      eggless: true,
      shelfLife: "2 Days (Refrigerated)",
      servingSize: "1-2 People",
      ingredients: "Fresh Strawberries, Blueberries, Kiwi, Mango, Vanilla Bean Custard, Butter Shortcrust."
    },
    availability: "in-stock",
    tags: ["tart", "fruit", "custard", "dessert", "eggless"],
    reviewsList: [
      {
        id: "r16",
        author: "Rahul Varma",
        rating: 4,
        comment: "Excellent custard base. The crust stayed crisp even after keeping it in the fridge overnight. Very refreshing.",
        date: "2026-06-19"
      }
    ]
  },
  {
    id: "13",
    name: "Chef's Opera Cake",
    description: "Classic French gateau made with layers of almond sponge, coffee and ganache.",
    detailedDescription: "Our Opera Cake is a luxurious French masterpiece. It consists of layers of light almond sponge cake (Joconde) soaked in rich espresso coffee syrup, layered with smooth espresso buttercream and bittersweet chocolate ganache. The cake is glazed with a glassy dark chocolate glaze and finished with elegant gold leaf details. Truly spectacular.",
    price: 1100,
    rating: 5,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Specials",
    isBestseller: true,
    specifications: {
      flavour: "Coffee & Chocolate",
      weight: "600g",
      eggless: true,
      shelfLife: "3 Days (Refrigerated)",
      servingSize: "6 People",
      ingredients: "Almond Meal, Espresso Coffee, Dark Chocolate (70% Cocoa), Dairy Butter, Fresh Cream, Wheat Flour."
    },
    availability: "pre-order",
    tags: ["opera", "coffee", "chocolate", "specials", "eggless", "luxury"],
    reviewsList: [
      {
        id: "r17",
        author: "Manish Shah",
        rating: 5,
        comment: "Incredibly layered and elegant. The coffee flavor is intense and perfectly cuts through the dark chocolate. Superb cake.",
        date: "2026-06-26"
      }
    ]
  },
  {
    id: "14",
    name: "Tiered Floral Wedding Cake",
    description: "Bespoke tiered wedding cake decorated with fresh flowers and gold foil.",
    detailedDescription: "Make your dream day unforgettable with our bespoke Tiered Floral Wedding Cake. This stunning three-tiered cake features moist layers of premium white chocolate raspberry sponge, filled with raspberry compote and coated with luxurious white chocolate buttercream. Adorned with beautiful fresh organic roses, eucalyptus leaves, and delicate 24k gold leaf accents, it is customized for your fairytale moment.",
    price: 4500,
    rating: 5,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    category: "Wedding",
    specifications: {
      flavour: "White Chocolate Raspberry",
      weight: "3kg (Three Tier)",
      eggless: true,
      shelfLife: "2 Days (Refrigerated)",
      servingSize: "25-30 People",
      ingredients: "Premium White Chocolate, Organic Raspberry Filling, Whipped Buttercream, Organic Edible Flowers, Gold Leaf."
    },
    availability: "pre-order",
    tags: ["wedding", "tiered", "custom", "raspberry", "eggless", "luxury"],
    reviewsList: [
      {
        id: "r18",
        author: "Sonia & Amit",
        rating: 5,
        comment: "This cake was the highlight of our reception! Absolutely gorgeous to look at and tasted heavenly. Not too sweet, which was perfect.",
        date: "2026-06-18"
      }
    ]
  }
];
