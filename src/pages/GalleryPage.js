import React, {useCallback, useEffect, useState} from 'react';
import {Box, makeStyles, Tab, Tabs, CircularProgress} from "@material-ui/core";
// import bg from "../assets/bg3.jpeg";
import {Navbar} from "../components/Navbar";

import {storage} from "../firebase/firebase";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: '#f8f6f4',
    width: '100%',
    // backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bg})`,
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85))`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center 78%',
    padding: '3rem 6rem',
    minHeight: '100vh',
    '@media (max-width: 959px)': {
      paddingRight: "3rem",
      paddingLeft: "3rem",
      paddingTop: '2rem',
    },
    '@media (max-width: 599px)': {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      paddingTop: '1rem',
    }
  },
  tabsWrapper: {
    marginTop: '50px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  gallery: {
    display: "flex",
    padding: '0.5rem',
    img: {
      width: '150px',
      height: '150px'
    }
  }
}))

export const GalleryPage = (props) => {
  const {match, history} = props;
  const {params} = match;
  const {page} = params;

  const tabNameToIndex = {
    0: "interiors",
    1: "buildings",
    2: "aerial",
    3: "video"
  };

  const indexToTabName = {
    interiors: 0,
    buildings: 1,
    aerial: 2,
    video: 3
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/gallery/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (page) => {
    setLoading(true);
    let im = [];
    const listRef = storage.ref().child(`photos/${page}`);
    const response = await listRef.listAll();
    for (const imageRef of response.items) {
      const result = await imageRef.getDownloadURL();
      im.push({
        src: result,
        width: 1,
        height: 1
      });
    }
    setPhotos(im);
    setLoading(false);
  }, [])

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Navbar/>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        style={{margin: '50px 0 30px 0'}}
      >
        <Tab label="Інтер'єри"/>
        <Tab label="Нерухомість"/>
        <Tab label="Аерозйомка"/>
        <Tab label="Відеомонтаж"/>
      </Tabs>

      <Box p={3} style={{padding: '0'}}>
        {loading ? <CircularProgress color={"secondary"}/> :
          <Gallery photos={photos} onClick={openLightbox}
                   className={classes.gallery} margin={20}/>}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </div>
  );
}
