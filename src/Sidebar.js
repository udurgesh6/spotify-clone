import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://www.androidsis.com/wp-content/uploads/2019/10/logo-spotify.jpg" alt=""></img>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>
            
            {playlists?.items?.map(playlist => (
                

                <SidebarOption title={playlist.name}/>
            ))}

            <SidebarOption title="Hip Hop"/>
            <SidebarOption title="Rock"/>
            <SidebarOption title="RnB"/>
        </div>
    )
}

export default Sidebar;
