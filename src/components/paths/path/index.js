import React from "react"

const Path = ({label, children}) => {
  return (
    <div className="path">
      <div className="talent__label">{label}</div>
      {children}
    </div>
  )
}

export default Path
