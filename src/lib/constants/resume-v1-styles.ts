import { Styles } from "@react-pdf/renderer";

const colors = {
  "primary": "",
  "text-primary": "#333",
  "text-secondary": "#333333",
  "background": "#f5f7fc",
  "border-primary": "#e3e9f5",
  "badge-primary": "#e3e9f5"
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
    position: "relative",
    gap: "4px",
    justifyContent: "space-between",
  },
  personalInfoBg: {
    backgroundColor: colors["badge-primary"],
    position: "absolute",
    top: "-24px",
    left: "-24px",
    width: "100vw",
    height: "144%"
  },
  personalInfoColContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    fontWeight: "normal"
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
    fontWeight: "normal",
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
    fontSize: "11px",
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
    backgroundColor: colors["badge-primary"],
    padding: "2px 4px",
    borderRadius: "2px",
  },
  experienceContainer: {
    width: "100%"
  },
  companiesWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "8px"
  },
  companyTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
  },
  companyTitleBullet: {
    fontSize: "12px",
    position: "relative",
    fontWeight: "bold",
  },
  companyTitle: {
    fontSize: "11px",
    letterSpacing: -0.6,
    fontWeight: "bold"
  },
  companyDescription: {
    fontSize: "9px",
    marginLeft: "2px"
  },
  companyDuration: {
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: "8px",
    marginBottom: "8px",
    marginLeft: "8px"
  },
  projectWrapper: {
    marginLeft: "6px",
    marginBottom: "5px"
  },
  projectTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
  },
  projectTitleBullet: {
    fontSize: "11px",
    position: "relative",
    fontWeight: "bold",
  },
  projectTitle: {
    fontSize: "10px",
    letterSpacing: -0.6,
    fontWeight: "bold",
    lineHeight: "1.6"
  },
  projectDescWrapper: {
    fontSize: "9px",
    marginLeft: "8px"
  },
  projectDescTitle: {
    fontWeight: "semibold"
  },
  projectDescValue: {
    fontWeight: "normal"
  },
  technologiesWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px"
  },
  technologyItem: {
    backgroundColor: colors["badge-primary"],
    padding: "2px 4px",
    fontSize: "8px",
    borderRadius: "2px",
    margin: "4px 0"
  },
  educationContainer: {
    width: "90%"
  },
  educationChildrenWrapper: {
    marginTop: "8px"
  },
  educationChildWrapper: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
    marginBottom: "8px"
  },
  educationChildBullet: {
    fontSize: "12px",
    position: "relative",
  },
  educationChildTitle: {
    fontSize: "11px",
    letterSpacing: -0.6
  },
  educationChildDescription: {
    fontSize: "9px",
    marginLeft: "8px"
  }
};
