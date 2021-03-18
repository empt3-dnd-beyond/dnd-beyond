import React from "react"

const Talent = ({talent, activeTalents, last, activate, deactivate}) => {
  const isActive = activeTalents.includes(talent)
  const image = `images/${talent}_${isActive ? 'active' : 'inactive'}.png`
  const backgroundClass = `talent__background ${isActive ? '' : ' talent__background__inactive'}`
  const altText = `${isActive ? 'active' : 'inactive'} ${talent}`
  const clickable = !!activate || !!deactivate
  const onMouseUp = e => {
    if (activate && e.button === 0) {
      activate()
    } else if (deactivate && e.button === 2) {
      deactivate()
    }
  }
  
  return (
    <>
      <div className={backgroundClass} onMouseUp={onMouseUp} onContextMenu={e => e.preventDefault()} >
        <img
          className={`talent__icon${clickable ? ' talent__icon__clickable' : ''}`}
          src={image}
          alt={altText}
          onContextMenu={e => e.preventDefault()}
        />
      </div>
      {!last && <div className="talent__connector"></div>}
    </>
  )
}

export default Talent
