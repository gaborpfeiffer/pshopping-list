import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ShopItem } from '../../../domain/model/ShopItem';
import { UseCase, UseCaseWithParams } from '../../../domain/model/types';

type Dependencies = {
  readonly getShopItemsUseCase: UseCase<ShopItem[]>;
  readonly createShopItemUseCase: UseCaseWithParams<
    ShopItem,
    Omit<ShopItem, 'id'>
  >;
  readonly deleteAllShopItemUseCase: UseCase<void>;
};

const defaultFilterLabel = 'Készek elrejtése';

export const itemListViewModel = ({
  getShopItemsUseCase,
  createShopItemUseCase,
  deleteAllShopItemUseCase,
}: Dependencies) => {
  const queryClient = useQueryClient();
  const { data: shopItems, isLoading } = useQuery<ShopItem[]>({
    queryKey: ['shopItems'],
    queryFn: () => getShopItemsUseCase.execute(),
  });

  const [title, setTitle] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const [filterLabel, setFilterLabel] = useState(defaultFilterLabel);

  const addItemMutation = useMutation({
    mutationFn: async () => {
      const result = await createShopItemUseCase.execute({
        title: title,
        completed: false,
      });

      queryClient.setQueryData(['shopItems'], (oldItems: ShopItem[]) => {
        oldItems.push(result);
      });

      return result;
    },
    onSuccess: () => {
      setTitle('');
    },
  });

  const deletaAllItemMutation = useMutation({
    mutationFn: () => {
      const result = deleteAllShopItemUseCase.execute();
      queryClient.setQueryData(['shopItems'], (oldItems: ShopItem[]) => {
        oldItems.splice(0, oldItems.length);
      });

      return result;
    },
  });

  const handleFilter = (filter: boolean) => {
    if (filter) {
      setFilterLabel('Összes');
    } else {
      setFilterLabel(defaultFilterLabel);
    }

    setFilterActive(filter);
  };

  return {
    shopItems,
    isLoading,
    title,
    setTitle,
    addItem: addItemMutation.mutate,
    deleteAll: deletaAllItemMutation.mutate,
    filterActive,
    setFilterActive,
    filterLabel,
    handleFilter,
  };
};
