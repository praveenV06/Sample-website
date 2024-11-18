import { memo, SVGProps } from 'react';

const StatuspageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_23_678)'>
      <path
        d='M23 36.2311C26.6203 36.2311 29.5552 33.3847 29.5552 29.8735C29.5552 26.3623 26.6203 23.5159 23 23.5159C19.3797 23.5159 16.4448 26.3623 16.4448 29.8735C16.4448 33.3847 19.3797 36.2311 23 36.2311Z'
        fill='url(#paint0_linear_23_678)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.17675 20.3937L12.6964 24.4368C12.8264 24.5852 13.0124 24.6768 13.2127 24.6911C13.413 24.7055 13.6108 24.6414 13.762 24.5132C19.4616 19.5567 26.5196 19.5567 32.2343 24.5132C32.3854 24.6414 32.5833 24.7055 32.7836 24.6911C32.9838 24.6768 33.1698 24.5852 33.2999 24.4368L36.8232 20.3937C37.0892 20.0878 37.0507 19.631 36.7369 19.3711C28.4633 12.3511 17.533 12.3511 9.26305 19.3711C8.94933 19.631 8.91078 20.0878 9.17675 20.3937Z'
        fill='#2684FF'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.589312 9.93191L6.19635 15.9018C6.4036 16.1209 6.69988 16.2561 7.01893 16.2774C7.33797 16.2986 7.65316 16.2039 7.894 16.0146C16.9741 8.69602 28.218 8.69602 37.322 16.0146C37.5628 16.2039 37.878 16.2986 38.1971 16.2774C38.5161 16.2561 38.8124 16.1209 39.0196 15.9018L44.6326 9.93191C45.0564 9.4802 44.995 8.80574 44.4952 8.42198C31.3144 -1.94339 13.9015 -1.94339 0.726798 8.42198C0.227009 8.80574 0.165596 9.4802 0.589312 9.93191Z'
        fill='#2684FF'
      />
    </g>
    <defs>
      <linearGradient id='paint0_linear_23_678' x1={23} y1={34.044} x2={23} y2={22.7807} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2684FF' />
        <stop offset={0.82} stopColor='#0052CC' />
      </linearGradient>
      <clipPath id='clip0_23_678'>
        <rect width={45} height={37} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(StatuspageIcon);
export { Memo as StatuspageIcon };
