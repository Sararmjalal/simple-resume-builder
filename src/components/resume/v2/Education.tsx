import { Text, View } from "@react-pdf/renderer"

const ResumeV1Education = ({ data, styles }: ResumeV2EducationProps) => {

    const { title, children } = data

    return (
        <View style={styles.educationContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
            <View style={styles.educationChildrenWrapper}>
                {
                    children.map(({ title, description }) => {
                        return (
                            <View key={title + description}>
                                <View style={styles.educationChildWrapper}>
                                    <Text style={styles.educationChildBullet}>
                                        {`•`}
                                    </Text>
                                    <Text style={styles.educationChildTitle}>
                                        {title}
                                    </Text>
                                </View>
                                <Text style={styles.educationChildDescription}>
                                    {description}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ResumeV1Education