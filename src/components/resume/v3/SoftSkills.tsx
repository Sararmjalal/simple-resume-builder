import { Text, View } from "@react-pdf/renderer"

const ResumeV3SoftSkills = ({ data, styles }: ResumeV1SoftSkillsProps) => {

  const { title, items } = data

  return (
    <View style={styles.educationContainer}>
      <Text style={styles.blockTitle}>
        {title}
      </Text>
      <View style={{ ...styles.skillItemsWrapper, marginTop: "8px" }}>
        {
          items.map((skillItem) => {
            return (
              <Text key={skillItem} style={styles.skillItem}>
                {skillItem}
              </Text>
            )
          })
        }
      </View>
    </View>
  )
}

export default ResumeV3SoftSkills