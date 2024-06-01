import { ShopItem } from '../model/ShopItem';

export type IShopItemLocalDataSource = {
  readonly getAll: () => Promise<ShopItem[]>;
  readonly createOne: (shopItem: Omit<ShopItem, 'id'>) => Promise<ShopItem>;
  readonly updateOne: (shopItem: ShopItem) => Promise<void>;
  readonly deleteOne: (id: string) => Promise<void>;
  readonly deleteAll: () => Promise<void>;
};
