import { ReactElement } from "react"
import { Link, Text, View } from "@react-pdf/renderer"
import EmailV1 from "../../../assets/react-pdf-icons/EmailV1"
import PhoneV1 from "../../../assets/react-pdf-icons/PhoneV1"
import GithubV1 from "../../../assets/react-pdf-icons/GithubV1"
import LinkedInV1 from "../../../assets/react-pdf-icons/LinkedInV1"
import PortfolioV1 from "../../../assets/react-pdf-icons/PortfolioV1"
import LocationV1 from "../../../assets/react-pdf-icons/LocationV1"
import WhatsAppV3 from "../../../assets/react-pdf-icons/WhatsAppV3"

const ResumeV3PersonalInfo = ({ data, styles }: ResumeV3PersonalInfoProps) => {

  const { fullName, role, location, bornOn, contact, about } = data

  const icons: { [key: string]: ReactElement } = {
    email: <EmailV1 />,
    phone: <PhoneV1 />,
    github: <GithubV1 />,
    linkedIn: <LinkedInV1 />,
    portfolio: <PortfolioV1 />,
    whatsapp: <WhatsAppV3 />,
    location: <LocationV1 />
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
        {
          location &&
          <View
            style={{ ...styles.contactItemContainer, width: "100%", marginTop: "4px" }}>
            {location && icons.location}
            <Text style={styles.locationAndBornOn}>
              {`${location ? `Location: ${location} | ` : ""}Born on: ${bornOn}`}
            </Text>
          </View>
        }
        <View
          style={{ ...styles.contactItemContainer, width: "100%", marginTop: "4px" }}>
          <Text style={styles.locationAndBornOn}>
            {about}
          </Text>
        </View>
      </View>
      <View style={styles.contactContainer}>
        {
          contact.map(({ key, value, path }) => {
            return (
              <View
                style={{ ...styles.contactItemContainer, ...styles[key] }}
                key={key}>
                <Link
                  href={path}
                  style={{
                    ...styles.contactItemContainer,
                    ...styles[key],
                    color: "inherit",
                    textDecoration: "none"
                  }}
                >
                  {icons[key]}
                  <Text style={{
                    ...styles.contactItem,
                  }}>
                    {value}
                  </Text>
                </Link>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default ResumeV3PersonalInfo