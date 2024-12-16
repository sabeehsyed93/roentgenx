import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="copyright-right text-center">
                <p className="copyright-text">
                  Copyright 2024{" "}
                  <Link
                    href="/"
                    className="btn-read-more"
                  >
                    <span>RoentgenX.</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
