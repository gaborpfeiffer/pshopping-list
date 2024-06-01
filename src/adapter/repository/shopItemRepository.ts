import { IShopItemLocalDataSource } from '../../domain/data/IShoptItemLocalDataSource';
import { ShopItem } from '../../domain/model/ShopItem';
import { IShopItemRepository } from '../../domain/repository/IShopItemRepository';

type Dependencies = {
  shopItemLocalDataSource: IShopItemLocalDataSource;
};

export const shopItemRepository = ({
  shopItemLocalDataSource,
}: Dependencies): IShopItemRepository => {
  const getAll = () => shopItemLocalDataSource.getAll();

  const createOne = (title: string) =>
    shopItemLocalDataSource.createOne({
      title,
      completed: false,
    });

  const updateOne = (shopItem: ShopItem) =>
    shopItemLocalDataSource.updateOne(shopItem);

  const deleteOne = (id: string) => shopItemLocalDataSource.deleteOne(id);

  const deleteAll = () => shopItemLocalDataSource.deleteAll();

  return { getAll, createOne, updateOne, deleteOne, deleteAll };
};
