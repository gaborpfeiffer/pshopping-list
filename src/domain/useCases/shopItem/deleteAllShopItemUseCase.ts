import { UseCase } from '../../model/types';
import { IShopItemRepository } from '../../repository/IShopItemRepository';

type Dependencies = {
  readonly shopItemRepository: IShopItemRepository;
};

export const deleteAllShopItemUseCase = ({
  shopItemRepository,
}: Dependencies): UseCase<void> => ({
  execute: () => shopItemRepository.deleteAll(),
});
