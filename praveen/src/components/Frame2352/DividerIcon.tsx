import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 959 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H958.222' stroke='#E2F1FF' strokeWidth={2} />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
