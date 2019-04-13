import React from 'react'
import Form from './Form'
import TempForm from './TempForm'
import {connect} from 'react-redux'

class MainResults extends React.Component {

  render(){

let arrOfDivs = this.props.poolSeq.map(patient => <div> id: {patient.id}, dna: {patient.dna}</div>)

    return(
      <div>
        <h1> Control Patient </h1>
        <p> {this.props.controlSeq}</p>

        <h1> Known DNA Mutation Sequence </h1>
        <p></p>

        <h1> Entire Patient Pool </h1>
        <p> {arrOfDivs} </p>

        <h1> UnAffected Patient Pool </h1>

        <h1> Affected Patient Pool </h1>


      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  controlSeq: state.controlSeq, poolSeq: state.poolSeq
})

export default connect(mapStateToProps)(MainResults)
