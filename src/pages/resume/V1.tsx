import { useEffect } from "react"
import { resumeV1Styles } from "../../lib"
import { Document, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer"

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
                <Page style={styles.body} orientation="portrait">
                    <View style={styles.container}>

                        <Text>
                            Hello
                        </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default ResumeV1
