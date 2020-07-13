import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid } from '@material-ui/core';

export const Social = (props) => {
    const { color } = props;

    return (
        <>
            <Grid item>
                <a href="https://www.linkedin.com/in/artur-voznenko-09a834156" rel="noopener noreferrer" target="_blank" >
                    <LinkedInIcon color={color || "primary"} />
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.instagram.com/voznenko.artur/" rel="noopener noreferrer" target="_blank" >
                    <InstagramIcon color={color || "primary"} />
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.youtube.com/channel/UC5s7ttCHcYW6vQ2nbORQ8BQ" rel="noopener noreferrer" target="_blank" >
                    <YouTubeIcon color={color || "primary"} />
                </a>
            </Grid>
        </>
    )
}