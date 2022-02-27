import React, { useEffect, useState } from "react";
import scale from '../components/Scale'
export const StyleContext = React.createContext();
const StyleProvider = (props) => {
    let isMobile = window.innerWidth<850
    let styles
    if(isMobile){
        styles = {
            fontSizes: {
                header: 33,
                body: 13,
                project: 9,
                namePlate: 23,
                
                tag: 9,
            },
            imgWidth: 150,
            tagImgWidth: 35,
            sectionWidth: 40, //vw
            bgColor: "#000000",
            minContentWidth: 100, //px
            navWidth: 118, //px

        }
    } else {
        styles = {
            fontSizes: {
                header: 66,
                body: 25,
                project: 19,
                namePlate: 45,
                tag: 19,
            },
            imgWidth: 300,
            tagImgWidth: 70,
            sectionWidth: 50, //vw
            bgColor: "#000000",
            minContentWidth: 319, //px
            navWidth: 356, //px
        }
    }
    
    useEffect(()=>{
        console.log("isMobile " + isMobile)
        // setIsMobile(window.innerWidth<1000)
    }, [])

    // useEffect(()=>{
    //     console.log("styles set")
    //     if(isMobile){
    //         styles = {
    //             fontSizes: {
    //                 header: 33,
    //                 body: 17,
    //                 namePlate: 23,
    //                 tag: 7,
    //             },
    //             imgWidth: 100,
    //             sectionWidth: 17, //vw
    //             bgColor: "#000000",
    //             minContentWidth: 100
    //         }
    //     } else {
    //         styles = {
    //             fontSizes: {
    //                 header: 66,
    //                 body: 25,
    //                 namePlate: 45,
    //                 tag: 13,
    //             },
    //             imgWidth: 300,
    //             sectionWidth: 50, //vw
    //             bgColor: "#000000",
    //             minContentWidth: 319
    //         }
    //     }
            
    // }, [isMobile])
        return (
            <StyleContext.Provider
                value={{
                    isMobile,
                    styles
                }}
                key={0}
            >
                {props.children}
            </StyleContext.Provider>
        );
   
        
};

export default StyleProvider;
