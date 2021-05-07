function Items(props) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="card my-2">
          <img
            className="card-img-top"
            alt="no_img"
            src={props.place.product_image}
          ></img>
          <h5 className="card-title">{props.place.product_name}</h5>
          <h5>₹ {props.place.product_price}</h5>
          <p className="card-text">{props.place.product_description}</p>
          <hr />
          <h5 className="text-muted">Rating:{props.place.product_rating}</h5>
          <hr className="mb-1" />
          <a className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-secondary"
              disabled={props.place.clicked}
              onClick={() => {
                props.btn(props.place);
              }}
            >
              Add to Cart
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Items;
