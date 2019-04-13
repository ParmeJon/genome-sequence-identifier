import React from 'react'
import Form from './Form'
import TempForm from './TempForm'
import {connect} from 'react-redux'
import Display from './display'

class MainResults extends React.Component {


  state = {
    result: []
  }

  search=(arrOfObjects, seq)=>{

  let indexes = []

       arrOfObjects.forEach(obj=> {
        for(let i = 0; i<obj.dna.length; i++){
          const n=seq.length
          if(obj.dna.substring(i, i+n)===seq){
            indexes.push({ idOfPt: obj.id , index: {[i]: obj.dna.substring(i, i+n)}})
          }
      }
    })
    return indexes
}

  render(){

    let x = this.search(this.props.poolSeq, this.props.knownMutation)
    console.log(x)
    let arrOfPtDivs = x.map(pt => <div> id: {pt.idOfPt}, affected index: {JSON.stringify(pt.index)}</div>)

    // let arrOfPtDivs = this.props.poolSeq.map(patient => <div> id: {patient.id}, dna: {patient.dna}</div>)
    // let arrOfControlDiv = this.props.controlSeq.map(patient => <div> id: {patient.id}, dna: {patient.dna}</div>)


    // let arrOfPtsWithMutation = this.sortAffectedDna(this.props.poolSeq, this.props.knownMutation)
    // let ptsMutationDivs = arrOfPtsWithMutation.map(patient =>  <div> id: {patient.id}, dna: {patient.dna}</div>)
    //
    // let arrOfPtsWithoutMutation = this.sortUnaffectedDna(this.props.poolSeq, this.props.knownMutation)
    // let unaffectedPtDivs = arrOfPtsWithMutation.map(patient =>  <div> id: {patient.id}, dna: {patient.dna}</div>)

    return(
      <div>

        <Display poolSeq={this.props.poolSeq} controlSeq={this.props.controlSeq} knownMutation={this.props.knownMutation}/>


      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  controlSeq: state.controlSeq, poolSeq: state.poolSeq, knownMutation: state.knownMutation
})

export default connect(mapStateToProps)(MainResults)
