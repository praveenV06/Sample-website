import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1831 231' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={915.109} cy={115.139} rx={913} ry={63} transform='rotate(-3.28025 915.109 115.139)' fill='#0061BA' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
