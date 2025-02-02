import { ReactElement } from "react"
import { Text, View } from "@react-pdf/renderer"
import EmailV1 from "../../../assets/react-pdf-icons/EmailV1"
import PhoneV1 from "../../../assets/react-pdf-icons/PhoneV1"
import GithubV1 from "../../../assets/react-pdf-icons/GithubV1"
import LinkedInV1 from "../../../assets/react-pdf-icons/LinkedInV1"
import PortfolioV1 from "../../../assets/react-pdf-icons/PortfolioV1"
import LocationV1 from "../../../assets/react-pdf-icons/LocationV1"

const ResumeV1PersonalInfo = ({ data, styles }: ResumeV2PersonalInfoProps) => {

    const { fullName, role, location, bornOn, contact } = data

    const icons: { [key: string]: ReactElement } = {
        email: <EmailV1 />,
        phone: <PhoneV1 />,
        github: <GithubV1 />,
        linkedIn: <LinkedInV1 />,
        portfolio: <PortfolioV1 />,
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
                                style={styles.contactItemContainer}
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

export default ResumeV1PersonalInfo