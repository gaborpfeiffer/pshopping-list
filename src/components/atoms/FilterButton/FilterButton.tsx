import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly label: string;
  readonly filterActive: boolean;
  readonly onClick: (filterActive: boolean) => void;
};

export const FilterButton: FC<PropsWithChildren<Props>> = ({
  label,
  filterActive,
  onClick,
}) => (
  <div className="flex items-center justify-start px-5">
    <button
      onClick={() => onClick(!filterActive)}
      id="filter-button"
      className="rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-300 active:bg-blue-500 active:text-white"
    >
      {label}
    </button>
  </div>
);
