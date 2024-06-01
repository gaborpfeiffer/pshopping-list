import { UseCaseWithParams } from '../../model/types';
import { IShopItemRepository } from '../../repository/IShopItemRepository';

type Dependencies = {
  shopItemRepository: IShopItemRepository;
};

export const deleteShopItem = ({
  shopItemRepository,
}: Dependencies): UseCaseWithParams<void, string> => ({
  execute: (id: string) => shopItemRepository.deleteOne(id),
});
