import React from 'react'
import { TopScreen } from '../components/TopScreen'
import { RecentWorks } from '../components/RecentWorks';
import { WorkTypes } from '../components/WorkTypes';
import { BottomScreen } from '../components/BottomScreen';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 500,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export const HomePage = (props) => {
    const ref = React.createRef();
    const handleClick = () => {
        ref.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return(
        <>
            <TopScreen click={handleClick} />
            <RecentWorks ref={ref} />
            <WorkTypes />
            <BottomScreen />
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </>
    )
}