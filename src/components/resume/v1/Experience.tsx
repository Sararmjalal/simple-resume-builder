import { Styles, Text, View } from "@react-pdf/renderer"

type ResumeV1ExperienceProps = {
    styles: Styles
    data: ResumeV1Experience
}

const ResumeV1Experience = ({ data, styles }: ResumeV1ExperienceProps) => {

    const { title } = data

    return (
        <View style={styles.experienceContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
        </View>
    )
}

export default ResumeV1Experience