import { ReactNode } from 'react';
import { ShopItem as ShopItemProp } from '../../../domain/model/ShopItem';
import { ShopItem } from '../../atoms/ShopItem/ShopItem';

type ListProps<T extends ShopItemProp> = {
  readonly items: T[];
  readonly hideCompleted: boolean;
};

export const ShopItemList = <T extends ShopItemProp>({
  items,
  hideCompleted,
}: ListProps<T>): ReactNode => {
  const filteredTodos = hideCompleted
    ? items.filter((item: ShopItemProp) => !item.completed)
    : items;

  return (
    <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
      <ul className="divide-y">
        {filteredTodos.map((item) => (
          <ShopItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </ul>
    </div>
  );
};
