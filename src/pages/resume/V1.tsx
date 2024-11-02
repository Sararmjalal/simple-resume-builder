import { useEffect } from "react"
import { resumeFonts, resumeV1Styles } from "../../lib"
import resumeV1Data from "../../apis/statics/resume-v1.json"
import ResumeV1PersonalInfo from "../../components/resume/v1/PersonalInfo"
import { Document, PDFViewer, Page, StyleSheet, View, Font } from "@react-pdf/renderer"
import ResumeV1Summary from "../../components/resume/v1/Summary"

Font.register(resumeFonts.openSans)

const ResumeV1 = () => {
    const styles = StyleSheet.create(resumeV1Styles)

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
                        <ResumeV1PersonalInfo
                            styles={styles}
                            data={resumeV1Data.personalInfo}
                        />
                        <View style={styles.devider} />
                        <ResumeV1Summary
                            styles={styles}
                            data={resumeV1Data.summary}
                        />
                        <View style={styles.devider} />

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default ResumeV1
