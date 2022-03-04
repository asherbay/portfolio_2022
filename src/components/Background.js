import { ReactP5Wrapper } from "react-p5-wrapper";
import {Vector} from 'p5'
import {useEffect} from 'react'
const Background = () => {

    useEffect(()=>{
        console.log("Bg component mounted")
    }, [])

    const frameRate = 15
    let canvas = null


    const sketch = (p5) =>{
        
        class Blob {
            constructor(position, id) {

            }

        }

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
        let b = p5.newBlob(24, Math.floor(Math.random() * 3)+1)
        let b2 = p5.newBlob(24, Math.floor(Math.random() * 3)+1)

        p5.setup = () => {
            console.log("p5 setup")
            p5.frameRate(frameRate)
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
            p5.echo(b, b2, [p5.windowWidth/2, p5.windowHeight/2], 700, 200, p5.color(10, 3, 255, 5), p5.color(255, 255, 255, 0), 0.5, 50)
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

        
    }
    return (
        <ReactP5Wrapper sketch={sketch}/>
    )
}

export default Background
    