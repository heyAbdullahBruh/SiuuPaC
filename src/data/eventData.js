import { shuffle } from "./dataDb";

export const restaurantEvents = [
   {
      id: 'rev1',
      eventName: "Birthday Party",
      price: 500,
      description: "Celebrate your special day in style with a beautifully decorated venue, a custom cake, and a delicious buffet. Enjoy a lively DJ setup, welcome drinks, and an unforgettable experience surrounded by friends and family.",
      itemsIncluded: ["Custom Cake", "Decorated Hall", "Buffet for 20 people", "DJ Setup", "Welcome Drinks"],
      eventImage: "https://i.ibb.co/RTxjwZj/events-slider-1.jpg"
   },
   {
      id: 'rev2',
      eventName: "Office Party",
      price: 1000,
      description: "Host an engaging corporate event with a tailored menu, private meeting space, and professional service. Indulge in a cocktail bar, live music, and seamless planning to make your office party an enjoyable and memorable experience for your team.",
      itemsIncluded: ["Cocktail Bar", "Professional Servers", "Private Space", "Buffet for 30 people", "Live Music"],
      eventImage: "https://i.ibb.co/wQ29NV7/events-slider-2.jpg"
   },
   {
      id: 'rev3',
      eventName: "Friends Reunion",
      price: 800,
      description: "Reignite old friendships with a cozy venue, engaging activities, and amazing food. Enjoy unlimited snacks, a game night setup, music playlists, and a hearty buffet dinner to create wonderful new memories with your friends.",
      itemsIncluded: ["Reserved Lounge", "Unlimited Snacks", "Game Night Setup", "Music Playlist", "Buffet Dinner"],
      eventImage: "https://i.ibb.co/Tvw7dzs/events-slider-3.jpg"
   },
   {
      id: 'rev4',
      eventName: "Wedding Reception",
      price: 2000,
      description: "Make your wedding reception truly magical with an elegantly decorated venue, a custom menu designed by expert chefs, and exquisite flower arrangements. Celebrate with an open bar, a professional photographer, and a setting perfect for unforgettable memories.",
      itemsIncluded: ["Decorated Stage", "Custom Menu", "Open Bar", "Flower Arrangements", "Professional Photographer"],
      eventImage: "https://i.ibb.co/N2ppTDf/Wedding-Reception.jpg"
   },
   {
      id: 'rev5',
      eventName: "Anniversary Party",
      price: 1200,
      description: "Celebrate your special milestone with a romantic candlelit dinner, beautiful décor, and a custom cake. Enjoy live music, a photo booth for capturing memories, and personalized invitations that set the tone for this unforgettable celebration.",
      itemsIncluded: ["Candlelit Dinner", "Photo Booth", "Custom Cake", "Live Band", "Personalized Invitations"],
      eventImage: "https://i.ibb.co/tqqKGRr/Anniversary-Party.jpg"
   },
   {
      id: 'rev6',
      eventName: "Family Get-Together",
      price: 600,
      description: "Reconnect with your loved ones in a welcoming atmosphere featuring a private room, a kid-friendly menu, and board games for entertainment. Share a hearty buffet and take a memorable group photo to cherish forever.",
      itemsIncluded: ["Private Room", "Buffet for 15 people", "Board Games", "Kid’s Menu", "Group Photo"],
      eventImage: "https://i.ibb.co/rQhPsHg/Family-Get-Together.jpg"
   },
   {
      id: 'rev7',
      eventName: "Farewell Party",
      price: 700,
      description: "Say goodbye in style with personalized décor, curated menus, and meaningful touches like a photo montage. Celebrate with heartfelt speeches, live entertainment, and a buffet dinner that will leave everyone with lasting memories.",
      itemsIncluded: ["Speeches Setup", "Personalized Gift", "Photo Montage", "Buffet Dinner", "Live Entertainment"],
      eventImage: "https://i.ibb.co/8jY6hbZ/Farewell-Party.jpg"
   },
   {
      id: 'rev8',
      eventName: "Baby Shower",
      price: 900,
      description: "Welcome the new arrival with themed décor, exciting games, and a dessert bar filled with treats. Guests can enjoy a buffet lunch, receive return gifts, and celebrate the joy of parenthood in a heartwarming setting.",
      itemsIncluded: ["Themed Decor", "Games Setup", "Dessert Bar", "Buffet Lunch", "Return Gifts"],
      eventImage: "https://i.ibb.co/qYnT5FS/Baby-Shower.jpg"
   },
   {
      id: 'rev9',
      eventName: "Graduation Party",
      price: 750,
      description: "Honor academic achievements with a lively celebration featuring a custom cake, a stunning photo backdrop, and a festive buffet dinner. Gift special graduation keepsakes and dance to a music playlist made for the occasion.",
      itemsIncluded: ["Custom Cake", "Photo Backdrop", "Buffet Dinner", "Graduation Gifts", "Music"],
      eventImage: "https://i.ibb.co/tYRJDbL/Graduation-Party.jpg"
   },
   {
      id: 'rev10',
      eventName: "Holiday Party",
      price: 1100,
      description: "Immerse yourself in the festive spirit with seasonal decorations, a hot chocolate bar, and a buffet dinner. Enjoy a lively gift exchange and surprise appearances by Santa, creating a magical holiday experience for all attendees.",
      itemsIncluded: ["Holiday Decorations", "Gift Exchange Setup", "Hot Chocolate Bar", "Buffet Dinner", "Live Santa"],
      eventImage: "https://i.ibb.co/TgFczth/Holiday-Party.jpg"
   }
];



