import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import type {SVGProps} from 'react';
import {forwardRef, memo} from 'react';

// NewTabIcon component: forwardRef + memo wrapped for performance
const NewTabIcon = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <ArrowTopRightOnSquareIcon {...props} ref={ref as React.Ref<SVGSVGElement>} />
  )),
);

export default NewTabIcon;
