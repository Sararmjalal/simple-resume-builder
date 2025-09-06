import { ReactElement } from "react"
import { Text, View } from "@react-pdf/renderer"
import EmailV2 from "../../../assets/react-pdf-icons/v2/EmailV2"
import PhoneV2 from "../../../assets/react-pdf-icons/v2/PhoneV2"
import GithubV2 from "../../../assets/react-pdf-icons/v2/GithubV2"
import LinkedInV2 from "../../../assets/react-pdf-icons/v2/LinkedInV2"
import PortfolioV2 from "../../../assets/react-pdf-icons/v2/PortfolioV2"
import LocationV2 from "../../../assets/react-pdf-icons/v2/LocationV2"

const ResumeV2PersonalInfo = ({ data, styles }: ResumeV2PersonalInfoProps) => {

  const { fullName, role, location, bornOn, contact } = data

  const icons: { [key: string]: ReactElement } = {
    email: <EmailV2 />,
    phone: <PhoneV2 />,
    github: <GithubV2 />,
    linkedIn: <LinkedInV2 />,
    portfolio: <PortfolioV2 />,
    location: <LocationV2 />
  }

  return (
    <View style={styles.personalInfoContainer}>
      <View style={styles.personalInfoColContainer}>
        <Text style={styles.fullName}>
          {fullName}
        </Text>
        <Text style={styles.role}>
          {role}
        </Text>
        <View
          style={{ ...styles.contactItemContainer, marginTop: "4px" }}>
          {icons.location}
          <Text style={styles.locationAndBornOn}>
            {`Location: ${location} | Born on: ${bornOn}`}
          </Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        {
          contact.map(({ key, value, title }) => {
            return (
              <View
                style={{ ...styles.contactItemContainer }}
                key={key}>
                {icons[key]}
                <Text style={styles.contactItem}>
                  {value}
                </Text>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default ResumeV2PersonalInfo