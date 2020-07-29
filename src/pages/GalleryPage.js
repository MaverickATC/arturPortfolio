import React from 'react';
import {makeStyles, Tab, Tabs, TabScrollButton} from "@material-ui/core";
import bg from "../assets/bg3.jpeg";
import {Navbar} from "../components/Navbar";
import {TabPanel} from "../components/TabPanel";


const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: '#f8f6f4',
    width: '100%',
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bg})`,
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

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/gallery/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Navbar />


        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"

          variant="scrollable"
          scrollButtons="auto"
          style={{margin: '50px 0'}}
        >
          <Tab label="Інтер'єри"/>
          <Tab label="Нерухомість"/>
          <Tab label="Аерозйомка"/>
          <Tab label="Відеомонтаж"/>
        </Tabs>

        <TabPanel value={selectedTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={selectedTab} index={3}>
          Item Four
        </TabPanel>
    </div>
  );
}