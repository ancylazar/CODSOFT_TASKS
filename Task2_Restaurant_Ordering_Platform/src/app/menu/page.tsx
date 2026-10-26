import MenuClient from "@/components/MenuClient";
import { prisma } from "@/lib/prisma";
import { fallbackMenu } from "@/lib/menu";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  let menu = fallbackMenu;
  try {
    const dbItems = await prisma.menuItem.findMany({ where: { isAvailable: true }, orderBy: { id: "asc" } });
    if (dbItems.length) menu = dbItems;
  } catch {}
  return <MenuClient items={menu} />;
}
