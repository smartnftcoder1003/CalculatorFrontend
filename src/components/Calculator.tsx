import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Autocomplete, Button, Card, TextField } from '@mui/material';
import Web3 from 'web3';
import ContractABI from '../contracts/CalculatorContract-abi.json';


const  Calculator: any = () => {
  
  const [ firstVal, setFirstVal ] = React.useState<string>();
  const [ secondVal, setSecondVal ] = React.useState<string>();
  const [ result, setResult ] = React.useState<number>();
  const [ opr, setOpr ] = React.useState<string>('+');
  const providerUrl = process.env.PROVIDERURL;
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

  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhsot:3000'));
    const contractAddress = '0x71B5f6FF8FDaD48500403bEcF3413d393cA40514';
    const contract = new web3.eth.Contract(ContractABI, contractAddress);
    console.log(contract);
  }, [])

  return (
    <Box sx={{ flexGrow: 1, marginTop: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField id="outlined-basic" label="First Value" variant="outlined" value={firstVal} onChange={(e: any) => setFirstVal(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Operators}
            renderInput={(params: any) => <TextField {...params} label="Operator" sx={{ width: 100 }} onChange={(e: any) => setOpr(e.target.value)} />}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-basic" label="Second Value" variant="outlined" value={secondVal} onChange={(e: any) => setSecondVal(e.target.value)} />
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