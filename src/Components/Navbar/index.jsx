import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  Button,
  Drawer,
} from "@material-tailwind/react";
import "./style.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = React.useState(true);
  const theme = {
    drawer: {
      defaultProps: {
        width: 400,
        overlay: true,
        placement: "right",
        overlayProps: undefined,
        className: "",
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-full",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };
  const openDrawer = () => {
    setOpen(open);
  };
  const closeDrawer = () => setOpen(true);
  const widths = {
    width: "30%",
  };
  return (
    <div className="bg">
      <Button
        onClick={() => openDrawer}
        className="z-50 cursor-pointer absolute"
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        placement="left"
        onClose={closeDrawer}
        className="w-[400px] grid items-center navbar fixed top-0 xl:max-w-[50%] z-[9999] h-[100vh] text-[#fff] px-0 salom rounded-none shadow-xl shadow-blue-gray-900/5"
      >
        <List className="p-0 grid text-center" onClose={closeDrawer}>
          <div className="mb-2 p-4 px-0 text-center grid justify-items-center ">
            <div className="-mt-12 mb-10 mx-0">
              <Typography className="border w-[210px] z-10 flex h-[155px] justify-center items-center">
                <Typography
                  variant="h5"
                  className="uppercase w-[210px] mr-5 mt-5 z-50 font-normal absolute h-[155px] flex justify-center items-center mb-10 text-[41px] text-[#fff] border"
                  style={{ lineHeight: "1.2" }}
                >
                  Dream <br /> Pulse
                </Typography>
              </Typography>
            </div>
            <br />
            <br />
            <div className="grid gap-4 w-full text-right text-[20px] mx-0 uppercase">
              <a href="#">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17a2b8] active w-4 h-4 bg-red-600"
                      : "NoActive"
                  }
                >
                  <ListItem className="text-[#fff] rounded-none text-right flex justify-center ">
                    Intro
                  </ListItem>
                </NavLink>
              </a>
              <a href="#banner">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17a2b8] active"
                      : "NoActive"
                  }
                >
                  <ListItem className="text-[#fff] rounded-none text-right flex justify-center ">
                    Intro
                  </ListItem>
                </NavLink>
              </a>
              <a href="#carousel">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17a2b8] active"
                      : "NoActive"
                  }
                >
                  <ListItem className="text-[#fff] rounded-none text-right flex justify-center ">
                    Work
                  </ListItem>
                </NavLink>
              </a>
              <a href="#card">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17a2b8] active"
                      : "NoActive"
                  }
                >
                  <ListItem className="text-[#fff] rounded-none text-right flex justify-center ">
                    Clients
                  </ListItem>
                </NavLink>
              </a>
              <a href="#footer">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17a2b8] active"
                      : "NoActive"
                  }
                >
                  <ListItem className="text-[#fff] rounded-none text-right flex justify-center ">
                    Let's Talk
                  </ListItem>
                </NavLink>
              </a>
            </div>
          </div>
        </List>
      </Drawer>
      <div className="flex justify-end xl:ml-0">
        <div className="xl:w-[70%] w-[80%] justify-start ml-0 h-auto p-0 flex lg:justify-end m-14">
          <Card
            style={{ background: "rgba(255, 255, 255, 0.3)" }}
            className="xl:w-[40%] w-full rounded-none -ml-6 h-[50vh] p-10 text-start"
          >
            <div>
              <h4 className="text-[#006699] text-[25px]">
                Introducing Dream Pulse
              </h4>
              <br />
              <p class="tm-color-gray w-[100%]">
                This box alpha 30 percent. Left sidebar is a sticky element.
                Right side Contents are scrolling up and down. This background
                has a parallax effect.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
