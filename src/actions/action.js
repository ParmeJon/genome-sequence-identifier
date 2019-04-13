import Papa from 'papaparse'
export const convertControlCsv = (res) => ({type: "CONVERT_CONTROL_SEQ", payload: res})
export const convertPoolCsv = (res) => ({type: "CONVERT_POOL_SEQ", payload: res})

export const convertControlSeq = (controlSeq) => {
  const controlSeqFilePath = controlSeq[0]
  // let testFile = document.getElementById("testfile").files[0]
  console.log(controlSeqFilePath)
  return dispatch => {
  return Papa.parse(controlSeqFilePath, {
    complete: function(results) {
    dispatch(convertControlCsv(results))
      }
    });
  }
}

export const convertPoolSeq = (poolSeq) => {
  const poolSeqFilePath = poolSeq[0]
  // let testFile = document.getElementById("testfile").files[0]
  
  return dispatch => {
  return Papa.parse(poolSeqFilePath, {
    complete: function(results) {
    dispatch(convertPoolCsv(results))
      }
    });
  }
}
