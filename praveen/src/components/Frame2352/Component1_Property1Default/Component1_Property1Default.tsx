import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    centralizedControlMonitoringSy?: ReactNode;
  };
}
/* @figmaId 11:3 */
export const Component1_Property1Default: FC<Props> = memo(function Component1_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.centralizedControlMonitoringSy != null ? (
        props.text?.centralizedControlMonitoringSy
      ) : (
        <div className={classes.centralizedControlMonitoringSy}>Centralized Control &amp; Monitoring System</div>
      )}
    </div>
  );
});
