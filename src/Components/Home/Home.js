// import logo from '../logo.svg';
// import './App.css';\
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <section className="headline">
          <h1>Responsive React Site</h1>
          <p>Using CSS grid and flexbox to easily build navbars!</p>
        </section>
        <section className="features">
          <div className="feature-container">
            <img
              src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png"
              alt="Flexbox Feature"
            />
            <h2>Flexbox Featured</h2>
            <p>
              This pen contains use of flexbox for the headline and feature
              section! We use it in our mobile navbar and show the power of
              mixing css grid and flexbox.
            </p>
          </div>
          <div className="feature-container">
            <img
              src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png"
              alt="Flexbox Feature"
            />
            <h2>CSS Grid Navigation</h2>
            <p>
              While flexbox is used for the the mobile navbar, CSS grid is used
              for the desktop navbar showing many ways we can use both.
            </p>
          </div>
          <div className="feature-container">
            <img
              src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg"
              alt="Flexbox Feature"
            />
            <h2>Basic HTML5</h2>
            <p>
              This pen contains basic html to setup the page to display the
              responsive navbar.
            </p>
          </div>
        </section>
      </div>
    </>
  );




}

export default Home;
