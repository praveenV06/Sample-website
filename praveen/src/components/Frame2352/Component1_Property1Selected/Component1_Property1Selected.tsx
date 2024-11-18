import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Selected.module.css';

interface Props {
  className?: string;
  text?: {
    centralizedControlMonitoringSy?: ReactNode;
  };
}
/* @figmaId 11:5 */
export const Component1_Property1Selected: FC<Props> = memo(function Component1_Property1Selected(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.centralizedControlMonitoringSy != null ? (
        props.text?.centralizedControlMonitoringSy
      ) : (
        <div className={classes.centralizedControlMonitoringSy}>Centralized Control &amp; Monitoring System</div>
      )}
    </div>
  );
});
