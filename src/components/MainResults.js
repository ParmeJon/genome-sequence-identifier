import React from 'react'
import Form from './Form'
import TempForm from './TempForm'
import {connect} from 'react-redux'

class MainResults extends React.Component {


  state = {
    result: []
  }

  // Search function looks through a single string seq and comparing it to the mutation

  search=(string, seq)=>{
  var indexes = []
  for(let i = 0; i<string.length; i++){
    const n=seq.length
    if(string.substring(i, i+n)===seq){
      indexes.push({[i]: string.substring(i, i+n)})
    }
  }

  // let foundIndex = string.indexOf(seq)
  // let split = string.split(seq)
  // let slice = string.slice(seq)
  // let charAt = string.charAt(seq)
  // let match = string.match(/ATA/g)

  // return indexes
  console.log(indexes)
  if (this.state.result !== indexes) {
    this.setState({
      result: indexes
    })
  }
  // return match
  // return foundIndex
  // return split
  // return slice
  // return charAt

}

  render(){
    if((this.props.controlSeq !== null && this.props.knownMutation !== null) && (this.state.input2 === null && this.state.input3.length <= 0)){
      this.search(this.props.controlSeq.dna, this.props.knownMutation)
      // this.color(this.state.input4)
    }else{
      this.sortDna(this.state.data, this.state.input2)
    }

    let result = this.result.map(res=><span> {Object.keys(res)} {Object.values(res)} </span>)
    let color = []
    let resultColor = []

    if(this.props.controlSeq.dna!==null){

      // for(let i = 0; i<this.props.controlSeq.dna.split(this.props.knownMutation).length; i++){
      //   let sub = this.props.controlSeq.dna.split(this.state.input4)
      //   color.push(<span>{sub[i]}</span>)
      //   color.push(<span style={{color: "red"}}> <span id="redResult">{result[i]}</span></span> )
      // }

      this.props.controlSeq.dna.split(this.props.knownMutation).forEach(sub => {
        color.push(<span>{sub}</span>)
        color.push(<span style={{color: "red"}}>{this.props.knownMutation}<span></span></span> )
      })
      color.pop()

    }


    console.log(this.props.knownMutation)
    // let arrOfPtDivs = this.props.poolSeq.map(patient => <div> id: {patient.id}, dna: {patient.dna}</div>)
    // let arrOfControlDiv = this.props.controlSeq.map(patient => <div> id: {patient.id}, dna: {patient.dna}</div>)


    // let arrOfPtsWithMutation = this.sortAffectedDna(this.props.poolSeq, this.props.knownMutation)
    // let ptsMutationDivs = arrOfPtsWithMutation.map(patient =>  <div> id: {patient.id}, dna: {patient.dna}</div>)
    //
    // let arrOfPtsWithoutMutation = this.sortUnaffectedDna(this.props.poolSeq, this.props.knownMutation)
    // let unaffectedPtDivs = arrOfPtsWithMutation.map(patient =>  <div> id: {patient.id}, dna: {patient.dna}</div>)

    return(
      <div>
        <h1> Control Patient </h1>
      {/*   <p> {arrOfControlDiv}</p> */}

        <h1> Known DNA Mutation Sequence </h1>
        <p>{this.props.knownMutation}</p>


        <h1> UnAffected Patient Pool </h1>
        <p></p>

        <h1> Affected Patient Pool </h1>
        <p></p>


      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  controlSeq: state.controlSeq, poolSeq: state.poolSeq, knownMutation: state.knownMutation
})

export default connect(mapStateToProps)(MainResults)
