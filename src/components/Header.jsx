import React from "react"
//import logoImage from "/src/components/Weighing-Machine.svg"

export default function Header(){
    return (
        <header>
            <h1>MyWeight
                    <img className="header-h1-img"/>
                LossCoach
            </h1>
            <p className="header-subtext">Weight loss advice at your fingertips</p>
        </header>
    )
}
