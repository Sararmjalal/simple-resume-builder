import { Text, View } from "@react-pdf/renderer"

const ResumeV3Summary = ({ data, styles }: ResumeV1SummaryProps) => {

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

export default ResumeV3Summary