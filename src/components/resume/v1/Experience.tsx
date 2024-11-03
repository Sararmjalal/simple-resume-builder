import { Text, View } from "@react-pdf/renderer"

const ResumeV1Experience = ({ data, styles }: ResumeV1ExperienceProps) => {

    const { title, companies } = data

    return (
        <View style={styles.experienceContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
            <View style={styles.companiesWrapper}>
                {
                    companies.map(({ title, description, startTime, endTime, projects }) => {
                        return (
                            <View>
                                <View key={title} style={styles.companyTitleWrapper}>
                                    <Text style={styles.companyTitleBullet}>
                                        {`•`}
                                    </Text>
                                    <Text style={styles.companyTitle}>
                                        {title}
                                    </Text>
                                    <Text style={styles.companyDescription}>
                                        {`(${description})`}
                                    </Text>
                                </View>
                                <Text style={styles.companyDuration}>
                                    {`${startTime} - ${endTime || "Present"}`}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ResumeV1Experience 