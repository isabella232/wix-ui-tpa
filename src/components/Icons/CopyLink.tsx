/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CopyLinkProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const CopyLink: React.SFC<CopyLinkProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M6.03617075,8.72550591 C6.260342,8.50133466 6.64801429,8.50133466 6.87321385,8.72550591 L6.87321385,8.72550591 L8.81466025,10.665924 L4.50913266,14.9714516 C3.25870956,16.2218747 3.25870956,18.2558689 4.50913266,19.506292 C5.75852746,20.7567151 7.79354994,20.7587717 9.04397304,19.506292 L9.04397304,19.506292 L13.3495006,15.2017927 L15.2744941,17.1267862 C15.3855514,17.2378435 15.4472499,17.3869482 15.4472499,17.5453077 C15.4472499,17.7036672 15.3845231,17.8527719 15.2734658,17.9628009 L15.2734658,17.9628009 L11.1478922,22.0894029 C9.87381798,23.3634771 8.2017884,24 6.52873051,24 C4.85567262,24 3.18364304,23.3634771 1.90956884,22.0904312 C-0.636522946,19.5422828 -0.636522946,15.3981996 1.90956884,12.8521078 L1.90956884,12.8521078 Z M14.0613986,7.5894307 C14.292768,7.3580613 14.6681006,7.3580613 14.8984417,7.5894307 L14.8984417,7.5894307 L16.4666121,9.15760113 C16.5776694,9.26865844 16.6393679,9.41776317 16.6393679,9.57612268 C16.6393679,9.73345387 16.5776694,9.88153029 16.4666121,9.99361592 L16.4666121,9.99361592 L9.9985518,16.4627045 C9.88543787,16.5737619 9.73736145,16.6354604 9.58003025,16.6354604 C9.42167074,16.6354604 9.27359432,16.5737619 9.16048039,16.4627045 L9.16048039,16.4627045 L7.59333827,14.8945341 C7.36299718,14.664193 7.36299718,14.2888604 7.59333827,14.0585193 L7.59333827,14.0585193 Z M17.4719893,1.33226763e-14 C19.2149722,1.33226763e-14 20.8551242,0.678683594 22.0880661,1.91162546 C23.3199796,3.14456732 23.9996915,4.78369103 23.9996915,6.5277022 C23.9996915,8.27171338 23.3199796,9.91083709 22.0880661,11.1437789 L22.0880661,11.1437789 L18.0406439,15.1901728 C17.9254733,15.3053433 17.774312,15.3629286 17.6231507,15.3629286 C17.4719893,15.3629286 17.3197997,15.3053433 17.2046291,15.1901728 L17.2046291,15.1901728 L15.2827206,13.2682643 L19.6232106,8.92777418 C20.8736337,7.67735108 20.8736337,5.6423286 19.6232106,4.39293381 C18.3758725,3.14353901 16.3398217,3.14148239 15.0883703,4.39293381 L15.0883703,4.39293381 L10.7478802,8.73342388 L8.8084904,6.79506241 C8.69743308,6.68297678 8.63573458,6.53490036 8.63573458,6.37654086 C8.63573458,6.21818135 8.69743308,6.07010493 8.8084904,5.95904761 L8.8084904,5.95904761 L12.8548843,1.91162546 C14.0888544,0.678683594 15.7269498,1.33226763e-14 17.4719893,1.33226763e-14 Z"
      fill="#000" fillRule="evenodd" />
  </svg>
);
CopyLink.displayName = 'CopyLink';
/* tslint:enable */
/* eslint-enable */
