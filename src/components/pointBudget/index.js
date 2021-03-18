import React from "react"

const PointBudget = ({pointBudget, pointsSpent}) => {
  return (
    <div className="talentCalc__pointBudget">
      <div className="pointBudget__points">{`${pointsSpent} / ${pointBudget}`}</div>
      <div className="pointBudget__label">Points Spent</div>
    </div>
  )
}

export default PointBudget
