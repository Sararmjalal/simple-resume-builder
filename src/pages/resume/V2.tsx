import { useEffect } from 'react';
import { resumeFonts, resumeV2Styles } from '../../lib';
import resumeV2Data from '../../apis/statics/resume-v2.json';
import ResumeV2Skills from '../../components/resume/v2/Skills';
import ResumeV2Summary from '../../components/resume/v2/Summary';
// import ResumeV2Education from "../../components/resume/v2/Education"
import ResumeV2Experience from '../../components/resume/v2/Experience';
import ResumeV2PersonalInfo from '../../components/resume/v2/PersonalInfo';
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  View,
  Font,
} from '@react-pdf/renderer';
import ResumeV2SoftSkills from '../../components/resume/v2/SoftSkills';
import ResumeV2Education from '../../components/resume/v2/Education';

Font.register(resumeFonts.openSans);

const ResumeV2 = () => {
  const styles = StyleSheet.create(resumeV2Styles);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" orientation="portrait" style={styles.body}>
          <View style={styles.container}>
            <ResumeV2PersonalInfo
              styles={styles}
              data={resumeV2Data.personalInfo}
            />
            <View style={styles.devider} />
            <ResumeV2Summary styles={styles} data={resumeV2Data.summary} />
            <View style={styles.devider} />
            <ResumeV2Skills styles={styles} data={resumeV2Data.skills} />
            <View style={styles.devider} />
            <ResumeV2Experience
              styles={styles}
              data={resumeV2Data.experience}
            />
            <View style={styles.devider} />
            <ResumeV2SoftSkills
              styles={styles}
              data={resumeV2Data.softSkills}
            />
            <View style={styles.devider} />
            <ResumeV2Education
              styles={styles}
              data={resumeV2Data.education}
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumeV2;
