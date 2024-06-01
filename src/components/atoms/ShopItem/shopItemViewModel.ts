import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ShopItem } from '../../../domain/model/ShopItem';
import { UseCaseWithParams } from '../../../domain/model/types';

type Dependencies = {
  readonly updateShopItemUseCase: UseCaseWithParams<void, ShopItem>;
  readonly deleteShopItemUseCase: UseCaseWithParams<void, string>;
};

export const shopItemViewModelFactory = (
  item: ShopItem,
  { updateShopItemUseCase, deleteShopItemUseCase }: Dependencies
) => {
  return () => {
    const queryClient = useQueryClient();
    const [isEdit, setIsEdit] = useState(false);
    const [itemTitle, setItemTitle] = useState(item.title);

    const updateItemMutation = useMutation({
      mutationFn: async (updatedItem: ShopItem) => {
        const shopItem = {
          ...item,
          title: updatedItem.title,
          completed: updatedItem.completed,
        };

        const result = await updateShopItemUseCase.execute(shopItem);

        queryClient.setQueryData(['shopItems'], (oldItems: ShopItem[]) => {
          return oldItems?.map((oldItem: ShopItem) =>
            shopItem.id === oldItem.id ? shopItem : oldItem
          );
        });

        return result;
      },
    });

    const deleteItemMutation = useMutation({
      mutationFn: async (id: string) => {
        const result = await deleteShopItemUseCase.execute(id);

        queryClient.setQueryData(['shopItems'], (oldItems: ShopItem[]) => {
          return oldItems.filter((oldItem) => oldItem.id !== id);
        });

        return result;
      },
    });

    const handleSave = () => {
      updateItemMutation.mutate({ ...item, title: itemTitle });
      setIsEdit(false);
    };

    const handleToggle = (completed: boolean) => {
      updateItemMutation.mutate({ ...item, completed: completed });
    };

    return {
      isEdit,
      setIsEdit,
      itemTitle,
      setItemTitle,
      handleSave,
      deleteItem: deleteItemMutation.mutate,
      handleToggle,
    };
  };
};
