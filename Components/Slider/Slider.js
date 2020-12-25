export default function Slider() {
  return (
    <div className="slider mr-auto ml-auto">
      <div className="w-100 mr-auto ml-auto">
        <div className="card card-raised card-carousel">
          <div
            id="carouselindicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselindicators"
                data-slide-to="0"
                className=""
              ></li>
              <li
                data-target="#carouselindicators"
                data-slide-to="1"
                className="active"
              ></li>
              <li
                data-target="#carouselindicators"
                data-slide-to="2"
                className=""
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active carousel-item-left">
                <img
                  className="d-block w-100"
                  src="/images/1.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="Slider_Title">HeadPhone</h4>
                </div>
              </div>
              <div className="carousel-item carousel-item-next carousel-item-left">
                <img
                  className="d-block w-100"
                  src="/images/2.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="Slider_Title">HeadPhone</h4>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/3.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="Slider_Title">Cloths</h4>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselindicators"
              role="button"
              data-slide="prev"
              data-abc="true"
            >
              {" "}
              <i className="fa fa-chevron-left"></i>{" "}
              <span className="sr-only">Previous</span>{" "}
            </a>{" "}
            <a
              className="carousel-control-next"
              href="#carouselindicators"
              role="button"
              data-slide="next"
              data-abc="true"
            >
              {" "}
              <i className="fa fa-chevron-right"></i>{" "}
              <span className="sr-only">Next</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
