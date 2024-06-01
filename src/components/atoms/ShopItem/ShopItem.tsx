import { FC } from 'react';
import { DI } from '../../../di/ioc';
import { ShopItem as ShopItemProp } from '../../../domain/model/ShopItem';
import { DoneSvg } from '../../svg/DoneSvg';
import { EditSvg } from '../../svg/EditSvg';
import { TrashSvg } from '../../svg/TrashSvg';
import { IconButton } from '../IconButton/IconButton';
import { InputWithButton } from '../InputWithButton/InputWithButton';

export const ShopItem: FC<ShopItemProp> = (item) => {
  const shopItemViewModelFactory = DI.resolve('shopItemViewModel');
  const viewModel = shopItemViewModelFactory(item, {
    updateShopItemUseCase: DI.resolve('updateShopItemUseCase'),
    deleteShopItemUseCase: DI.resolve('deleteShopItemUseCase'),
  });
  const {
    isEdit,
    setIsEdit,
    itemTitle,
    setItemTitle,
    handleSave,
    deleteItem,
    handleToggle,
  } = viewModel();

  return isEdit ? (
    <li className="flex h-11 items-center gap-3 px-5 mb-2">
      <IconButton
        customStyles="text-red-600 hover:text-red-800"
        onClick={() => deleteItem(item.id)}
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
          onClick={handleSave}
        >
          <DoneSvg />
        </IconButton>
      </InputWithButton>
    </li>
  ) : (
    <li className="flex h-11 items-center gap-3 px-5">
      <div
        onClick={() => handleToggle(!item.completed)}
        className="flex items-center w-full gap-3"
      >
        <input
          className="flex-none"
          type="checkbox"
          onChange={() => handleToggle(!item.completed)}
          checked={item.completed}
        />
        <span className="grow text-lg">{item.title}</span>
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
