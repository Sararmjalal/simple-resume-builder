import { Styles } from "@react-pdf/renderer";

const colors = {
  "primary": "",
  "text-primary": "#333",
  "text-secondary": "545454",
  "background": "#f7f7fc",
  "box-primary": "F7F7FC",
  "border-primary": "E8E8E8"
}

export const styles: Styles = {
  viewer: {
    width: "99vw",
    height: window.innerHeight
  },
  body: {
    padding: "50px",
    fontFamily: 'Open Sans',
    color: colors["text-primary"],
    backgroundColor: colors.background

  },
  container: {
    width: "100%",
    height: "100%",
  },
};