export const chefsData = [
   {
      name: "Walter White",
      title: "Master Chef",
      imgSrc: "https://i.ibb.co/6sv21dc/chefs-1.jpg",
    },
    {
      name: "Sarah Jhonson",
      title: "Patissier",
      imgSrc: "https://i.ibb.co/WgDSkCy/chefs-2.jpg",
    },
    {
      name: "William Anderson",
      title: "Cook",
      imgSrc: "https://i.ibb.co/3rDkbbn/chefs-3.jpg",
    },
    {
      name: "Emma Stone",
      title: "Pastry Chef",
      imgSrc: "https://i.ibb.co/L0P8HnW/chef12.jpg",
    },
    {
      name: "John Doe",
      title: "Sous Chef",
      imgSrc: "https://i.ibb.co/jb34vFB/chef11.jpg",
    },
    {
      name: "Emily Davis",
      title: "Head Chef",
      imgSrc: "https://i.ibb.co/bNR2wvT/chef10.jpg",
    },
    {
      name: "James Brown",
      title: "Grill Chef",
      imgSrc: "https://i.ibb.co/B46HCXq/chef9.jpg",
    },
    {
      name: "Olivia Wilson",
      title: "Saucier",
      imgSrc: "https://i.ibb.co/93p3rZj/chef8.jpg",
    },
    {
      name: "Michael Scott",
      title: "Commis Chef",
      imgSrc: "https://i.ibb.co/qr2Mx0W/chef7.jpg",
    },
    {
      name: "Sophia Lee",
      title: "Vegetarian Chef",
      imgSrc: "https://i.ibb.co/sFNCdnV/chef6.png",
    },
    {
      name: "Robert Johnson",
      title: "Baker",
      imgSrc: "https://i.ibb.co/d7xBvrr/chef5.jpg",
    },
    {
      name: "Isabella Martinez",
      title: "Catering Specialist",
      imgSrc: "https://i.ibb.co/VvbjGjj/chef4.jpg",
    },
];



// Array of image URLs
const imageUrls = [
   "https://i.ibb.co.com/cbpCVzJ/gallery-1.jpg",
   "https://i.ibb.co.com/Kspx982/gallery-2.jpg",
   "https://i.ibb.co.com/2YSVxHs/gallery-3.jpg",
   "https://i.ibb.co.com/hL76gjD/gallery-4.jpg",
   "https://i.ibb.co.com/17W6k14/gallery-5.jpg",
   "https://i.ibb.co.com/9rmSb65/gallery-6.jpg",
   "https://i.ibb.co.com/QM52GVD/gallery-7.jpg",
   "https://i.ibb.co.com/jg5127Y/gallery-8.jpg",
   "https://i.ibb.co.com/L0HFDyw/gallery-9.jpg",
   "https://i.ibb.co.com/RNNthKQ/gallery-10.jpg",
   "https://i.ibb.co.com/Lvbs467/gallery-11.jpg",
   "https://i.ibb.co.com/NjBb1vX/gallery-12.jpg",
   "https://i.ibb.co.com/ZX5vnbc/gallery-13.jpg",
   "https://i.ibb.co.com/2qjj7xz/gallery-14.jpg",
   "https://i.ibb.co.com/z40kHBM/gallery-15.jpg",
   "https://i.ibb.co.com/bQKMyYp/gallery-16.jpg",
   "https://i.ibb.co.com/XtJk8dh/gallery-17.jpg",
   "https://i.ibb.co.com/v3XGkYy/gallery-18.jpg",
   "https://i.ibb.co.com/VLK4bsJ/gallery-19.jpg",
   "https://i.ibb.co.com/Pg3Pp65/gallery-20.jpg"
 ];
 
 // Map over the URLs to create objects with titles
  const galleryImgs = imageUrls.map((url, index) => {
   return {
     id:`gIm${index*index +1}`,
     img: url,
     title: `Gallery Image ${index + 1}`
   };
 });

 shuffle(galleryImgs);
 export default galleryImgs;
