import { CSSProperties } from "react";
import Search from "../Modules/Search";

//components
import YoutubePremium from '../../components/Atoms/YoutubePremium';

// material UI
import MenuIcon from "@mui/icons-material/Menu"
import VoiceIcon from '@mui/icons-material/KeyboardVoice';
import CreateIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import ProfileIcon from '@mui/icons-material/Circle';

function HeaderMainContainer() {
  return ( 
    <div style={{display:'flex', width: '100vw', height: 56, justifyContent:'space-between', alignItems:'center'}}>
      <div style={styles.container}>
        <div style={styles.button} >
          <MenuIcon style={{color:'rgb(3,3,3)', fontSize:'24px'}} />
        </div>
        <div style={{cursor:'pointer'}}>
          <YoutubePremium />
        </div>
      </div>
      <div style={styles.container}>
        <Search />
        <div style={{...styles.button, ...styles.voiceButton}}>
          <VoiceIcon style={styles.icon} />
        </div>
      </div>
      <div style={styles.container}>
          <div style={{...styles.button, marginRight:12}}>
            <CreateIcon style={styles.icon} />
          </div>
          <div style={{...styles.button, marginRight:12}}>
            <AppsIcon />
          </div>
          <div style={{...styles.button, marginRight:12}}>
            <NotificationIcon style={styles.icon} />
          </div>
          <div style={{...styles.button, marginRight:24}}>
            <ProfileIcon style={styles.icon} />
          </div>
        </div>
    </div>
   );
}

export default HeaderMainContainer;

const styles:{[key:string]:CSSProperties} = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
  },
  button: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    padding: 8,
  },
  voiceButton: {
    backgroundColor: "rgba(240,240,240)",
    borderRadius: '20px',
  },
  icon: {
    fontSize: '24px',
  }
}