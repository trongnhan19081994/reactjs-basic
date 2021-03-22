import React from 'react'

function MemoComp({name}) {
    console.log('--------- Meno Component ---------');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
