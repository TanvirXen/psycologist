import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
export default function Footer(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
        <footer>
				<Container maxWidth="xl">
					<Grid container spacing={2}>
          <Grid item xs={12}  md={6} lg={6} xl={6} >
          <p className="h5">How can I help you?</p>
          <FormControl sx={{ m: 1}}fullWidth>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            <em>Select an option</em>
          </MenuItem>
          <MenuItem value={"I want a session"}>I want a session</MenuItem>
          <MenuItem value={"Contact For business"}>Contact For business</MenuItem>
          <MenuItem value={"About an oppurtunity"}>About an oppurtunity</MenuItem>
        </Select>
        <div style={{paddingTop:'12px',paddingBottom:'12px'}}>
        <TextField fullWidth hiddenLabel id="fullWidth" placeholder="Your Email Address" />
        </div>
        <Button variant="contained" sx={{maxWidth:140}}>Submit</Button>
      </FormControl>
          </Grid>
          <Grid item   md={1} lg={2} xl={2} ></Grid>
						<Grid item xs={12} md={4} lg={4} xl={4} >
              <p className="h6">Contact Me</p>
              <div>
<div style={{paddingLeft:'4px'}}>
<div className="inline">
                  <img src="location.svg" alt=""/>
                  <p style={{paddingLeft:'4px',paddingTop:'4px' ,fontSize:'18px'}}>Uttara,Dhaka</p>
                </div>
                <div className="inline">
                  <img src="global.svg" alt=""/>
                  <p style={{paddingLeft:'4px',paddingTop:'4px' ,fontSize:'18px'}}>tanvir@gmail.com <a href="mailto:tanvir@gmail.com"></a> </p>
                </div>
</div>
                <div className="inline">
                  <img src="Facebook.svg" className="ic" alt=""/>
                  <img src="Linkedin.svg" className="ic" alt=""/>
                  <img src="Twitter.svg" className="ic" alt=""/>
                  <img src="Instagram.svg" className="ic" alt=""/>
                  <img src="Youtube.svg" className="ic" alt=""/>
                </div>
              </div>
            </Grid>
		
					</Grid>
				</Container>
				<div className="cpr">
					<p style={{ paddingTop: "3px" }}>© Copyright 2022</p>
				</div>
			</footer>
    )
}