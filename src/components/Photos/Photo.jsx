const Photo = ({ title, thumbnailUrl }) => (
  <div className="col">
    <div className="card photo-card">
      <img src={thumbnailUrl} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </div>
);

export default Photo;
