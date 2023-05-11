import { Link } from "react-router-dom";

import "./Categories.scss";

export default function Categories() {

  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Tops & Tees"
          />
          <button>
            <Link className="link" to="/sub-category/1">
              Tops & Tees
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1609004000524-8e41bd4bb72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Dresses & Skirts"
          />
          <button>
            <Link to="/sub-category/2" className="link">
              Dresses & Skirts
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Pants & Shorts"
          />
          <button>
            <Link to="/sub-category/3" className="link">
              Pants & Shorts
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="Jackets"
              />
              <button>
                <Link to="/sub-category/4" className="link">
                  Jackets
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Accessories"
              />
              <button>
                <Link to="/sub-category/5" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80"
            alt=""
          />
          <button>
            <Link to="/sub-category/6" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
