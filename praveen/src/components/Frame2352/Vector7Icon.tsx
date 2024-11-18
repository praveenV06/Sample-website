import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 337 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 39V0H186.781H337V39' stroke='#CDCDCD' strokeWidth={3} strokeDasharray='6 6' />
  </svg>
);

const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
