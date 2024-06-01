import { ShopItem } from '../../model/ShopItem';
import { UseCaseWithParams } from '../../model/types';
import { IShopItemRepository } from '../../repository/IShopItemRepository';

type Dependencies = {
  readonly shopItemRepository: IShopItemRepository;
};

export const createShopItemUseCase = ({
  shopItemRepository,
}: Dependencies): UseCaseWithParams<ShopItem, Omit<ShopItem, 'id'>> => ({
  execute: ({ title }) => shopItemRepository.createOne(title),
});
