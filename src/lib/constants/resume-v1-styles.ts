import { Styles } from "@react-pdf/renderer";

const colors = {
  "primary": "",
  "text-primary": "#333",
  "text-secondary": "#545454",
  "background": "#f7f7fc",
  "border-primary": "#E8E8E8"
}

export const styles: Styles = {
  viewer: {
    width: "99vw",
    height: window.innerHeight
  },
  body: {
    padding: "24px",
    fontFamily: 'Open Sans',
    color: colors["text-primary"],
    backgroundColor: colors.background

  },
  container: {
    width: "100%",
    height: "100%",
  },
  devider: {
    width: "100%",
    height: "1px",
    padding: "8px 0",
    marginBottom: "12px",
    borderBottom: `1px solid ${colors["border-primary"]}`
  },
  blockTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    letterSpacing: -0.6
  },
  text: {
    fontSize: "10px",
    lineHeight: "1.6",
    textAlign: "justify",
    color: colors["text-secondary"]
  },
  personalInfoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    justifyContent: "space-between"
  },
  personalInfoColContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  fullName: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  role: {
    fontSize: "12px",
    fontWeight: "normal"
  },
  locationAndBornOn: {
    fontSize: "9px",
    fontStyle: "italic",
    fontWeight: "thin"
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: "8px"
  },
  contactItemContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "3px"
  },
  contactItem: {
    fontSize: "8px",
    fontWeight: "light",
    marginTop: "1px"
  },
  summaryContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "90%"
  },
  skillsContainer: {
    width: "90%",
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "relative",
    marginTop: "8px"
  },
  skillTitleWrapper: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
    marginBottom: "8px"
  },
  skillTitleBullet: {
    fontSize: "12px",
    position: "relative",
  },
  skillTitle: {
    fontSize: "10px",
    letterSpacing: -0.6
  },
  skillItemsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "6px",
    fontSize: "8px",
    marginTop: "-4px"
  },
  skillItem: {
    backgroundColor: colors["border-primary"],
    padding: "2px 4px",
    borderRadius: "2px",
  },
  experienceContainer: {
    width: "90%"
  },
  educationContainer: {
    width: "90%"
  }
};
