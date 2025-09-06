import { useEffect } from "react"
import { resumeFonts, resumeV3Styles } from "../../lib"
import resumeV3Data from "../../apis/statics/resume-v3.json"
import ResumeV3Skills from "../../components/resume/v3/Skills"
import ResumeV3Summary from "../../components/resume/v3/Summary"
import ResumeV3Education from "../../components/resume/v3/Education"
import ResumeV3Experience from "../../components/resume/v3/Experience"
import ResumeV3SoftSkills from "../../components/resume/v3/SoftSkills"
import ResumeV3PersonalInfo from "../../components/resume/v3/PersonalInfo"
import { Document, PDFViewer, Page, StyleSheet, View, Font, } from "@react-pdf/renderer"
import ResumeV3SelfExperience from "../../components/resume/v3/SelfExperience"

Font.register(resumeFonts.openSans)

const ResumeV3 = () => {
  const styles = StyleSheet.create(resumeV3Styles)

  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [])

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" orientation="portrait" style={styles.body}>
          <View style={styles.container}>
            <ResumeV3PersonalInfo
              styles={styles}
              data={resumeV3Data.personalInfo}
            />
            <View style={styles.devider} />
            <ResumeV3Summary
              styles={styles}
              data={resumeV3Data.summary}
            />
            <View style={styles.devider} />
            <ResumeV3Skills
              styles={styles}
              data={resumeV3Data.skills}
            />
            <View style={styles.devider} />
            <ResumeV3SelfExperience
              styles={styles}
              data={resumeV3Data.selfExperience}
            />
            <View style={styles.devider} />
            <ResumeV3Experience
              styles={styles}
              data={resumeV3Data.experience}
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default ResumeV3
