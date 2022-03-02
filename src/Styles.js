import {isMobile} from 'react-device-detect'
export const styles = {
    fontSizes: {
        header: 66,
        body: 25,
        namePlate: 45,
        tag: 13,
    },
    imgWidth: (isMobile ? 100 : 300),
    sectionWidth: 60, //vw
    bgColor: "#000000",
    minContentWidth: (isMobile ? 0 : 319)
}
