import React from 'react';

import {useStorage} from "../hooks/storage.hook";
import {CircularProgress, Typography} from "@material-ui/core";

export const ProgressBar = ({files, section, finish}) => {

  const {loading} = useStorage(files, section);

  return (
    <div>
      {
        loading ?
          <CircularProgress color="secondary"/>
          :
          <>
            <Typography variant={"subtitle1"}>{files.length} item(s) uploaded to {section} collection</Typography>
            {setTimeout(()=>{
              finish()
            }, 5000)}
          </>
      }
    </div>
  )
}
