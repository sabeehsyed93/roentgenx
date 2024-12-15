import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import PricingData from "../../data/pricing.json";

import SplitImg from "../../public/images/split/split-2.png";
import SplitLogo from "../../public/images/split/split-2-logo.png";
import DarkSplitImg from "../../public/images/light/split/split-2.png";
import DarkSplitLogo from "../../public/images/light/split/split-2-logo.png";
import bannerImg from "../../public/images/bg/slider-main-image.png";
import bannerImg1 from "../../public/images/bg/slider-main-image-1.png";
// import bannerWhiteImg from "../../public/images/light/bg/slider-main-image.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
import bgShapeThree from "../../public/images/bg/bg-shape-two.png";

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import BrandTwo from "../Brands/Brand-Two";
import CtaTwo from "../CallToActions/Cta-Two";
import { useAppContext } from "@/context/Context";
import styles from './Home.module.css';
import textStyles from './TextAnimation.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { isLightTheme } = useAppContext();
  const scrollRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); // Animation timing

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
      data-black-overlay="1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="inner text-center mt--140">
              <h1 className="title display-one">
                VetBot Allows you to protocol
                <br />
                <span
                  style={{ marginTop: "2rem", display: "inline-block" }}
                  className="header-caption"
                >
                  <span
                    className={`${styles.wrapper} setColor ${
                      isLightTheme ? "dark" : "light"
                    }`}
                  >
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          CT Scans
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          MRI scans
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          US scans
                        </b>
                      </span>
                    </span>
                  </span>
                </span>{" "}
                With AI
              </h1>
              <p className="description">
                Use AI to reduce wasted time <br />{" "}
                So resource are used for what matters most
              </p>

                <div className={`${styles['protocol-container']} setColor ${isLightTheme ? 'dark' : 'light'}`}>
                  <h3 className={styles['protocol-title']}>Available Protocols:</h3>
                  <div className={styles['protocol-list-container']} ref={scrollRef}>
                    <div className={styles['protocol-list']}>
                      <div className={styles['protocol-item']}>CT Abdomen/Pelvis</div>
                      <div className={styles['protocol-item']}>CT Head</div>
                      <div className={styles['protocol-item']}>CT Chest</div>
                      <div className={styles['protocol-item']}>MRI Liver</div>
                      <div className={styles['protocol-item']}>MRI Head</div>
                      <div className={styles['protocol-item']}>CT Abdomen/Pelvis</div>
                      <div className={styles['protocol-item']}>CT Head</div>
                      <div className={styles['protocol-item']}>CT Chest</div>
                      <div className={styles['protocol-item']}>MRI Liver</div>
                      <div className={styles['protocol-item']}>MRI Head</div>
                    </div>
                  </div>
                </div>

                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-11 col-xl-11 justify-content-center">
              <div className="slider-frame">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  arrows={true}
                  className={styles.customSlider}
                  prevArrow={<button className="slick-prev">Previous</button>}
                  nextArrow={<button className="slick-next">Next</button>}
                >
                  <div>
                    <Image
                      className="slider-image-effect"
                      src={bannerImg}
                      width={1055}
                      height={898}
                      alt="Banner Image 1"
                    />
                  </div>
                  <div>
                    <Image
                      className="slider-image-effect"
                      src={bannerImg1}
                      width={1055}
                      height={898}
                      alt="Banner Image 2"
                    />
                  </div>
                  {/* <div>
                    <Image
                      className="slider-image-effect"
                      src="/banner-3.jpg"
                      width={1055}
                      height={898}
                      alt="Banner Image 3"
                    />
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      {/* <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  truest 800,000+ HIGHLY PRODUCTIVE Company
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div>
        </div>
      </div> */}

      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>
    </>
  );
};

export default Home;
