import { useState, MouseEvent } from "react";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { account } from "src/_mock/account";
import { Popover } from "@mui/material";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    handleClose();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Stack sx={{ p: 1 }}>
          {["Home", "Profile", "Settings"].map((option) => (
            <MenuItem
              key={option}
              to="#"
              component={RouterLink}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Stack>

        <Box sx={{ p: 1.5, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Popover>
    </>
  );
}
