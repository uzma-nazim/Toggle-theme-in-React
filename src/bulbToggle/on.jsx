import react, { useState } from "react"

import BlubOff from "../images/bulb off.jpg"
import BlubOn from "../images/bulb on.jpg"




let On =()=>{

    let [img1 , changeImg] = useState(BlubOff)



    let ToggleOn  = ()=>{
       
        img1=== BlubOff? changeImg(BlubOn) :changeImg(BlubOn)
    }


    let ToggleOff =()=>{
        img1===BlubOn?changeImg(BlubOff):changeImg(BlubOff)
    }
return(
    
<div>

<img  onMouseOver={ToggleOn} onMouseOut={ToggleOff} src= {img1 }alt="" />

</div>

)

}


export default On