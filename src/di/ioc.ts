import { asFunction, asValue, createContainer } from 'awilix';
import { shopItemRepository } from '../adapter/repository/shopItemRepository.ts';
import { shopItemViewModelFactory } from '../components/atoms/ShopItem/shopItemViewModel.ts';
import * as ShopItemLocalDataSource from '../data/shopItemLocalDataSource.ts';
import { createShopItemUseCase } from '../domain/useCases/shopItem/createShopItemUseCase.ts';
import { deleteAllShopItemUseCase } from '../domain/useCases/shopItem/deleteAllShopItemUseCase.ts';
import { deleteShopItem } from '../domain/useCases/shopItem/deleteShopItemUseCase.ts';
import { getShopItemsUseCase } from '../domain/useCases/shopItem/getShopItemsUseCase.ts';
import { updateShopItemUseCase } from '../domain/useCases/shopItem/updateShopItemUseCase.ts';
import { itemListViewModel } from '../presenter/pages/ItemList/itemListPageViewModel.ts';

const container = createContainer();

container.register({
  shopItemRepository: asFunction(shopItemRepository),
  shopItemLocalDataSource: asValue(ShopItemLocalDataSource),
  createShopItemUseCase: asFunction(createShopItemUseCase),
  getShopItemsUseCase: asFunction(getShopItemsUseCase),
  updateShopItemUseCase: asFunction(updateShopItemUseCase),
  deleteShopItemUseCase: asFunction(deleteShopItem),
  deleteAllShopItemUseCase: asFunction(deleteAllShopItemUseCase),
  //shopItemListViewModel: asFunction(shopItemListViewModel),
  itemListViewModel: asFunction(itemListViewModel),
  shopItemViewModel: asFunction(() => shopItemViewModelFactory),
});

export const DI = container;
