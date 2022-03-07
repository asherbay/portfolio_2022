import { ReactP5Wrapper } from "react-p5-wrapper";
import {Vector} from 'p5'
import {useEffect, useState, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import scale from './Scale'
import {isMobile} from 'react-device-detect'
const Background = () => {
    const location = useLocation()
    let mobileScale = (isMobile ? 0.5 : 1)

    let frameRate = 100

    const bRef = useRef(null)
    let b, b2, nextB, nextB2
    let currentShape

    //pos1 omitted cuz it's always the center
    let pos2 = useRef([Math.random() * window.innerWidth *0.8, Math.random() * window.innerHeight * 0.8])
    let nextPos2 = useRef([Math.min(pos2.current[0] + (Math.random()-0.5) * 50, window.innerWidth * 0.9), pos2.current[1] + (Math.random()-0.5) * 50])
    let currentPos = pos2.current

    let mag1 = useRef([700 * mobileScale, 200 * mobileScale]) //magnitude range
    let nextMag1 = useRef([(Math.random() * 400 + 500) * mobileScale, (Math.random() * 100 + 50) * mobileScale])
    let mag2 = useRef([400 * mobileScale, 100 * mobileScale])
    let nextMag2 = useRef([(Math.random() * 400 + 200) * mobileScale, (Math.random() * 50 + 50) * mobileScale])
    

    let morphTimer = 0
    let morphDuration = frameRate * 0.2
    let paused = true

    useEffect(()=>{
        console.log("Bg component mounted")
    }, [])



    useEffect(()=>{
        console.log("location change detected: " + location.pathname)
        
        morphDuration = frameRate * 0.2
        morphTimer = 0
        paused = false

    }, [location.pathname])

    // useEffect(()=>{
    //         // setCurrentShape([b, b2])
    //         currentShape = [b, b2]
    // }, [b2])
    
    
    let canvas = null


    const sketch = (p5) =>{
        p5.frameRate(frameRate)
        // class Blob {
        //     constructor(position, id) {

        //     }

        // }

        p5.newBlob = (smoothness, wobbliness) =>{
            let seedX = Math.random()
            let seedY = Math.random()
            let blob = []
            for (let angle = 0; angle < 360; angle += smoothness) {
                let xOff = (p5.noise(0.5, angle * seedX)-0.5) * wobbliness
                let yOff = (p5.noise(0.5, angle * seedY)-0.5) * wobbliness
                let v = Vector.fromAngle(p5.radians(angle-135));
                // v.mult(magnitude);
                v.add(xOff, yOff)
                blob.push(v);
            }
            return blob
        }
        if(bRef.current===null){
            if(!b){
                // setB(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                console.log("NEW B GEN from " + b)
                b = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
                
            }
            if(!b2){
                // setB2(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                b2 = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
            }
            if(!nextB){
                // setNextB(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                nextB = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
            }
            if(!nextB2){
                // setNextB2(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                nextB2 = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
            }
            bRef.current = [b, b2, nextB, nextB2]
        }
            
        
            
        

        p5.setup = () => {
            
            currentShape = [bRef.current[0], bRef.current[1]] // [b, b2]
            // pos2 = [Math.random() * p5.windowWidth, Math.random() * p5.windowHeight]

            console.log("p5 setup: " + b)
            
            if(!canvas){
                canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
                // canvas.parent(props.container)
                canvas.position(0, 0)
                canvas.style('z-index', '0')
                canvas.style('position', 'fixed')
                
                return canvas
            }
            
        }
        p5.draw = () => {
            p5.noStroke()
            p5.background(p5.color(0, 0, 0, 255)) 
            if(morphTimer===0){
                frameRate = 100
                p5.frameRate(100)
            } else {
                frameRate = 30
                p5.frameRate(30)
            }
            let prog = morphTimer/morphDuration
            if(currentShape){
                p5.echo(currentShape[0], currentShape[1], [p5.windowWidth/2, p5.windowHeight/2], p5.lerp(mag1.current[0], nextMag1.current[0], prog), p5.lerp(mag1.current[1], nextMag1.current[1], prog), p5.color(10, 3, 255, 5), p5.color(255, 255, 255, 0), 1, 50)
                p5.echo(currentShape[1], currentShape[0], [currentPos[0], currentPos[1]], p5.lerp(mag2.current[0], nextMag2.current[0], prog), p5.lerp(mag2.current[1], nextMag2.current[1], prog), p5.color(10, 120, 55, 5), p5.color(255, 255, 255, 0), 1, 50)
                
            } else {
                console.log("NO SHAPE. POSSIBLE FLICKER")
            }
            if(paused){
                p5.noLoop()
            } else { //end of gesture
                if(morphTimer<morphDuration){
                    
                    let inner = bRef.current[0].map((v, index)=>{
                        return Vector.lerp(v, bRef.current[2][index], prog * p5.map(prog, 0, 1, 1.5, 0.5));
                    })
                    let outer = bRef.current[1].map((v, index)=>{
                        return Vector.lerp(v, bRef.current[3][index], prog * p5.map(prog, 0, 1, 1.4, 0.3));
                    })
                    currentPos = [p5.map(prog, 0, 1, pos2.current[0], nextPos2.current[0]), p5.map(prog, 0, 1, pos2.current[1], nextPos2.current[1])]
                    morphTimer++
                    currentShape = [inner, outer]
                } else {

                    console.log("END MORPH ON " + currentShape[0])
                    b = currentShape[0]
                    b2 = currentShape[1]

                    nextB = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
                    nextB2 = p5.newBlob(18, Math.floor(Math.random() * 3)+1)
                    bRef.current = [b, b2, nextB, nextB2]
                    pos2.current = nextPos2.current 
                    nextPos2.current = [pos2.current[0] + (Math.random()-0.5) * 50, pos2.current[1] + (Math.random()-0.5) * 50]
                    mag1.current = nextMag1.current
                    mag2.current = nextMag2.current
                    nextMag1.current = [(Math.random() * 400 + 500) * mobileScale, (Math.random() * 100 + 50) * mobileScale]
                    nextMag2.current = [(Math.random() * 400 + 200) * mobileScale, (Math.random() * 50 + 50) * mobileScale]


                    paused = true
                    p5.noLoop()
                }
            }
        }

        

        p5.drawBlob = (blob, position, color, mag) => {
            p5.fill(color)
            p5.beginShape()
            blob.forEach((v, ind)=>{
                let magV = v.copy().mult(mag)
                p5.curveVertex(magV.x + position[0], magV.y + position[1])
            })
            p5.endShape(p5.CLOSE)
        }

        p5.echo = (ogBlob, targetBlob, position, ogMag, targetMag, ogColor, targetColor, morphAmt, reps) => {

            for(let i=0; i<reps; i++){
                let prog = (i+1)/reps
                let color = p5.lerpColor(ogColor, targetColor, prog)
                let mag = p5.lerp(ogMag, targetMag, prog)

                let rep = ogBlob.map((v, index)=>{
                   return Vector.lerp(v, targetBlob[index], prog * morphAmt);
                })
            
                p5.drawBlob(rep, position, color, mag)
            }
        }

        p5.windowResized = () => {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
        } 

        
    }
    return (
        <ReactP5Wrapper sketch={sketch}/>
    )
}

export default Background
    