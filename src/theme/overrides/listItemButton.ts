"use client";

// Import necessary modules from Material-UI
import {
  Theme,
  ListItemButton,
  ListItemButtonProps,
  styled,
} from "@mui/material";

// Define your custom styles for the ListItemButton
const MuiListItemButton = styled(ListItemButton)(
  ({ theme }: { theme: Theme }) => ({
    // Add your custom styles here
    // Example:
    "&.MuiListItemButton-root": {
      // Override default styles
      display: "flex",
      gap: "12px",
      border: "1px solid transparent",
      borderRadius: "8px",
      "&:hover": {
        borderRadius: "8px",
        border: "1px solid var(--Vision-pro-01, rgba(255, 255, 255, 0.37))",
        background: "var(--buttons, rgba(255, 255, 255, 0.30))",
        backdropFilter: "blur(8px)",
      },
    },
  })
);

// Define the props for your custom ListItemButton component
type MuiListItemButtonProps = ListItemButtonProps;

// Export your custom ListItemButton component
export default MuiListItemButton;
