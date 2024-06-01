import { useState } from 'react';

export const shopItemViewModelFactory = (title: string) => {
  return () => {
    const [isEdit, setIsEdit] = useState(false);
    const [itemTitle, setItemTitle] = useState(title);

    return {
      isEdit,
      setIsEdit,
      itemTitle,
      setItemTitle,
    };
  };
};
