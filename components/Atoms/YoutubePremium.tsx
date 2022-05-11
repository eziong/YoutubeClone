// material UI
import YouTubeIcon from "@mui/icons-material/YouTube";
import { CSSProperties } from "react";

function YoutubePremium() {
  return ( 
    <div style={styles.container}>
      <span style={styles.icon}>
        <YouTubeIcon style={{color:'red', fontSize:'36px'}} />
      </span>
      <span style={styles.text}>Premium</span>
    </div>
   );
}

export default YoutubePremium;

const styles:{[key:string]:CSSProperties} = {
  container: {
    width: '180px',
    height: '56px',
    padding: '10px 14px 18px 20px',
  },
  icon: {
    verticalAlign: 'middle',
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold',
  }
}