import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import Photo from "./Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=50"
      );
      const data = await response.json();
      console.log("DATA", data);
      setPhotos(data);
    } catch (err) {
      console.log("FETCH_ERR", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {isLoading && (
          <div className="col-12 d-flex justify-content-center">
            <Spinner type="grow" />
            <Spinner type="grow" />
            <Spinner type="grow" />
          </div>
        )}
        {photos.map((photo) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
