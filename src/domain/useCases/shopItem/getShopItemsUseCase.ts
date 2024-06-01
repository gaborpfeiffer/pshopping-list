import { ShopItem } from '../../model/ShopItem';
import { UseCase } from '../../model/types';
import { IShopItemRepository } from '../../repository/IShopItemRepository';

type Dependencies = {
  shopItemRepository: IShopItemRepository;
};

export const getShopItemsUseCase = ({
  shopItemRepository,
}: Dependencies): UseCase<ShopItem[]> => ({
  execute: () => shopItemRepository.getAll(),
});
