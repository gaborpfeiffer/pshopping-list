import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly customStyles?: string;
  readonly onClick: () => void;
};

export const IconButton: FC<PropsWithChildren<Props>> = ({
  customStyles,
  children,
  onClick,
}) => (
  <button className={customStyles} onClick={() => onClick()}>
    {children}
  </button>
);
