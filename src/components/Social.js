import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-around",
        minWidth: '150px'
    }
}));

export const Social = (props) => {
    const {color} = props;
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <a href="https://www.linkedin.com/in/artur-voznenko-09a834156" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon color={color || "primary"}/>
            </a>

            <a href="https://www.instagram.com/voznenko.artur/" rel="noopener noreferrer" target="_blank">
                <InstagramIcon color={color || "primary"}/>
            </a>

            <a href="https://www.youtube.com/channel/UC5s7ttCHcYW6vQ2nbORQ8BQ" rel="noopener noreferrer"
               target="_blank">
                <YouTubeIcon color={color || "primary"}/>
            </a>

        </div>
    )
}