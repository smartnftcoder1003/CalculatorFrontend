import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Autocomplete, Button, Card, TextField } from '@mui/material';


const  Calculator: React.FC = () => {
  
  const [ firstVal, setFirstVal ] = React.useState<string>();
  const [ secondVal, setSecondVal ] = React.useState<string>();
  const [ result, setResult ] = React.useState<number>();
  const [ opr, setOpr ] = React.useState<string>('+');
  const Operators = [
    {label: '+'},
    {label: '-'},
    {label: '*'},
    {label: '/'}
  ];
  const handleOperator = () => {
    console.log("First Val: ", firstVal);
    console.log("Operator: ", opr);
    console.log("Second Val: ", secondVal);
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField id="outlined-basic" label="First Value" variant="outlined" value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={Operators}
            renderInput={(params) => <TextField {...params} label="Movie" sx={{ width: 100 }} onChange={(e) => setOpr(e.target.value)} />}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-basic" label="Second Value" variant="outlined" value={secondVal} onChange={(e) => setSecondVal(e.target.value)} />
        </Grid>
        <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" sx={{ height: '100%' }} onClick={handleOperator}>Calculate</Button>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{ result }</Card>
        </Grid>
      </Grid>
    </Box>
  );
}


export default Calculator;