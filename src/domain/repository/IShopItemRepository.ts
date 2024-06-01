import { ShopItem } from '../model/ShopItem';

export interface IShopItemRepository {
  getAll: () => Promise<ShopItem[]>;
  createOne: (title: string) => Promise<ShopItem>;
  updateOne: (shopItem: ShopItem) => Promise<void>;
  deleteOne: (id: string) => Promise<void>;
  deleteAll: () => Promise<void>;
}
