import React from "react";
import { Row, Col } from "react-bootstrap";

import style from "./ShareButtons.module.css";
import Facebook_Icon from "../../assets/icons/Facebook_Icon.png";
import hacker from "../../assets/icons/hacker.png";
import reddit from "../../assets/icons/reddit.png";
import Mail_Icon from "../../assets/icons/Mail_Icon.png";
import twitter from "../../assets/icons/twitter.png";

const ShareButtons = (props) => {
  return (
    <div className={`my-3 ${style["share-product"]}`}>
      <Row className="justify-content-center">
        <Col
          className="p-0 ps-3 me-3"
          style={{ overflowX: "auto", minWidth: "120px" }}
        >
          <div className={`d-flex align-items-center h-100 py-1 ${style[""]}`}>
            <p className="m-0">Share:</p>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style["share-btn"]}`}>
                <img
                  src={Facebook_Icon}
                  alt="fb-icon"
                  style={{ height: "25px" }}
                />
              </button>
            </a>
            <a
              href={`https://twitter.com/share?url=${window.location.href}&text=${props.description}via=${props.user_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style["share-btn"]}`}>
                <img src={twitter} alt="twt-icon" style={{ height: "25px" }} />
              </button>
            </a>

            <a
              href={`https://reddit.com/submit?url=${window.location.href}&title=${props.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style["share-btn"]}`}>
                <img src={reddit} alt="red-icon" style={{ height: "25px" }} />
              </button>
            </a>

            <a
              href={`https://news.ycombinator.com/submitlink?u=${window.location.href}&t=${props.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style["share-btn"]}`}>
                <img src={hacker} alt="hck-icon" style={{ height: "25px" }} />
              </button>
            </a>

            <a
              href={`mailto:?subject=${props.title}&body=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style["share-btn"]}`}>
                <img
                  src={Mail_Icon}
                  alt="mail-icon"
                  style={{ height: "25px" }}
                />
              </button>
            </a>
          </div>
        </Col>
        <Col
          xs="auto"
          className={`d-flex justify-content-center align-items-center py-1`}
          style={{ width: "fit-content" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="100%"
            fill={props.id ? "red" : "black"}
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          <p className="m-0 ms-1">Disukai ({props.id})</p>
        </Col>
      </Row>
    </div>
  );
};

export default ShareButtons;
