import { FC } from 'react';
import { DI } from '../../../di/ioc';
import { DoneSvg } from '../../svg/DoneSvg';
import { EditSvg } from '../../svg/EditSvg';
import { TrashSvg } from '../../svg/TrashSvg';
import { IconButton } from '../IconButton/IconButton';
import { InputWithButton } from '../InputWithButton/InputWithButton';

type Props = {
  id: string;
  title: string;
  completed: boolean;
  onListItemClick: (id: string, updateData: object) => void;
  onEdit: (id: string, updateData: object) => void;
  onDelete: (id: string) => void;
};

export const ShopItem: FC<Props> = ({
  id,
  title,
  completed,
  onListItemClick,
  onEdit,
  onDelete,
}) => {
  const shopItemViewModelFactory = DI.resolve('shopItemViewModel');
  const viewModel = shopItemViewModelFactory(title);
  const { isEdit, setIsEdit, itemTitle, setItemTitle } = viewModel();

  return isEdit ? (
    <li className="flex h-11 items-center gap-3 px-5 mb-2">
      <IconButton
        customStyles="text-red-600 hover:text-red-800"
        onClick={() => onDelete(id)}
      >
        <TrashSvg />
      </IconButton>
      <InputWithButton
        label="Szerkesztés"
        onChange={setItemTitle}
        value={itemTitle}
      >
        <IconButton
          customStyles="absolute right-5 top-0 h-full rounded-r-lg border border-blue-500 bg-blue-500 p-2.5 text-sm font-medium text-white hover:bg-blue-600"
          onClick={() => {
            setIsEdit(!isEdit);
            onEdit(id, { title: itemTitle });
          }}
        >
          <DoneSvg />
        </IconButton>
      </InputWithButton>
    </li>
  ) : (
    <li className="flex h-11 items-center gap-3 px-5">
      <div
        onClick={() => onListItemClick(id, { completed: !completed })}
        className="flex items-center w-full gap-3"
      >
        <input
          className="flex-none"
          type="checkbox"
          onChange={() => onListItemClick(id, { completed: !completed })}
          checked={completed}
        />
        <span className="grow text-lg">{title}</span>
      </div>
      <IconButton
        customStyles="text-blue-500 hover:text-blue-700"
        onClick={() => setIsEdit(!isEdit)}
      >
        <EditSvg />
      </IconButton>
    </li>
  );
};
