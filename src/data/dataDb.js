import { v4 as uuidv4 } from "uuid";

const menuItems = [
    {
      id: uuidv4(),
      itemName: "Bread Barrel",
      price: 5.99,
      description: "Assorted freshly baked bread with whipped butter.",
      times: ["breakfast", "lunch", "dinner"],
      image: "https://i.ibb.co/W0ts75Z/bread-barrel.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Caesar Selections",
      price: 11.99,
      description: "Romaine lettuce, croutons, Caesar dressing, optional chicken.",
      times: ["breakfast", "lunch", "dinner"],
      image: "https://i.ibb.co/PMwYSRh/caesar.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Chocolate Lava Cake",
      price: 7.99,
      description: "Warm chocolate cake with a gooey molten center.",
      times: ["dinner"],
      image: "https://i.ibb.co/BNDhDCV/cake.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Greek Salad",
      price: 10.99,
      description: "Classic salad with olives, feta, cucumbers, and olive oil.",
      times: ["breakfast", "lunch", "dinner"],
      image: "https://i.ibb.co/B39S3RF/greek-salad.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Lobster Bisque",
      price: 14.99,
      description: "Creamy lobster soup with a rich seafood flavor.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/ZTJNLS2/lobster-bisque.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Lobster Roll",
      price: 18.99,
      description: "Fresh lobster chunks in a buttery roll, served with fries.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/YB60LYz/lobster-roll.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Mozzarella Sticks",
      price: 8.99,
      description: "Crispy mozzarella sticks served with marinara sauce.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/T15bGQH/mozzarella.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Wing Chickens",
      price: 14.99,
      description: "Spicy buffalo wings served with ranch dipping sauce.",
      times: ["dinner","breakfast"],
      image: "https://i.ibb.co/Rv2PGs5/Chicken-Wings.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Spinach Salad",
      price: 12.49,
      description: "Fresh spinach, cranberries, feta cheese, and vinaigrette.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/DMhG2C9/spinach-salad.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Tuscan Grilled",
      price: 24.99,
      description: "Grilled chicken or steak with Tuscan herbs and vegetables.",
      times: ["dinner"],
      image: "https://i.ibb.co/Z2kfPgm/tuscan-grilled.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Avocado Toast",
      price: 9.99,
      description: "Smashed avocado on toasted sourdough with chili flakes.",
      times: ["breakfast"],
      image: "https://i.ibb.co/sWQ0WQR/Avocado-toast.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Pancake Platter",
      price: 10.49,
      description: "Fluffy pancakes with syrup, butter, and fresh berries.",
      times: ["breakfast"],
      image: "https://i.ibb.co/jVFDMBR/pancake-plate.jpg"
    },
    {
      id: uuidv4(),
      itemName: "BBQ Ribs",
      price: 19.99,
      description: "Tender, smoky ribs glazed with BBQ sauce, served with coleslaw.",
      times: ["dinner"],
      image: "https://i.ibb.co/vwxKhgN/BBQ-Ribs.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Cheeseburger",
      price: 11.49,
      description: "Classic beef burger with cheddar, lettuce, tomato, and pickles.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/g3FCptM/Cheeseburger.jpg"
    },
    {
      id: uuidv4(),
      itemName: "French Fries",
      price: 4.99,
      description: "Golden crispy fries served with ketchup.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/vJPmvMr/French-Fries.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Fish Tacos",
      price: 13.99,
      description: "Grilled fish in soft tortillas with fresh toppings.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/s3tnCwx/Fish-Tacos.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Barrell Bread ",
      price: 8.99,
      description: "Assorted freshly baked bread with whipped makkhon.",
      times: ["breakfast", "dinner"],
      image: "https://i.ibb.co/W0ts75Z/bread-barrel.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Veggie Wrap",
      price: 9.49,
      description: "Tortilla wrap filled with fresh veggies and hummus.",
      times: ["lunch"],
      image: "https://i.ibb.co/Vq3zrXd/Veggie-Wrap.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Chicken Wings",
      price: 14.99,
      description: "Spicy buffalo wings served with ranch dipping sauce.",
      times: ["dinner"],
      image: "https://i.ibb.co/Rv2PGs5/Chicken-Wings.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Eggs Benedict",
      price: 11.99,
      description: "Poached eggs, ham, and hollandaise sauce on an English muffin.",
      times: ["breakfast"],
      image: "https://i.ibb.co/WW4yX4z/Eggs-Benedict.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Grilled Salmon",
      price: 22.49,
      description: "Perfectly grilled salmon with a lemon butter sauce.",
      times: ["dinner"],
      image: "https://i.ibb.co/z4jGXZH/Grilled-Salmon.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Stuffed Mushrooms",
      price: 10.49,
      description: "Mushrooms stuffed with cheese and herbs, baked to perfection.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/qkSNFBC/Stuffed-Mushrooms.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Waffles",
      price: 9.49,
      description: "Crispy waffles served with syrup and whipped cream.",
      times: ["breakfast"],
      image: "https://i.ibb.co/YcnWRsh/Waffles.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Caprese Salad",
      price: 10.99,
      description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/d5nkT0B/Caprese-Salad.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Tuna Poke Bowl",
      price: 15.99,
      description: "Marinated tuna with rice, avocado, and sesame dressing.",
      times: ["lunch"],
      image: "https://i.ibb.co/LCrvQrC/Tona-Pock-Bowl.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Shrimp Scampi",
      price: 21.99,
      description: "Shrimp sautéed in garlic butter sauce with pasta.",
      times: ["dinner"],
      image: "https://i.ibb.co/c3cFckN/Shrimp-Scampi.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Tomato Soup",
      price: 6.99,
      description: "Rich and creamy tomato soup served with croutons.",
      times: ["lunch"],
      image: "https://i.ibb.co/YTfSp5D/Tomato-Soup.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Fruit Parfait",
      price: 7.49,
      description: "Layers of yogurt, granola, and fresh fruits.",
      times: ["breakfast"],
      image: "https://i.ibb.co/MpvYfn9/Fruit-Parfait.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Ice Cream Sundae",
      price: 6.99,
      description: "Vanilla ice cream with chocolate sauce and sprinkles.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/Lt6pMc8/Ice-Cream-Sundae.jpg"
    },
    {
      id: uuidv4(),
      itemName: "Mushroom Stuffeds ",
      price: 12.59,
      description: "stuffed Mushrooms  with cheese and herbs, baked to perfection.",
      times: ["lunch", "dinner"],
      image: "https://i.ibb.co/qkSNFBC/Stuffed-Mushrooms.jpg"
    },
  ];


