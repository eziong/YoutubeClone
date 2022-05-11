import { CSSProperties, ReactElement, ReactNode, useState } from "react";

function NavIcon({
  Icon,
  text,
  clicked = false,
}:{
  Icon: JSX.Element,
  text: string,
  clicked?: boolean,
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const containerStyle = ():CSSProperties => {
    if(clicked){
      if(isHovered){
        return {
          ...styles.container,
          backgroundColor: 'rgba(200,200,200)'
        }
      }else{
        return {
          ...styles.container,
          backgroundColor: 'rgba(228,228,228)'
        }
      }
    }else{
      if(isHovered){
        return {
          ...styles.container,
          backgroundColor: 'rgba(234,234,234)'
        }
      }else{
        return {
          ...styles.container,
        }
      }
    }
  }

  const onHover = () => {
    setIsHovered(true);
  }

  const onLeave = () => {
    setIsHovered(false);
  }

  return ( 
    <div 
      style={containerStyle()}
      onMouseOver={onHover}
      onMouseOut={onLeave}
      >
      <div style={styles.icon}>
        {Icon}
      </div>
      <div style={styles.text}>
        {text}
      </div>
    </div>
   );
}

export default NavIcon;

const styles:{[key:string]:CSSProperties} = {
  container: {
    display: 'flex',
    width: '240px',
    height: '40px',
    padding: '0px 24px',
    cursor:'pointer',
  },
  icon: {
    display: "flex",
    width: 50,
    height: 40,
    alignItems: 'center'
  },
  text: {
    display: "flex",
    height: 40,
    fontSize: '15px',
    alignItems:"center",
  }
}