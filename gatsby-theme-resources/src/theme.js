export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    footer: "Work Sans",
    body:
      "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#dfdbe5",
    limestone: "#9c92ac",
    primary: "#874f8a",
    accent: "#17417f",
    eggplant: "#2a2135"
  },
  sizes: {
    default: "100vw",
    max: "960px"
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
      backgroundColor: "background",
      overflowWrap: "break-word"
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
    a: {
      fontWeight: "bold",
      color: "gray.3",
      "&:focus-within,&:hover": {
        color: "primary"
      }
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
      a: { color: "gray.3" },
      "&:focus-within,&:hover": {
        backgroundColor: "gray.0",
        color: "primary",
        a: {
          color: "primary"
        }
      }
    },
    footer: { backgroundColor: "primary" }
  }
};

export default theme;
