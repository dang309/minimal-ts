import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface IconifyProps {
  icon: React.ElementType | string;
  width?: number;
  sx?: SxProps<Theme>;
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
