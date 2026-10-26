export type MenuItem = {
  id: number; name: string; description: string; price: number;
  category: string; image: string; imageUrl: string;
};

export const fallbackMenu: MenuItem[] = [
  {id:1,name:"Fire-Roasted Garden Pizza",description:"Wood-fired crust, mozzarella, peppers, zucchini, red onion and herbs.",price:349,category:"Pizza",image:"🍕",imageUrl:"https://images.unsplash.com/photo-1743615357618-de4ac111c79c?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:2,name:"Royal Chicken Biryani",description:"Fragrant saffron basmati rice, tender chicken, crispy onions and raita.",price:329,category:"Indian",image:"🍗",imageUrl:"https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:3,name:"Creamy Tomato Pasta",description:"Rich tomato sauce, parmesan, basil and handmade pasta.",price:299,category:"Pasta",image:"🍝",imageUrl:"https://images.unsplash.com/photo-1760390952355-a6b9cf50a7a2?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:4,name:"Classic Chicken Biryani",description:"Spiced chicken and aromatic rice served with fresh cucumber raita.",price:319,category:"Indian",image:"🍛",imageUrl:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:5,name:"Signature Double Burger",description:"Juicy double patty, cheddar, lettuce, tomato and house sauce.",price:289,category:"Burgers",image:"🍔",imageUrl:"https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:6,name:"Smoky Cheese Burger",description:"Grilled beef patty, melted cheese, greens and crispy fries.",price:309,category:"Burgers",image:"🍔",imageUrl:"https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:7,name:"Chef's Dessert Plate",description:"A beautifully plated sweet finish with seasonal fruit and cream.",price:199,category:"Desserts",image:"🍰",imageUrl:"https://images.unsplash.com/photo-1670100475746-d9cb673285b8?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:8,name:"Chocolate Celebration Cake",description:"Decadent chocolate sponge with silky frosting.",price:219,category:"Desserts",image:"🍰",imageUrl:"https://images.unsplash.com/photo-1670100475746-d9cb673285b8?auto=format&fit=crop&fm=jpg&q=85&w=1200"},
  {id:9,name:"Fresh Lime Cooler",description:"Fresh lime, mint and sparkling water.",price:119,category:"Drinks",image:"🥤",imageUrl:"https://images.unsplash.com/photo-1772456596722-44fc0b48571a?auto=format&fit=crop&fm=jpg&q=85&w=1600"}
];
