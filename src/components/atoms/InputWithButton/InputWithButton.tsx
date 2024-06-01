import { FC, PropsWithChildren, ReactNode } from 'react';

type InputWithButtonProps = {
  label: string;
  value?: string;
  children?: ReactNode;
  onChange: (value: string) => void;
};

export const InputWithButton: FC<PropsWithChildren<InputWithButtonProps>> = ({
  label,
  value,
  children,
  onChange,
}) => (
  <div className="relative my-5 w-full px-5">
    <input
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
      type="text"
      className="z-20 block w-full rounded-lg bg-gray-200 p-2.5 text-sm text-black shadow-sm"
      placeholder={label}
      required
    />
    {children}
  </div>
);
