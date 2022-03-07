import {isMobile} from 'react-device-detect'
export const styles = {
    fontSizes: {
        header: (isMobile ? 33 : 66),
        body: (isMobile ? 11 : 25),
        namePlate: (isMobile ? 13.5 : 45),
        project: (isMobile ? 10 : 20),
        tag: (isMobile ? 8 : 17),
    },
    imgWidth: (isMobile ? 100 : 300),
    tagImgWidth: (isMobile ? 35 : 70),
    sectionWidth: (isMobile ? 70 : 60), //vw
    bgColor: "#000000",
    minContentWidth: (isMobile ? 0 : 319),
    contentScale: (isMobile ? 25 : 64),
    navWidth: (isMobile ? 116 : 350),
    contentGap: (isMobile ? 10 : 30),
    contentMargin: (isMobile ? 5 : 15),
    borderWidth: 1,
}
