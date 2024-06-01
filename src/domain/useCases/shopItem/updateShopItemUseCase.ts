import { ShopItem } from '../../model/ShopItem';
import { UseCaseWithParams } from '../../model/types';
import { IShopItemRepository } from '../../repository/IShopItemRepository';

type Dependencies = {
  readonly shopItemRepository: IShopItemRepository;
};

export const updateShopItemUseCase = ({
  shopItemRepository,
}: Dependencies): UseCaseWithParams<void, ShopItem> => ({
  execute: (shopItem) => shopItemRepository.updateOne(shopItem),
});
