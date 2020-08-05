import React, {useCallback, useEffect, useState} from "react";

import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {storage} from "../firebase/firebase";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles({
  gallery: {
    width: '100%',
    height: 'auto',


    img: {
      width: '150px',
      height: '150px'
    }
  }
})

export function TabPanel(props) {
  const { children, value, index, path, ...other } = props;

  const [loading, setLoading] = useState(true)

  const [imgs, setImgs] = useState([])
  const listRef = storage.ref().child(`photos/${path}`);

  useEffect(() => {
    console.log('use effect');
    let im = []
    listRef.listAll().then(function (res) {
      res.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
          im.push({
            src: url,
            width: 1,
            height: 1
          });
          console.log('img created');
        })
      })
    });
    setImgs(im);
    setLoading(false);
    console.log('use effect end');
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{padding:'0'}}>
          {loading ?
            <Typography variant={'h1'}>Loading</Typography>
            :
            <Gallery photos={imgs} onClick={openLightbox} className={classes.gallery}/>
          }
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={imgs.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Box>
      )}
    </div>
  );
}
