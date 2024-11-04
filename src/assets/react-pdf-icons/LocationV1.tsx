import { ClipPath, Defs, G, Path, Rect, Svg } from "@react-pdf/renderer"

const LocationV1 = () => {
    return (
        <Svg width="12" height="12" viewBox="0 0 34 34" fill="none">
            <G clip-path="url(#clip0_1_136)">
                <Path d="M17 0C9.9705 0 4.25 5.76017 4.25 12.8421C4.25 22.9047 15.8015 33.2945 16.2931 33.7308C16.4957 33.9107 16.7478 34 17 34C17.2522 34 17.5043 33.9108 17.7069 33.7323C18.1985 33.2945 29.75 22.9047 29.75 12.8421C29.75 5.76017 24.0295 0 17 0ZM17 19.8333C13.0942 19.8333 9.91667 16.6558 9.91667 12.75C9.91667 8.84425 13.0942 5.66667 17 5.66667C20.9058 5.66667 24.0833 8.84425 24.0833 12.75C24.0833 16.6558 20.9058 19.8333 17 19.8333Z" fill="#333333" />
            </G>
            <Defs>
                <ClipPath id="clip0_1_136">
                    <Rect width="34" height="34" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LocationV1