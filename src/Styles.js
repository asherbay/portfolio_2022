import {isMobile} from 'react-device-detect'
export const styles = {
    fontSizes: {
        header: (isMobile ? 22 : 66),
        body: (isMobile ? 8 : 25),
        namePlate: (isMobile ? 15 : 45),
        project: (isMobile ? 7 : 20),
        tag: (isMobile ? 6 : 17),
    },
    imgWidth: (isMobile ? 100 : 300),
    sectionWidth: 60, //vw
    bgColor: "#000000",
    minContentWidth: (isMobile ? 0 : 319)
}
