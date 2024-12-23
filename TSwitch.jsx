import { useState } from "react";

export const TSwitch = () => {
  const [isOn, SetOn] = useState(true);
  const HandleSwitch = () => {
    SetOn(!isOn);
  };
  const Onoffstate = isOn ? "OFF" : "ON";
  const Bgcolorstate = { backgroundColor: isOn ? "#85d485" : "#008000" };
  return (
    <>
      <div className="Switch" style={Bgcolorstate} onClick={HandleSwitch}>
        <div className={`InsideDiv ${Onoffstate}`}>
          <span className="Switch-State">{Onoffstate}</span>
        </div>
      </div>
    </>
  );
};