export const shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  };
  shuffle(menuItems);  

export default menuItems; 


export const specialItem =[
  {
    id:'spi1',
    itemname:'Modi sit est',
    title :'Architecto ut aperiam autem id',
    img:'https://i.ibb.co.com/8jpWRMy/specials-1.jpg',
    desc :'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka.\n Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero.',
  },
  {
    id:'spi2',
    itemname:'Unde praesentium sed',
    title :'Et blanditiis nemo veritatis excepturi',
    img:'https://i.ibb.co.com/WzzJHS9/specials-2.jpg',
    desc :'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka.\n Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal.',
  },
  {
    id:'spi3',
    itemname:'Pariatur explicabo vel',
    title :'Impedit facilis occaecati odio neque aperiam sit',
    img:'https://i.ibb.co.com/GppxyNH/specials-3.jpg',
    desc :'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut.\n Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae.',
  },
  {
    id:'spi4',
    itemname:'Nostrum qui quasi',
    title :'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
    img:'https://i.ibb.co.com/37F14Wx/specials-4.jpg',
    desc :'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus.\n Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore.',
  },
  {
    id:'spi5',
    itemname:'Iusto ut expedita aut',
    title :'Est eveniet ipsam sindera pad rone matrelat sando reda',
    img:'https://i.ibb.co.com/CbhR1FD/specials-5.jpg',
    desc :'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.\n Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel.',
  },

];


