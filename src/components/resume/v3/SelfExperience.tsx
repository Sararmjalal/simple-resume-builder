import { Link, Text, View } from "@react-pdf/renderer"
import { LinkV1 } from "../../../assets/react-pdf-icons/LinkV1"

const ResumeV3SelfExperience = ({ data, styles }: ResumeV3SelfExperienceProps) => {

  const { title, projects } = data

  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.blockTitle}>
        {title}
      </Text>
      <View style={styles.companiesWrapper}>
        {
          projects.map(({ title, description, path = "#", items }) => {
            return (
              <View key={title} style={{ ...styles.projectWrapper, marginBottom: "0px" }}>
                <Link href={path} style={{ color: "inherit", textDecoration: "none" }}>
                  <View style={styles.projectTitleWrapper}>
                    <LinkV1 />
                    <Text style={styles.projectTitle}>
                      {title}
                    </Text>
                    {
                      description &&
                      <Text style={{ ...styles.projectDescValue, marginLeft: "1px" }}>
                        {description}
                      </Text>
                    }
                  </View>
                </Link>
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
    </View >
  )
}

export default ResumeV3SelfExperience 