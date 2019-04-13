import React from 'react'
import Form from './Form'
import TempForm from './TempForm'

class MainForm extends React.Component {

  render(){
    return(
      <div>
        <p> this is the main form </p>
        <TempForm/>

      </div>
    )
  }

}

export default MainForm
