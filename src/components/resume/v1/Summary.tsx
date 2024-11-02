import { Styles, Text, View } from "@react-pdf/renderer"

type ResumeV1SummaryProps = {
    styles: Styles
    data: ResumeV1Summary
}

const ResumeV1Summary = ({ data, styles }: ResumeV1SummaryProps) => {

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