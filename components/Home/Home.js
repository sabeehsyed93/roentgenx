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
  const [showContent, setShowContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const { isLightTheme } = useAppContext();
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Sal();
    }

    // Let the initial setup happen invisibly
    const setupTimer = setTimeout(() => {
      setVisibleIndex(1);
    }, 100);

    // Show the animation when we're ready for the smooth part
    const showTimer = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);

    // Start the rotation
    const rotationTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }, 1000);

    return () => {
      clearTimeout(setupTimer);
      clearTimeout(showTimer);
      clearTimeout(rotationTimer);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Sal();
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const list = container.querySelector(`.${styles['protocol-list']}`);
    const items = list.children;
    const itemHeight = items[0].offsetHeight + 8; // 8px for margin
    let scrollPosition = 0;

    // Clone items and append them to create seamless scroll
    Array.from(items).forEach(item => {
      const clone = item.cloneNode(true);
      list.appendChild(clone);
    });

    const scroll = () => {
      scrollPosition += 1;
      list.style.transform = `translateY(-${scrollPosition}px)`;

      // Reset position when we've scrolled past the original set
      if (scrollPosition >= itemHeight * items.length) {
        scrollPosition = 0;
        list.style.transform = 'translateY(0)';
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  const textContainerStyle = {
    minWidth: '300px',
    display: 'inline-block',
    position: 'relative',
    '@media (max-width: 767px)': {
      minWidth: '250px',
      width: '100%'
    }
  };

  const animatedTextStyle = {
    position: 'absolute',
    width: '100%',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s'
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    className: styles.customSlider,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>
  };

  const renderCarouselContent = () => {
    const images = [
      {
        src: bannerImg,
        alt: "Slider Image 1"
      },
      {
        src: bannerImg1,
        alt: "Slider Image 2"
      }
    ];

    if (isMobile) {
      return (
        <div className="mobile-slider-container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '1rem',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          margin: '0 0.5rem',
          width: 'calc(100% - 1rem)',
          maxWidth: '800px'
        }}>
          {images.map((image, index) => (
            <div key={index} className="mobile-slide" style={{
              position: 'relative',
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                priority={index === 0}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one" style={{ 
                  lineHeight: 1.3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ marginBottom: "1rem" }}>
                    VetBot Allows you to protocol
                  </div>
                  <div>
                    <span className={`${textStyles.wrapper} setColor ${isLightTheme ? 'dark' : 'light'}`}>
                      <span className="cd-headline rotate-1">
                        <span className={`cd-words-wrapper ${showAnimation ? 'show-animation' : ''}`}>
                          <b className={`theme-gradient ${visibleIndex === 0 ? 'is-visible' : 'is-hidden'}`}>
                            CT Scans
                          </b>
                          <b className={`theme-gradient ${visibleIndex === 1 ? 'is-visible' : 'is-hidden'}`}>
                            MRI Scans
                          </b>
                          <b className={`theme-gradient ${visibleIndex === 2 ? 'is-visible' : 'is-hidden'}`}>
                            US Scans
                          </b>
                        </span>
                      </span>
                    </span>
                    <span style={{ marginLeft: "2rem" }}>With AI</span>
                  </div>
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
              <div className="slider-frame" style={{
                '@media (max-width: 767px)': {
                  margin: '0',
                  padding: '0 15px',
                  width: '100vw',
                  position: 'relative',
                  left: '50%',
                  right: '50%',
                  marginLeft: '-50vw',
                  marginRight: '-50vw'
                }
              }}>
                {renderCarouselContent()}
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
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.banner} banner-single-product`}>
                <div className={styles.bannerContent}>
                  <div className={styles.textContent}>
                    <h2>Now testing at Guy's & St Thomas' NHS Trust</h2>
                    <p>
                      Working in collaboration with the Centre for Innovation, Tranformation
                      and Improvement (CITI).
                    </p>
                  </div>
                  <div className={styles.logoContainer}>
                    <Image
                      src="/images/logo/gstt.png"
                      alt="Guy's and St Thomas' NHS Trust Logo"
                      width={180}
                      height={60}
                      objectFit="contain"
                    />
                    <Image
                      src="/images/logo/citi.png"
                      alt="CITI Logo"
                      width={180}
                      height={60}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
