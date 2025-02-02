import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import MuiListItemButton from "@/theme/overrides/listItemButton";
import Logo from "../logo/logo";
import { Icon } from "../Icon";
import Link from "next/link";

const SideNavbar = () => {
  const drawerWidth = 240;
  return (
    <Box
      sx={{
        width: drawerWidth,
      }}
    >
      <Drawer
        sx={{
          position: "static",
          flexShrink: 0,
          borderRight:
            "1px solid var(--Vision-pro-01, rgba(255, 255, 255, 0.37))",
          background:
            "linear-gradient(143deg, rgba(57, 57, 57, 0.60) -3.54%, rgba(97, 97, 97, 0.60) 99.99%)",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginRight: drawerWidth,

            boxSizing: "border-box",
            borderRight:
              "1px solid var(--Vision-pro-01, rgba(255, 255, 255, 0.37))",
            background:
              "linear-gradient(143deg, rgba(57, 57, 57, 0.60) -3.54%, rgba(97, 97, 97, 0.60) 99.99%)",
            boxShadow:
              "0px 1.127px 3.38px 0px rgba(255, 255, 255, 0.25) inset, 0px 0.501px 12.02px -0.501px rgba(0, 0, 0, 0.18)",
            backdropFilter: "blur(30px)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
            minHeight: "100vh",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <Logo variant="default" />
            </Box>

            <Box>
              <List>
                {[
                  {
                    name: "Request",
                    img: <Icon width={18} height={18} icon="requestIcon" />,
                    link: "/create",
                  },
                  {
                    name: "Pulls",
                    img: <Icon width={18} height={18} icon="pullsIcon" />,
                    link: "/create",
                  },
                  {
                    name: "Retrivers",
                    img: <Icon width={18} height={18} icon="retriversIcon" />,
                    link: "/create",
                  },
                  {
                    name: "Alerts",
                    img: <Icon width={18} height={18} icon="alertsIcon" />,
                    link: "/create",
                  },
                  {
                    name: "Advanced",
                    img: <Icon width={18} height={18} icon="advancedIcon" />,
                    link: "/create",
                  },
                ].map((text, index) => (
                  <ListItem key={text.name}>
                    <Link href={text.link} style={{ width: "100%" }}>
                      <MuiListItemButton
                        sx={{
                          display: "flex",
                          gap: "12px",
                          ":hover": {
                            borderRadius: "8px",
                            border:
                              "1px solid var(--Vision-pro-01, rgba(255, 255, 255, 0.37))",
                            background:
                              "var(--buttons, rgba(255, 255, 255, 0.30))",
                            backdropFilter: "blur(8px)",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                          }}
                        >
                          {text.img}
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            fontSize: "14px",
                          }}
                          primary={text.name}
                        />
                      </MuiListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          <Box>
            <List>
              {[
                {
                  name: "Administration",
                  img: <Icon width={18} height={18} icon="adminIcon" />,
                },
              ].map((text, index) => (
                <ListItem key={text.name}>
                  <MuiListItemButton>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                      }}
                    >
                      {text.img}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        fontSize: "14px",
                      }}
                      primary={text.name}
                    />
                  </MuiListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideNavbar;
