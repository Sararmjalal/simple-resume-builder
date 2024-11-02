import { Styles, Text, View } from "@react-pdf/renderer"

type ResumeV1SkillsProps = {
    styles: Styles
    data: ResumeV1Skills
}

const ResumeV1Skills = ({ data, styles }: ResumeV1SkillsProps) => {

    const { title } = data

    return (
        <View style={styles.skillsContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
        </View>
    )
}

export default ResumeV1Skills