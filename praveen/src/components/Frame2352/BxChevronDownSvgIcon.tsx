import { memo, SVGProps } from 'react';

const BxChevronDownSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.916 12.1082L15.4702 17.554L10.0244 12.1082L8.23064 13.9019L15.4702 21.1414L22.7097 13.9019L20.916 12.1082Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(BxChevronDownSvgIcon);
export { Memo as BxChevronDownSvgIcon };
