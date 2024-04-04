import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import "./displayImage.css";

let getData;
let imageData;
async function getImage(noOfImage) {
  //console.log(`https://dummyjson.com/products?limit="${noOfImage}`);
  getData = await axios.get(
    `https://dummyjson.com/products?limit=${noOfImage}`
  );
  console.log("*****", getData.data.products);
  return getData.data.products;
}

function DisplayImage({ noOfImage = 10 }) {
  const [image, setImage] = useState([]);
  const [fetchButton, setFetchButton] = useState(noOfImage);
  const [disablebutton, setdisableButton] = useState(false);
  function fetchImage() {
    setFetchButton(fetchButton + 10);
    if (fetchButton >= 100) {
      setdisableButton(true);
    }
  }
  useEffect(() => {
    async function fetchData() {
      imageData = await getImage(fetchButton);
      setImage(imageData);
    }
    fetchData();
  }, [fetchButton]);
  return (
    <>
      <div className="container">
        <div className="displayImage">
          {image.map((item) => (
            <div key={item.id} className="imagecontaier">
              <img src={item.thumbnail} className="image"></img>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={fetchImage} disabled={disablebutton}>
            Load More Image
          </button>
        </div>
      </div>
    </>
  );
}
DisplayImage.propTypes = {
  noOfImage: PropTypes.number.isRequired,
};
export default DisplayImage;
