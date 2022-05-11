import { CSSProperties, useEffect, useState } from "react";

// material UI
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [windowWidth, setWindowWidth] = useState(0);

  const onHandleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onHandleResize);
    return () => {
      window.removeEventListener('resize', onHandleResize);
    }
  },[])

  return (
    <div style={styles.container}>
      {windowWidth > 656
      ?(
        <>
          <div style={styles.inputBox}>
            <input style={styles.input} placeholder="Search"/>
          </div>
          <div style={styles.button}>
            <SearchIcon style={styles.icon} />
          </div>
        </>
        )
      :(
        <>
        <div style={styles.button}>
          <SearchIcon style={styles.icon} />
        </div>
        </>
      )
      }
      
    </div>
  );
}

export default Search;

const styles:{[key:string]:CSSProperties} = {
  container: {
    display: 'flex',
    height: 56,
    padding: '0px 4px',
    alignItems:'center',
  },
  inputBox: {
    display: 'flex',
    width: 'calc(100vw - 440px)',
    maxWidth: 538,
    height: 40,
    padding: "2px 6px",
    marginLeft: 34,
    border: '1px solid black',
    borderRight: '0px',
    borderColor: 'rgba(204,204,204)',
    alignItems:'center',
  },
  input: {
    width: "100%",
    height: 26,
    padding: "1px 0px",
    borderWidth: "0px",
    fontSize: 16,
    fontWeight: 400,
    outline: 'none',
    border: '0px solid black',
  },
  button: {
    display: 'flex',
    width:64,
    height: 40,
    padding: "1px 6px",
    backgroundColor: 'rgba(248,248,248)',
    border: '1px solid rgba(211,211,211)',
    borderRadius: '2px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
    alignItems: 'center',
  }
}