import { useEffect, useState } from 'react';
import { ShopItem } from '../../../domain/model/ShopItem';
import { UseCase, UseCaseWithParams } from '../../../domain/model/types';

type Dependencies = {
  readonly getShopItemsUseCase: UseCase<ShopItem[]>;
  readonly createShopItemUseCase: UseCaseWithParams<
    ShopItem,
    Omit<ShopItem, 'id'>
  >;
  readonly updateShopItemUseCase: UseCaseWithParams<void, ShopItem>;
  readonly deleteShopItemUseCase: UseCaseWithParams<void, string>;
  readonly deleteAllShopItemUseCase: UseCase<void>;
};

const defaultFilterLabel = 'Készek elrejtése';

export const shopItemListViewModel = ({
  getShopItemsUseCase,
  deleteShopItemUseCase,
  createShopItemUseCase,
  updateShopItemUseCase,
  deleteAllShopItemUseCase,
}: Dependencies) => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);
  const [title, setTitle] = useState('');
  const [filterLabel, setFilterLabel] = useState(defaultFilterLabel);
  const [filterActive, setFilterActive] = useState(false);
  const [confrimModalState, setConfirmModalState] = useState({
    title: '',
    content: '',
    open: false,
  });

  const closeConfirmModal = () => {
    setConfirmModalState({
      title: '',
      content: '',
      open: false,
    });
  };

  const filterShopItems = async () => {
    if (filterActive) {
      console.log('asd');

      const filteredShopItems = shopItems.filter((item) => !item.completed);
      setShopItems(filteredShopItems);
      setFilterLabel('Összes');
    }
  };

  const getShopItems = async () => {
    const result = await getShopItemsUseCase.execute();
    setShopItems(result);
  };

  const createShopItem = async () => {
    const newShopItem = await createShopItemUseCase.execute({
      title: title,
      completed: false,
    });
    setTitle('');

    const actShopItems = shopItems;
    actShopItems.push(newShopItem);
    setShopItems(actShopItems);
  };

  const updateShopItem = async (id: string, updateData: ShopItem) => {
    const shopItem = shopItems.find((item) => item.id === id) as ShopItem;
    await updateShopItemUseCase.execute({ ...shopItem, ...updateData });

    let updatedShopItems = shopItems.map((item) =>
      item.id === id ? { ...item, ...updateData } : item
    );

    if (filterActive) {
      updatedShopItems = updatedShopItems.filter((item) => !item.completed);
    }

    setShopItems(updatedShopItems);
  };

  const deleteShopItem = async (id: string) => {
    await deleteShopItemUseCase.execute(id);
    const updatedShopItems = shopItems.filter((item) => item.id !== id);
    setShopItems(updatedShopItems);
  };

  const deleteAll = async () => {
    await deleteAllShopItemUseCase.execute();
    setShopItems([]);
  };

  useEffect(() => {
    if (filterActive) {
      void filterShopItems();
    } else {
      void getShopItems();
      setFilterLabel(defaultFilterLabel);
    }
  }, [filterActive]);

  return {
    shopItems,
    title,
    setTitle,
    createShopItem,
    updateShopItem,
    deleteShopItem,
    deleteAll,
    filterLabel,
    setFilterActive,
    filterActive,
    confrimModalState,
    setConfirmModalState,
    closeConfirmModal,
  };
};
