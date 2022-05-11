import { CSSProperties } from "react";

function Tag({
  text,
  first = false,
  last = false,
}:{
  text: string,
  first?: boolean,
  last?: boolean,
}) {
  const containerStyle = ():CSSProperties => {
    if(first) return {...styles.container, marginLeft:24};
    else if(last) return {...styles.container, marginRight: 24};
    else return styles.container;
  }
  return (
    <div style={containerStyle()}>
      {text}
    </div>
  );
}

export default Tag;

const styles:{[key:string]:CSSProperties} = {
  container: {
    display:"inline-flex",
    height: 32,
    margin: "12px 12px 12px 0px",
    padding: "0px 12px",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "16px",
    backgroundColor: "rgba(0,0,0,0.05)",
    fontWeight: 400,
    textSizeAdjust: "100%",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  }
}