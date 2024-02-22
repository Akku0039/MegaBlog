import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
       <img src="logoAk.png" alt="Logo" style={{ width: width }} />
    </div>
  )
}

export default Logo