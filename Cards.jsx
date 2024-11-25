import react from "react";

function Cards(props) {
  return (
    <>
      <div className="card">
        <div className="img_div">
          <img src={props.imgsrc} alt={props.imgalt}></img>
        </div>
        <div className="title_div">
          <p className="Title">{props.title}</p>
          <p className="Category">{props.category}</p>
        </div>
        <div className="title_inside_div">
          <p className="Rating">{props.rating}</p>
          <a href={props.link} target="_blank">
            <button className="Watch_btn">watch now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
