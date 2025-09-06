import { Text, View } from "@react-pdf/renderer"

const ResumeV3SelfExperience = ({ data, styles }: ResumeV3SelfExperienceProps) => {

  const { title, projects } = data

  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.blockTitle}>
        {title}
      </Text>
      <View style={styles.companiesWrapper}>
        {
          projects.map(({ title, items }) => {
            return (
              <View key={title} style={styles.projectWrapper}>
                <View style={styles.projectTitleWrapper}>
                  <Text style={styles.projectTitleBullet}>
                    {`•`}
                  </Text>
                  <Text style={styles.projectTitle}>
                    {title}
                  </Text>
                </View>
                {
                  items.map(({ key, title, value }) => {
                    return (
                      <View
                        key={key}
                        style={styles.projectDescWrapper}>
                        {
                          key === "technologies" ?
                            <View style={styles.technologiesWrapper}>
                              {
                                value.split(",").map((skillItem) => {
                                  return (
                                    <Text key={skillItem}
                                      style={styles.technologyItem}>
                                      {skillItem}
                                    </Text>
                                  )
                                })
                              }

                            </View>
                            :
                            <Text style={styles.projectDescTitle}>
                              {title}:
                              <Text style={styles.projectDescValue}>
                                {` ${value}`}
                              </Text>
                            </Text>
                        }
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default ResumeV3SelfExperience 