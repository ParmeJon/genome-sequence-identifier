import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
 root: {
   flexGrow: 1
 },
 paper: {
   padding: theme.spacing.unit * 2,
   textAlign: "center",
   color: theme.palette.text.secondary
 }
});

let search=(arrOfObjects, seq)=>{

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

function CenteredGrid(props) {
 const { classes } = props;

 let x = search(props.poolSeq, props.knownMutation)
 console.log(x)
 let arrOfPtDivs = x.map(pt => <div> id: {pt.idOfPt}, affected index: {JSON.stringify(pt.index)}</div>)

 return (
   <div className={classes.root}>
     <Grid container spacing={24}>
       <Grid item xs={6}>
         <Paper className={classes.paper}>
           <div>
             <h1>Controlled Patient</h1>
           </div>
         </Paper>
       </Grid>
       <Grid item xs={6}>
         <Paper className={classes.paper}>
           <div>
             <h1>Known Mutation Sequence</h1>
             {props.knownMutation}
           </div>
         </Paper>
       </Grid>
       <Grid item xs={12}>
         <Paper className={classes.paper}>
           <div>
             <h1>Affected Patients</h1>
             {arrOfPtDivs}
           </div>
         </Paper>
       </Grid>
     </Grid>
   </div>
 );
}

CenteredGrid.propTypes = {
 classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
