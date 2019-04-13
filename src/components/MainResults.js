import React from 'react'
import Form from './Form'
import TempForm from './TempForm'
import {connect} from 'react-redux'

class MainResults extends React.Component {

  render(){
    return(
      <div>
        <h1> Control Patient </h1>
        <p> {this.props.controlSeq}</p>

        <h1> Patient Pool </h1>
        <p> {this.props.poolSeq} </p>


      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  controlSeq: state.controlSeq, poolSeq: state.poolSeq
})

export default connect(mapStateToProps)(MainResults)
