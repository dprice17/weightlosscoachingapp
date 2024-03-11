import React from "react"

export default function Header(){
    return (
        <header>
            <h1>MyWeight
                    <img className="header-h1-img" src="src/assets/images/Weighing-Machine.svg"/>
                LossCoach
            </h1>
            <p className="header-subtext">Weight loss advice at your fingertips</p>
        </header>
    )
}