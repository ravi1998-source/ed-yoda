import React from 'react'
import './Topbar.css'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PlayCircleFilledWhite } from '@material-ui/icons';


function Topbar() {

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 140,
        },
        selectEmpty: {
          marginTop: theme.spacing(3),
        },
      }));

      const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <div className="topbar">
            
            <div className="topbar__left">
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Program</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>TEST-010120</MenuItem>
          <MenuItem value={20}>TEST-202101</MenuItem>
          <MenuItem value={30}>TEST-301200</MenuItem>
        </Select>
      </FormControl>
            </div>

            <div className="topbar__right">
                <h1>Fullstack developer</h1>
            </div>
        </div>
    )
}

export default Topbar
