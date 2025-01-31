export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    Children: [
      {
        label: "Details",
        to: "details",
        Children: [
          {
            label: "Location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    Children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        Children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];

export default menus;
