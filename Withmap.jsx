import React from "react";
import Cards from "./Cards";
import Attribute from "./Attribut";
let rcards = (Attdata) => {
  return (
    <Cards
      key={Attdata.id}
      imgsrc={Attdata.imgsrc}
      imgalt={Attdata.imgalt}
      title={Attdata.title}
      rating={Attdata.rating}
      category={Attdata.category}
      link={Attdata.link}
    />
  );
};
function Withmap() {
  return Attribute.map(rcards);
}

export default Withmap;
