import { FC } from 'react';

interface IUserLogo extends React.ComponentPropsWithoutRef<'svg'> {
  isActive: boolean;
}

export const UserLogo: FC<IUserLogo> = ({ isActive = false, ...svgProps }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <circle
        aria-label="circle-user"
        cx="24.5"
        cy="24.5"
        r="20"
        stroke="white"
        strokeWidth="2"
      />



    </svg>

  );
};
