/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface InfoProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Info: React.SFC<InfoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z M12,4.88888889 C8.07264178,4.88888889 4.88888889,8.07264178 4.88888889,12 C4.88888889,15.9273582 8.07264178,19.1111111 12,19.1111111 C15.9273582,19.1111111 19.1111111,15.9273582 19.1111111,12 C19.1111111,8.07264178 15.9273582,4.88888889 12,4.88888889 Z M12.7838529,10.4646465 L12.7838529,14.7124624 L13.2929293,14.7372503 L13.2929293,15.5555556 L11.1111111,15.5555556 L11.1111111,14.7709045 L11.3086109,14.7525481 C11.4933507,14.7353636 11.6400629,14.5975733 11.6738544,14.4213422 L11.6812046,14.3437006 C11.6879039,14.3128522 11.6879039,13.3839213 11.6812046,11.5569081 C11.6796087,11.3991695 11.6102745,11.3203002 11.473202,11.3203002 C11.4690281,11.3190832 11.3483311,11.3190832 11.1111111,11.3203002 L11.1111111,10.4646465 L12.7838529,10.4646465 Z M12.020202,7.55555556 C12.5222791,7.55555556 12.9292929,7.96256942 12.9292929,8.46464646 C12.9292929,8.96672351 12.5222791,9.37373737 12.020202,9.37373737 C11.518125,9.37373737 11.1111111,8.96672351 11.1111111,8.46464646 C11.1111111,7.96256942 11.518125,7.55555556 12.020202,7.55555556 Z"
      fill="#000" fillRule="evenodd" />
  </svg>
);
Info.displayName = 'Info';
/* tslint:enable */
/* eslint-enable */
