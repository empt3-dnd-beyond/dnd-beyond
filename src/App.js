import './styles/app.scss'
import React from 'react'
import TalentCalc from './components/TalentCalc'
import { connect } from 'react-redux'
import { activateTalent, deactivateTalent } from './store'

export class App extends React.Component {
  
  render() {
    const {paths, activeTalents, pointBudget} = this.props
    const {activateTalent, deactivateTalent} = this.props
    return (
      <div className="App background">
        <TalentCalc
          paths={paths}
          activeTalents={activeTalents}
          pointBudget={pointBudget}
          activateTalent={activateTalent}
          deactivateTalent={deactivateTalent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  paths: [
      {
          id: 1,
          label: 'Talent Path 01',
          talents: ['chevron', 'silverware', 'cake', 'crown']
      },
      {
          id: 2,
          label: 'Talent Path 02',
          talents: ['boat', 'scuba', 'lightning', 'skull']
      }
  ],
  activeTalents: state.activeTalents || [],
  pointBudget: 6
});

const mapDispatchToProps = {
  activateTalent,
  deactivateTalent,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
