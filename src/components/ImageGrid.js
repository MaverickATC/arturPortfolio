import React, {useEffect, useState} from 'react';
import {projectFirestore, projectStorage} from "../firebase/firebase";
import {CircularProgress, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  grid: {
    margin: '20px auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '40px',
  },
  imgWrap: {
    overflow: 'hidden',
    width: '220px',
    height: '220px',
    position: 'relative',

    '& img': {
      minWidth: '100%',
      minHeight: '100%',
      maxWidth: '150%',
      position: 'absolute',
      top: '0',
      left: '0',
      cursor: 'pointer',
    }
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    width: '20px',
    height: '20px',
    margin: '10px',
    cursor: 'pointer',
    color: 'wheat',
    border: '1px solid wheat',
    borderRadius: '50%',


    '&:hover': {
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      color: '#000',
      border: '1px solid #fff',
    }
  },
  loader: {
    margin: '50px auto'
  }
})


export const ImageGrid = ({section, select}) => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    projectFirestore.collection(section).onSnapshot(
      snap => {
        let documents = [];
        snap.forEach(
          doc => {
            documents.push({
              ...doc.data(),
              id: doc.id,
            })
          }
        )
        setPhotos(documents);
        setLoading(false);
      }
    )

  }, [section]);

  const deleteHandler = (name, id) => {
    projectFirestore.collection(section).doc(id).delete().then(() => {
      // alert("Document successfully deleted!");
      const deleteRef = projectStorage.ref().child(`${section}/${name}`);
      deleteRef.delete().then(() => {
        // alert('Ok');
      }).catch((error) => {
        // alert('Error');
      });
    }).catch((error) => {
      // alert("Error removing document");
    });
  }

  return (
    <>
      {
        loading
          ?
          <CircularProgress color={"secondary"} className={classes.loader}/>
          :
          <>
            {
              photos.length > 0
                ?
                <div className={classes.grid}>
                  {
                    photos.map(photo => {
                      return (
                        <div key={photo.id} className={classes.imgWrap}>
                          <img
                            src={photo.src}
                            alt=""
                            onClick={() => {
                              select(photo.src)
                            }}
                          />
                          <CloseIcon className={classes.close}
                                     onClick={() => (deleteHandler(photo.filename, photo.id))}/>
                        </div>
                      )
                    })
                  }
                </div>
                :
                <Typography variant={"h3"} color={"primary"}>Немає фото</Typography>
            }
          </>
      }
    </>
  )
}
