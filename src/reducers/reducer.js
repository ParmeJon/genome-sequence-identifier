const initialState = {
  controlSeq: [],
  poolSeq: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case('CONVERT_CONTROL_SEQ'): {
      console.log(action.payload.data[0])
      return {...state, controlSeq: action.payload.data[0]}
    }

    case('CONVERT_KNOWN_MUTATION'): {

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
