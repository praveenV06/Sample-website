import { memo, SVGProps } from 'react';

const Group4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4.1075} cy={9.14249} r={4.1075} fill='white' />
    <circle cx={11.2625} cy={7.02249} r={7.0225} fill='white' />
    <circle cx={18.285} cy={9.00999} r={4.24} fill='white' />
  </svg>
);

const Memo = memo(Group4Icon);
export { Memo as Group4Icon };
