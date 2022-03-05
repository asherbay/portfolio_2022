import { ReactP5Wrapper } from "react-p5-wrapper";
import {Vector} from 'p5'
import {useEffect, useState, useRef} from 'react'
import {useLocation} from 'react-router-dom'
const Background = () => {
    const location = useLocation()
    const frameRate = 90
    const bRef = useRef(null)
    // const [b, setB] = useState(null)
    // const [b2, setB2] = useState(null)
    // const [nextB, setNextB] = useState(null)
    // const [nextB2, setNextB2] = useState(null)
    let b, b2, nextB, nextB2

    // const [currentShape, setCurrentShape] = useState(null)
    // const [morphTimer, setMorphTimer] = useState(0)
    let currentShape
    let morphTimer = 0
    const morphDuration = frameRate * 0.35
    let paused = true
    // const [paused, setPaused] = useState(true)
    useEffect(()=>{
        console.log("Bg component mounted")
    }, [])
    useEffect(()=>{
        console.log("location change detected: " + location.pathname)
        // setMorphTimer(0)
        morphTimer = 0
        // setPaused(false)
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
                b = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
                
            }
            if(!b2){
                // setB2(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                b2 = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
            }
            if(!nextB){
                // setNextB(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                nextB = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
            }
            if(!nextB2){
                // setNextB2(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                nextB2 = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
            }
            bRef.current = [b, b2, nextB, nextB2]
        }
            
        
            
        

        p5.setup = () => {
            
            currentShape = [bRef.current[0], bRef.current[1]] // [b, b2]
       
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
            // console.log("b " + b.length)
            if(currentShape){
                p5.echo(currentShape[0], currentShape[1], [p5.windowWidth/2, p5.windowHeight/2], 700, 200, p5.color(10, 3, 255, 5), p5.color(255, 255, 255, 0), 0.5, 50)
            }
            if(paused){
                p5.noLoop()
            } else {
                if(morphTimer<morphDuration){
                    let prog = morphTimer/morphDuration
                    let inner = bRef.current[0].map((v, index)=>{
                        return Vector.lerp(v, bRef.current[2][index], prog * p5.map(prog, 0, 1, 1.2, 0.75));
                    })
                    let outer = bRef.current[1].map((v, index)=>{
                        return Vector.lerp(v, bRef.current[3][index], prog * p5.map(prog, 0, 1, 1.2, 0.75));
                    })
                    // setMorphTimer(morphTimer+1)
                    // setCurrentShape([inner, outer])
                    morphTimer++
                    currentShape = [inner, outer]
                } else {
                    // setB(currentShape[0])
                    // setB2(currentShape[1])
                    console.log("END MORPH ON " + currentShape[0])
                    b = currentShape[0]
                    b2 = currentShape[1]
                    // setNextB(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                    // setNextB2(p5.newBlob(24, Math.floor(Math.random() * 3)+1))
                    nextB = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
                    nextB2 = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
                    bRef.current = [b, b2, nextB, nextB2]
                    morphTimer = 0
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
            // let targetBlob = p5.newBlob(360/ogBlob.length, 1)
            for(let i=0; i<reps; i++){
                let prog = (i+1)/reps
                let color = p5.lerpColor(ogColor, targetColor, prog)
                let mag = p5.lerp(ogMag, targetMag, prog)
                // console.log("ogBlob: " + ogBlob)
                let rep = ogBlob.map((v, index)=>{
                   return Vector.lerp(v, targetBlob[index], prog * morphAmt);
                })
            
                p5.drawBlob(rep, position, color, mag)
            }
        }

        p5.morph = () => {

        } 

        
    }
    return (
        <ReactP5Wrapper sketch={sketch}/>
    )
}

export default Background
    