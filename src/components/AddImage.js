import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import {ProgressBar} from "./ProgressBar";

const useStyles = makeStyles(theme => ({
  addForm: {
    width: '30%',
    height: '100%',
    margin: '50px auto',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",

    '& label': {
      display: "block",
      width: '30px',
      height: '30px',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '50%',
      margin: '10px auto',
      lineHeight: '30px',
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontSize: '24px',

      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },

      '& input': {
        height: 0,
        width: 0,
        opacity: 0,
      }
    },
  },
  select: {
    margin: '10px 0 30px 0'
  }
}))

export const AddImage = (props) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [selectVal, setSelectVal] = useState('interiors');
  const [files, setFiles] = useState([]);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const fileTypes = ['image/jpeg']
  const [startUpload, setStartUpload] = useState(false);

  const handleSelectChange = (e) => {
    setSelectVal(e.target.value);
  };

  const handleFileChange = (e) => {
    let files = Object.values(e.target.files);
    if (files.length) {
      let isValid = true;
      files.forEach(file => {
        isValid = fileTypes.includes(file.type) && isValid;
      });
      if (isValid) {
        setFiles(files);
      } else {
        setIsMessageOpen(true);
        setFiles([]);
        setTimeout(() => {
          setIsMessageOpen(false);
        }, 5000);
      }
      ;
    } else {
      setFiles([]);
    }
  }

  const finishUpload = () => {
    setFiles([]);
    setStartUpload(false);
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={isMessageOpen}
        onClose={null}
        message="Wrong file type( .jpg/.jpeg only )"
      />

      <form className={classes.addForm}>
        <label>
          <input type="file" onChange={handleFileChange} multiple/>
          <span>+</span>
        </label>
        {files.length > 0 && <Typography variant={"body2"}>{`Selected ${files.length} file(s)`}</Typography>}

        <FormControl className={classes.select}>
          <Select
            value={selectVal}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{'aria-label': 'Without label'}}
          >
            <MenuItem value="" disabled>
              Розділ
            </MenuItem>
            <MenuItem value={"interiors"}>Інтер'єри</MenuItem>
            <MenuItem value={"buildings"}>Нерухомість</MenuItem>
            <MenuItem value={"aerial"}>Аерозйомка</MenuItem>
            <MenuItem value={"video"}>Відеомонтаж</MenuItem>
          </Select>
          <FormHelperText>Розділ</FormHelperText>
        </FormControl>
        <Button
          color="secondary"
          variant="outlined"
          style={{marginBottom: '20px'}}
          onClick={() => {
            if (files.length > 0) {
              setStartUpload(true)
            }
          }}
        >
          Upload
        </Button>
        {startUpload && <ProgressBar files={files} section={selectVal} finish={finishUpload}/>}
      </form>
    </>
  );
}
