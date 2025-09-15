import { Text, View } from "@react-pdf/renderer"

const ResumeV3Experience = ({ data, styles }: ResumeV3ExperienceProps) => {

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
                {
                  projects.map(({ title, description, items }) => {
                    return (
                      <View key={title} style={styles.projectWrapper}>
                        <View style={{ ...styles.projectTitleWrapper, alignItems: "flex-start" }}>
                          <Text style={styles.projectTitleBullet}>
                            {`•`}
                          </Text>
                          <Text style={styles.projectTitle}>
                            {title}
                          </Text>
                          {
                            description &&
                            <Text style={styles.projectDescValue}>
                              {description}
                            </Text>
                          }
                        </View>
                        {items[0] &&
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
            )
          })
        }
      </View>
    </View>
  )
}

export default ResumeV3Experience 