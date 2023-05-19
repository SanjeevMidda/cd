import React, { useState } from 'react'

function CD({letter}) {

    const [status, setStatus] = useState(true);

  return (
    <div className={status? "cd" : "cd transformed"} onClick={() => {setStatus(!status)}}>
        <h3>{letter}</h3>
    </div>
  )
}

export default CD