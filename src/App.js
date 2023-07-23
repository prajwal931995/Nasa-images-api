import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLinkArray, getImagesLink } from "./helper";

const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=moon")
      .then(function (response) {

        if (response) {
          let nasaDataItems = response?.data?.collection?.items
          const linkData = getLinkArray(nasaDataItems)
          if (linkData) {
            const imageArray = getImagesLink(linkData)
            setImages(imageArray)
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div style={{ display: 'flex', width: 1700, flexWrap: 'wrap', justifyContent: 'center' }}>
        {images && images.length > 0 && images.map((item, i) => {
          return <div style={{ padding: 10 }} key={i}>
            <img height="400px" width='400px' src={item.href} alt="pic from nasa" />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
