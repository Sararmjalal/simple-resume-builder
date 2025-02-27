import {Text, View } from "@react-pdf/renderer"

const ResumeV1Summary = ({ data, styles }: ResumeV2SummaryProps) => {

    const { title, value } = data

    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
            <Text style={{ ...styles.text, fontWeight: "normal" }}>
                {value}
            </Text>
        </View>
    )
}

export default ResumeV1Summary