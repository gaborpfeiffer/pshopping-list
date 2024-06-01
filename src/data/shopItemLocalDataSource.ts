import { ShopItem } from '../domain/model/ShopItem';

const COLLECTION_NAME: string = 'shop_items';

export const getAll = (): Promise<ShopItem[]> => {
  try {
    const result = localStorage.getItem(COLLECTION_NAME);
    return result !== null ? JSON.parse(result) : [];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createOne = async (
  shopItem: Omit<ShopItem, 'id'>
): Promise<ShopItem> => {
  const shopItems = await getAll();

  const id = `${Date.now()}`;
  const newShopItem = { ...shopItem, id };
  localStorage.setItem(
    COLLECTION_NAME,
    JSON.stringify([...shopItems, newShopItem])
  );

  return newShopItem;
};

export const updateOne = async (shopItem: ShopItem): Promise<void> => {
  const shopItems = (await getAll()).map((item) => {
    if (shopItem.id === item.id) {
      return { ...item, ...shopItem };
    } else {
      return item;
    }
  });

  localStorage.setItem(COLLECTION_NAME, JSON.stringify(shopItems));
};

export const deleteOne = async (id: string): Promise<void> => {
  const shopItems = (await getAll()).filter(
    ({ id: shopItemId }) => shopItemId !== id
  );
  localStorage.setItem(COLLECTION_NAME, JSON.stringify(shopItems));
};

export const deleteAll = async (): Promise<void> => {
  localStorage.setItem(COLLECTION_NAME, JSON.stringify([]));
};
