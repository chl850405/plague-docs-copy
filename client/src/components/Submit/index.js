import React, {useRef} from "react";
import Button from "@mui/material/Button";

function Submit() {
  const valueRef = useRef('') //creating a refernce for TextField Component

    const sendValue = () => {
        return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
    }
    const btnstyle = { margin: "8px 0" };
  return (
    <>
    <Button
    sx={{background: '#00738c',color: '#94f684',}}
      type="submit"
      variant="contained"
      style={btnstyle}
      fullWidth
      onClick={sendValue}
    />
    </>
  );
}
export default Submit;