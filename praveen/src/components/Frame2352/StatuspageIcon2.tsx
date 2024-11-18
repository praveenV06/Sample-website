import { memo, SVGProps } from 'react';

const StatuspageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_23_751)'>
      <path
        d='M25.031 39.4304C28.971 39.4304 32.165 36.3327 32.165 32.5114C32.165 28.6901 28.971 25.5924 25.031 25.5924C21.091 25.5924 17.897 28.6901 17.897 32.5114C17.897 36.3327 21.091 39.4304 25.031 39.4304Z'
        fill='url(#paint0_linear_23_751)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.9871 22.1945L13.8175 26.5946C13.9591 26.7561 14.1615 26.8558 14.3794 26.8714C14.5974 26.887 14.8127 26.8173 14.9772 26.6778C21.1802 21.2835 28.8614 21.2835 35.0807 26.6778C35.2452 26.8173 35.4605 26.887 35.6785 26.8714C35.8964 26.8558 36.0988 26.7561 36.2404 26.5946L40.0749 22.1945C40.3643 21.8615 40.3224 21.3644 39.9809 21.0815C30.9767 13.4417 19.0812 13.4417 10.081 21.0815C9.7396 21.3644 9.69764 21.8615 9.9871 22.1945Z'
        fill='#2684FF'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.641358 10.8089L6.74351 17.306C6.96907 17.5444 7.29151 17.6916 7.63873 17.7147C7.98594 17.7378 8.32896 17.6348 8.59107 17.4288C18.4729 9.4639 30.7098 9.4639 40.6176 17.4288C40.8797 17.6348 41.2228 17.7378 41.57 17.7147C41.9172 17.6916 42.2396 17.5444 42.4652 17.306L48.5739 10.8089C49.035 10.3173 48.9682 9.5833 48.4242 9.16566C34.0796 -2.115 15.1291 -2.115 0.790984 9.16566C0.247063 9.5833 0.180227 10.3173 0.641358 10.8089Z'
        fill='#2684FF'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_23_751'
        x1={25.031}
        y1={37.0502}
        x2={25.031}
        y2={24.7923}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2684FF' />
        <stop offset={0.82} stopColor='#0052CC' />
      </linearGradient>
      <clipPath id='clip0_23_751'>
        <rect width={48.9736} height={40.2672} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(StatuspageIcon2);
export { Memo as StatuspageIcon2 };
