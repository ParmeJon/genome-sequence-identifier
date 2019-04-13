const initialState = {
  controlSeq: [],
  poolSeq: [],
  knownMutation: null
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case('CONVERT_CONTROL_SEQ'): {
      console.log(action.payload.data[0])
      let objOfArr = action.payload.data.map(arr => ({id: parseInt(arr[0]), dna: arr[1]}))
      return {...state, controlSeq: objOfArr}
    }

    case('ESTABLISH_MUTATION'): {
      console.log("MUTATION", action.payload)
      return {...state, knownMutation: action.payload}
    }

    case('CONVERT_POOL_SEQ'): {
      console.log(action.payload)
      let objOfArr = action.payload.data.map(arr => ({id: parseInt(arr[0]), dna: arr[1]}))
      console.log(objOfArr)
      return {...state, poolSeq: objOfArr}
    }

    default:
    return state
  }
}

export default reducer
