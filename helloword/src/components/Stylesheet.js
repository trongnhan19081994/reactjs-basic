import React from 'react'
import './myStyle.css'
import Style from './appStyle.module.css'
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary': '';
    return (
        <div>
            <h1 className={`${className} font-xl`} > Stylesheet </h1>
            <h2 style= {heading}> Inline </h2>
            <h3 className= {Style.success}> Success </h3>
        </div>
    )
}

export default Stylesheet
