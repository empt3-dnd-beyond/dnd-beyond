import React from "react"
import Header from "./header"
import Paths from "./paths"
import Path from "./paths/path"
import Talent from "./talent"
import PointBudget from "./pointBudget"

const TalentCalc = ({paths, activeTalents = [], pointBudget, activateTalent, deactivateTalent}) => {

  const activate = (pathTalents, index) => {
    if (activeTalents.length >= pointBudget) {
      // nothing should be active if the number of active talents is greater than or equal to the budget
      return
    } else if (!activeTalents.includes(pathTalents[index]) && activeTalents.includes(pathTalents[index - 1])) {
      // a talent can only be activated if it isn't active and the one before it is already activated
      return () => activateTalent(pathTalents[index])
    } else if (activeTalents.filter(talent => pathTalents.includes(talent)).length === 0 && index === 0) {
      // catches the cases wherein there are no active talents in a path
      return () => activateTalent(pathTalents[index])
    }
  }
  const deactivate = (pathTalents, index) => {
    if (activeTalents.includes(pathTalents[index]) && !activeTalents.includes(pathTalents[index + 1])) {
      // a talent can only be deactivated if the one following isn't active
      return () => deactivateTalent(pathTalents[index])
    }
  }
  
  return (
    <div className="talentCalc">
      <Header />
      <Paths>
        {paths.map(path => {
          return (
          <Path key={path.id} label={path.label} >
            {path?.talents.map((talent, index) => {
              return <Talent
                key={talent}
                talent={talent}
                activeTalents={activeTalents}
                last={path?.talents.length - 1 === index}
                activate={activate(path.talents, index)}
                deactivate={deactivate(path.talents, index)}
              />
            })}
          </Path>)
        })}
      </Paths>
      <PointBudget pointsSpent={activeTalents.length} pointBudget={pointBudget} />
    </div>
  )
}

export default TalentCalc
