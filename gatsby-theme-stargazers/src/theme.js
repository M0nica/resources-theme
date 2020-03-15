export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#dfdbe5",
    primary: "#874f8a"
  },
  sizes: {
    default: "90vw",
    max: "540px"
  },
  text: {
    heading: {
      backgroundColor: "background",
      fontSize: 5,
      color: "primary",
      fontWeight: "bold",
      maxWidth: "max",
      padding: 3,
      width: "default",
      margin: "0 auto",
      a: {
        color: "inherit"
      },
      textAlign: "center"
    }
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      backgroundColor: "background"
    }
  },
  styles: {
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0"
    },
    h2: {
      fontSize: 4,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "0 auto",
      maxWidth: "max",
      backgroundColor: "background",
      textAlign: "center"
    },
    ul: {
      borderTop: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0
    },
    li: {
      borderBottom: "1px solid",
      borderColor: "gray.1",
      padding: 2,
      "&:focus-within,&:hover": {
        backgroundColor: "gray.0"
      }
    }
  }
};

export default theme;
