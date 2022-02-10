import React, { useState } from "react"
import { BsToggleOn } from "react-icons/bs";
import sun from "./images/sun.jpg"
import moon from "./images/mooon.jpg"
import "./app.css"

let LightDark = () => {

  let [val, update] = useState(sun)
  let [btnVal, updatBtn] = useState("Light Mod")

  let ChngeImg = () => {

    val === sun ? update(moon) : update(sun)

    btnVal === "Light Mod" ? updatBtn("Dark Value") : updatBtn("Light Mod")


  }

  return (
    <>
      <div>

        <button onClick={ChngeImg} className="toggelBtn" >{btnVal} </button>
       
        <img width="100%" className="img1" src={val} alt="" />

      </div>
    </>
  )

}

export default LightDark

