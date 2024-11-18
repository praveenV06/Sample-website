import { memo, SVGProps } from 'react';

const BxChevronDownSvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.9152 18.8544L15.5164 13.4086L10.1176 18.8544L8.33943 17.0607L15.5164 9.82117L22.6934 17.0607L20.9152 18.8544Z'
      fill='#2655FF'
    />
  </svg>
);

const Memo = memo(BxChevronDownSvgIcon2);
export { Memo as BxChevronDownSvgIcon2 };
