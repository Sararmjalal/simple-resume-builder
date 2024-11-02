import { Styles, Text, View } from "@react-pdf/renderer"

type ResumeV1EducationProps = {
    styles: Styles
    data: ResumeV1Education
}

const ResumeV1Education = ({ data, styles }: ResumeV1EducationProps) => {

    const { title } = data

    return (
        <View style={styles.educationContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
        </View>
    )
}

export default ResumeV1Education