import React, {useState} from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <input name="firstName" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})} />
            <input name="firstName" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />
            <h3> First Name: { name.firstName } </h3>
            <h3> First Name: { name.lastName } </h3>
        </div>
    )
}

export default HookCounterThree