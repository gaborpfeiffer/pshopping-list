import { FC } from 'react';
import { FilterButton } from '../../../components/atoms/FilterButton/FilterButton';
import { Header } from '../../../components/atoms/Header/Header';
import { IconButton } from '../../../components/atoms/IconButton/IconButton';
import { InputWithButton } from '../../../components/atoms/InputWithButton/InputWithButton';
import { ConfirmModal } from '../../../components/molecules/Modal/ConfirmModal';
import { Page } from '../../../components/molecules/Page/Page';
import { ShopItemList } from '../../../components/molecules/ShopItemList/ShopItemList';
import { PlusSvg } from '../../../components/svg/PlusSvg';
import { ShareSvg } from '../../../components/svg/ShareSvg';
import { TrashSvg } from '../../../components/svg/TrashSvg';
import { DI } from '../../../di/ioc';

export const ShopItemListPage: FC = () => {
  const {
    shopItems,
    title,
    setTitle,
    createShopItem,
    updateShopItem,
    deleteShopItem,
    deleteAll,
    filterLabel,
    filterActive,
    setFilterActive,
    confrimModalState,
    setConfirmModalState,
    closeConfirmModal,
  } = DI.resolve('shopItemListViewModel');

  return (
    <>
      <Page>
        <Header>
          <IconButton
            customStyles="text-red-600 hover:text-red-800"
            onClick={() =>
              setConfirmModalState({
                title: 'Lista törlése',
                content: 'Biztosan törlini szeretnéd az egész listát?',
                open: true,
              })
            }
          >
            <TrashSvg />
          </IconButton>
          <h2 className="font-medium">Lista</h2>
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
            onClick={createShopItem}
          >
            <PlusSvg />
          </IconButton>
        </InputWithButton>

        <FilterButton
          label={filterLabel}
          onClick={setFilterActive}
          filterActive={filterActive}
        />

        <ShopItemList
          items={shopItems}
          onListItemClick={updateShopItem}
          onEdit={updateShopItem}
          onDelete={deleteShopItem}
        />
      </Page>

      <ConfirmModal
        onConfirm={deleteAll}
        onClose={closeConfirmModal}
        open={confrimModalState.open}
        title={confrimModalState.title}
        content={confrimModalState.content}
      />
    </>
  );
};
