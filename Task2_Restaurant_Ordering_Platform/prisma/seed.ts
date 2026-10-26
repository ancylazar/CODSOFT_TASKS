import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const menu = [
  ["Fire-Roasted Garden Pizza","Wood-fired crust, mozzarella, peppers, zucchini, red onion and herbs.",349,"Pizza","🍕","https://images.unsplash.com/photo-1743615357618-de4ac111c79c?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Royal Chicken Biryani","Fragrant saffron basmati rice, tender chicken, crispy onions and raita.",329,"Indian","🍗","https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Creamy Tomato Pasta","Rich tomato sauce, parmesan, basil and handmade pasta.",299,"Pasta","🍝","https://images.unsplash.com/photo-1760390952355-a6b9cf50a7a2?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Classic Chicken Biryani","Spiced chicken and aromatic rice served with fresh cucumber raita.",319,"Indian","🍛","https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Signature Double Burger","Juicy double patty, cheddar, lettuce, tomato and house sauce.",289,"Burgers","🍔","https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Smoky Cheese Burger","Grilled beef patty, melted cheese, greens and crispy fries.",309,"Burgers","🍔","https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Chef's Dessert Plate","A beautifully plated sweet finish with seasonal fruit and cream.",199,"Desserts","🍰","https://images.unsplash.com/photo-1670100475746-d9cb673285b8?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Chocolate Celebration Cake","Decadent chocolate sponge with silky frosting.",219,"Desserts","🍰","https://images.unsplash.com/photo-1670100475746-d9cb673285b8?auto=format&fit=crop&fm=jpg&q=85&w=1200"],
  ["Fresh Lime Cooler","Fresh lime, mint and sparkling water.",119,"Drinks","🥤","https://images.unsplash.com/photo-1772456596722-44fc0b48571a?auto=format&fit=crop&fm=jpg&q=85&w=1600"]
];
async function main() {
  await prisma.orderItem.deleteMany(); await prisma.order.deleteMany();
  await prisma.reservation.deleteMany(); await prisma.customer.deleteMany(); await prisma.menuItem.deleteMany();
  await prisma.menuItem.createMany({data: menu.map(([name,description,price,category,image,imageUrl]) => ({
    name:name as string, description:description as string, price:price as number,
    category:category as string, image:image as string, imageUrl:imageUrl as string
  }))});
  await prisma.customer.create({data:{name:"Demo Customer",email:"demo@dinedesk.com",phone:"9876543210"}});
  console.log("DineDesk database seeded successfully.");
}
main().finally(() => prisma.$disconnect());
