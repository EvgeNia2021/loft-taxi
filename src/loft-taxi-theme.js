import { createTheme } from "@material-ui/core/styles"

export const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 375,
      sm: 600,
      md: 840,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: "#FDBF5A"
    },
    secondary: {
      main: "#ff0000"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontWeight: 700,
        fontSize: 16,
        color: "000",
        "&$focused": {
          color: "#000"
        }
      }
    },
    MuiLink: {
      root: {
        color: "#FDBF5A",
        cursor: "pointer"
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          "border-bottom-color": "#1473e6"
        }
      }
      // "&:placeholder": {
      //   color: "#828282"
      // }
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        bottom: "-1.2em"
      }
    },
    MuiPaper: {
      root: {
        width: 580,
        height: 541,
        padding: "56px 73px",
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: "16px 141px",
        borderRadius: 70
      },
      containedPrimary: {
        boxShadow: "none",
        backgroundColor: "#FDBF5A",
        "&:hover": {
          backgroundColor: "#FFA842"
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        }
      }
    }
  }
});