/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SortGeneralProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const SortGeneral: React.SFC<SortGeneralProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12,12.4 L14.2,10.5 C14.4,10.3 14.7,10.3 14.9,10.5 C14.9,10.5 14.9,10.5 14.9,10.5 L14.9,10.5 C15.1,10.7 15,11 14.8,11.2 L11.8,13.8 C11.8,13.8 11.7,13.9 11.6,13.9 C11.4,14 11.2,14 11.1,13.9 C11.1,13.9 11.1,13.9 11.1,13.9 L8.1,11.3 C7.9,11.1 7.9,10.8 8,10.6 L8,10.6 C8.2,10.4 8.5,10.4 8.7,10.5 C8.7,10.5 8.7,10.5 8.7,10.5 L10.9,12.4 L10.9,0.5 C11,0.2 11.2,0 11.5,0 C11.8,0 12,0.2 12,0.5 L12,12.4 Z M5,1.6 L5,13.5 C5,13.8 4.8,14 4.5,14 C4.2,14 4,13.8 4,13.5 L4,1.6 L1.8,3.5 C1.8,3.5 1.8,3.5 1.8,3.5 C1.6,3.6 1.3,3.6 1.1,3.4 L1.1,3.4 C0.9,3.2 1,2.9 1.2,2.7 L4.2,0.1 C4.2,0.1 4.2,0.1 4.2,0.1 C4.3,3.50414142e-16 4.5,3.50414142e-16 4.7,0.1 C4.8,0.1 4.8,0.1 4.9,0.2 L7.9,2.8 C8,2.9 8.1,3.2 7.9,3.4 L7.9,3.4 C7.9,3.4 7.9,3.4 7.9,3.4 C7.7,3.6 7.4,3.6 7.2,3.4 L5,1.6 Z"
      transform="translate(4 5)" fill="#000" fillRule="nonzero" />
  </svg>
);
SortGeneral.displayName = 'SortGeneral';
/* tslint:enable */
/* eslint-enable */
