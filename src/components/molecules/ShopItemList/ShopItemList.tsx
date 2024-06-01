import { ReactNode } from 'react';
import { ShopItem } from '../../atoms/ShopItem/ShopItem';

type ListItem = {
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
};

type ListProps<T extends ListItem> = {
  readonly items: T[];
  readonly onListItemClick: () => void;
  readonly onEdit: () => void;
  readonly onDelete: () => void;
};

export const ShopItemList = <T extends ListItem>({
  items,
  onListItemClick,
  onEdit,
  onDelete,
}: ListProps<T>): ReactNode => (
  <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
    <ul className="divide-y">
      {items.map((item) => (
        <ShopItem
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          onListItemClick={onListItemClick}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);
