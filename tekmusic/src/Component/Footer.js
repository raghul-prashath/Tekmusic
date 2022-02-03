import {IconButton } from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function(){
    return(
        <div className="icon-i">
            <div > 
                <IconButton><InstagramIcon className="icon"/></IconButton>
                <IconButton><FacebookIcon className="icon"/></IconButton>
                <IconButton><YouTubeIcon className="icon"/></IconButton>
            </div>
        </div>
    )
}
