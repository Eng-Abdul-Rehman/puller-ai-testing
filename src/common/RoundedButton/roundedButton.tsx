"use client";
import { palette } from "@/theme/Palette";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { FC, useState } from "react";

import "./roundedButton.css";
import { UserProps } from "@/utils/types";
import Image from "next/image";
import { Icon } from "@/components/Icon";

interface buttonProps {
  variant: "select" | "button";
  selectData?: UserProps;
}

const RoundedButton: FC<buttonProps> = ({ variant, selectData }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isImage =
    variant === "select" && selectData?.avatar
      ? selectData.avatar
      : "/default-avatar.png";

  switch (variant) {
    case "button":
      return (
        <div className="container-round-btn">
          <Button
            sx={{
              borderRadius: "50px",
              border: `1px solid var(--vison-pro-stock, ${palette.base.white})`,
              backgroundColor: "#425459",
              width: 82,
              height: 40,
              py: 2,
              px: 4,
            }}
            variant="outlined"
          >
            <Typography variant="text-md-bold">SQL</Typography>
          </Button>
        </div>
      );
    case "select":
      return (
        <div className="container-round-btn">
          <Button
            sx={{
              borderRadius: "50px",
              border: `1px solid var(--vison-pro-stock, ${palette.base.white})`,
              backgroundColor: "rgb(115,129,133)",
              width: 122,
              height: 48,
              py: 2,
              px: 4,
            }}
            variant="outlined"
            onClick={handleMenuOpen}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Image
                width={50}
                height={50}
                src={isImage}
                alt="profile-picture"
              />
              <Typography variant="text-md-bold">{selectData?.name}</Typography>

              <Icon icon="arrowDown" />
            </Box>
          </Button>
          <Menu
            sx={{
              width: 252,
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              style: {
                width: 122,
                // marginLeft: 32,
                marginTop: 45,
                borderRadius: "8px",
                border: "2px solid rgba(196, 196, 196, 0.60)",
                background:
                  "linear-gradient(142.96deg, rgba(68,74,89,255) -3.54%,  rgba(68,74,89,255) 7.55%, rgba(55,61,74,255) 95.15%)",
                backdropFilter: "blur(20px)",
                paddingTop: 0,
                paddingBottom: 0,
              },
            }}
          >
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      );
  }
};

export default RoundedButton;
