import { Text, View, Tspan, Document, } from "@react-pdf/renderer"

const ResumeV1Skills = ({ data, styles }: ResumeV1SkillsProps) => {

    const { title, children } = data

    return (
        <View style={styles.skillsContainer}>
            <Text style={styles.blockTitle}>
                {title}
            </Text>
            <View
                style={styles.skillsWrapper}>
                <View style={styles.verticalDevider} />
                {
                    children.map(({ key, title, items }) => {
                        return (
                            <View key={key}>
                                <View style={styles.skillTitleWrapper}>
                                    <Text style={styles.skillTitleBullet}>
                                        {`•`}
                                    </Text>
                                    <Text style={styles.skillTitle}>
                                        {title}
                                    </Text>
                                </View>
                                <View style={styles.skillItemsWrapper}>
                                    {
                                        items.map((skillItem) => {
                                            return (
                                                <Text
                                                    key={skillItem} style={styles.skillItem}>
                                                    {skillItem}
                                                </Text>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )
}

export default ResumeV1Skills