import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick= { () => props.greetHandler('Child') } > Child Component </button>
        </div>
    )
}

export default ChildComponent
