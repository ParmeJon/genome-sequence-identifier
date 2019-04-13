import React from 'react'
import Form from './Form'
import {withRouter }from 'react-router'
import {connect} from 'react-redux'
import {convertControlSeq, convertPoolSeq} from '../actions/action'

class TempForm extends React.Component {

state = {
  title: [],
  controlSeq: [],
  patientPool: [],
  knownMutationSeq: ''
}

handleSubmit= (e)=> {
  e.preventDefault()
  console.log(this.state)
  // this.props.convertControlToJson(this.state.controlSeq)
  this.props.establishKnownMutation(this.state.knownMutationSeq)
  this.props.convertPoolToJson(this.state.patientPool)
  this.props.establishKnownMutation(this.state.knownMutationSeq)
  this.props.history.push('/main_results')
}

handleChangeFile = (e) => {
  this.setState({
    [e.target.name]: e.target.files
  }, () => { console.log(this.state)})
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  }, () => { console.log(this.state)})
}


  render(){

    return(
      <div>
        <p> Temp Form </p>
        <form onSubmit={this.handleSubmit}>
          <label>Title Search</label><br></br>
          <input type="textField" name="title" rows="20" cols="50" name="title" placeholder="Huntington's disease" onChange={this.handleChange}></input> <br></br>
<br></br>
          <label>Single Control DNA Sequences (.csv)</label><br></br>
          <input type="file" name="title" id="testfile" name="controlSeq" onChange={this.handleChangeFile}></input> <br></br>
<br></br>
          <label>Known DNA mutation sequence (typing)</label><br></br>
          <input type="textarea" name="knownMutationSeq" placeholder="Known DNA mutation sequence" onChange={this.handleChange}></input> <br></br>
<br></br>
          <label>Patient Pool of DNA sequenes (.csv)</label><br></br>
          <input type="file" name="patientPool" onChange={this.handleChangeFile}/><br></br>
<br></br>

          <button>Compute</button>
        </form>

      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  convertControlToJson: (control) => dispatch(convertControlSeq(control)),
  convertPoolToJson: (pool) => dispatch(convertPoolSeq(pool)),
  establishKnownMutation: (mutation) => dispatch({type: 'ESTABLISH_MUTATION', payload: mutation})
})

export default connect(null, mapDispatchToProps)(withRouter(TempForm))
