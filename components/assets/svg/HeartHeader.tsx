import { FC } from 'react';

interface IHeartHeader extends React.ComponentPropsWithoutRef<'svg'> {
  isActive: boolean;
}

export const HeartHeader: FC<IHeartHeader> = ({ isActive = false, ...svgProps }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >

      <path
        d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
        stroke="pink"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />     


    </svg>
  );
};
