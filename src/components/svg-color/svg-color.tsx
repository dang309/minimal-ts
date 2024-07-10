import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface SvgColorProps {
  src: string;
  color?: string
  sx?: SxProps<Theme>;
}

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(({ src, color, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    color={color}
    {...other}
  />
));

export default SvgColor;
