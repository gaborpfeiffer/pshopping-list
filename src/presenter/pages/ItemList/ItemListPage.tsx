import { FC } from 'react';
import { FilterButton } from '../../../components/atoms/FilterButton/FilterButton';
import { Header } from '../../../components/atoms/Header/Header';
import { IconButton } from '../../../components/atoms/IconButton/IconButton';
import { InputWithButton } from '../../../components/atoms/InputWithButton/InputWithButton';
import { Page } from '../../../components/molecules/Page/Page';
import { ShopItemList } from '../../../components/molecules/ShopItemList/ShopItemList';
import { PlusSvg } from '../../../components/svg/PlusSvg';
import { ShareSvg } from '../../../components/svg/ShareSvg';
import { TrashSvg } from '../../../components/svg/TrashSvg';
import { DI } from '../../../di/ioc';

export const ItemListPage: FC = () => {
  const {
    shopItems,
    isLoading,
    title,
    setTitle,
    addItem,
    deleteAll,
    filterActive,
    filterLabel,
    handleFilter,
  } = DI.resolve('itemListViewModel');

  return (
    <Page>
      <Header>
        <IconButton
          customStyles="text-red-600 hover:text-red-800"
          onClick={deleteAll}
        >
          <TrashSvg />
        </IconButton>
        <h2 className="font-medium">Bevásárló lista</h2>
        <IconButton
          customStyles="text-blue-500 hover:text-blue-700"
          onClick={() => {}}
        >
          <ShareSvg />
        </IconButton>
      </Header>

      <InputWithButton label="Hozzáadás" onChange={setTitle} value={title}>
        <IconButton
          customStyles="absolute right-5 top-0 h-full rounded-r-lg border border-blue-500 bg-blue-500 p-2.5 text-sm font-medium text-white hover:bg-blue-600"
          onClick={addItem}
        >
          <PlusSvg />
        </IconButton>
      </InputWithButton>

      <FilterButton
        label={filterLabel}
        onClick={() => handleFilter(!filterActive)}
        filterActive={filterActive}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {<ShopItemList hideCompleted={filterActive} items={shopItems} />}
        </div>
      )}
    </Page>
  );
};
