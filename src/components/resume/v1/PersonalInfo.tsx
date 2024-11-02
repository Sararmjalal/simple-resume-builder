import { ReactElement } from "react"
import { Styles, Text, View } from "@react-pdf/renderer"
import EmailV1 from "../../../assets/react-pdf-icons/EmailV1"
import PhoneV1 from "../../../assets/react-pdf-icons/PhoneV1"
import GithubV1 from "../../../assets/react-pdf-icons/GithubV1"
import LinkedInV1 from "../../../assets/react-pdf-icons/LinkedInV1"

type ResumeV1PersonalInfoProps = {
    styles: Styles
    data: ResumeV1PersonalInfo
}

const ResumeV1PersonalInfo = ({ data, styles }: ResumeV1PersonalInfoProps) => {

    const { fullName, role, location, bornOn, contact } = data

    const icons: { [key: string]: ReactElement } = {
        email: <EmailV1 />,
        phone: <PhoneV1 />,
        github: <GithubV1 />,
        linkedIn: <LinkedInV1 />
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
                <Text style={styles.locationAndBornOn}>
                    {`Born on: ${bornOn} | Live in:${location}`}
                </Text>
            </View>
            <View style={styles.contactContainer}>
                {
                    contact.map(({ key, value }) => {
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