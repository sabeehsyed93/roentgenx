import React, { useEffect } from "react";
import sal from "sal.js";
import Image from "next/image";

const projectMetrics = [
  {
    value: "85%",
    description: "Improved Patient Satisfaction",
    icon: "feather-heart"
  },
  {
    value: "60%",
    description: "More Efficient Resource Allocation",
    icon: "feather-trending-up"
  },
  {
    value: "30%",
    description: "Decrease in No-Shows",
    icon: "feather-user-check"
  }
];

const keyFeatures = [
  {
    title: "Smart Scheduling",
    description: "Intelligent algorithms that consider patient priority and resource availability",
    icon: "feather-calendar"
  },
  {
    title: "Natural Dialogue",
    description: "AI-powered voice assistant for human-like conversation",
    icon: "feather-message-circle"
  },
  {
    title: "NHS Integration",
    description: "Seamless integration with existing NHS systems",
    icon: "feather-git-merge"
  },
  {
    title: "Real-time Updates",
    description: "Instant availability and scheduling updates",
    icon: "feather-refresh-cw"
  }
];

const UpcomingProjects = () => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="rn-blog-details-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center" style={{
                padding: '40px 20px',
                marginBottom: '40px',
                marginTop: '2rem'
              }}>
                <h2 className="title" style={{
                  fontSize: '48px',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  color: '#7B61FF',
                  '@media (max-width: 767px)': {
                    fontSize: '32px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    padding: '0 10px'
                  }
                }}>
                  AI-Powered NHS Appointment Booking System
                </h2>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'center',
                  color: '#7B61FF',
                  '@media (max-width: 767px)': {
                    padding: '0 10px'
                  }
                }}>
                  <span>Development Phase</span>
                  <span>Expected Launch: Q1 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{
            '@media (max-width: 767px)': {
              margin: '0',
              padding: '20px'
            }
          }}>
            <div className="col-lg-12">
              <div className="project-details-content" data-sal="slide-up" data-sal-duration="400">
                <div className="section-title">
                  <h4 className="title" style={{ fontSize: '28px', marginBottom: '20px', color: '#7B61FF' }}>Project Overview</h4>
                  <p className="description mt--20" style={{ fontSize: '18px', lineHeight: '1.8', color: '#666666' }}>
                    We're developing a sophisticated AI voice assistant that will revolutionize how NHS appointments 
                    are booked and managed. Our system engages in natural, human-like dialogue with patients to 
                    understand their availability, preferences, and specific needs. The AI assistant can intelligently 
                    schedule appointments while considering factors like urgency, travel time, and hospital capacity. 
                    Beyond booking, it can clearly communicate important appointment information, verify patient 
                    understanding, and answer questions about preparation requirements or directions. This creates 
                    a more accessible, efficient, and patient-friendly booking experience.
                  </p>
                </div>

                <div className="section-title mt--50">
                  <h4 className="title" style={{ fontSize: '28px', marginBottom: '30px', color: '#7B61FF' }}>Key Features</h4>
                  <div className="row row--15 mt--20" style={{ gap: '30px 0' }}>
                    {keyFeatures.map((feature, index) => (
                      <div key={index} className="col-lg-6 col-md-6 col-12" data-sal="slide-up" data-sal-duration="400">
                        <div className="rn-service-box h-100" style={{ 
                          background: '#1B1B1B', 
                          borderRadius: '10px',
                          padding: '40px',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <div className="inner">
                            <div className="content" style={{ display: 'flex', alignItems: 'flex-start' }}>
                              <div style={{ 
                                backgroundColor: '#7B61FF',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '20px'
                              }}>
                                <i className={feature.icon} style={{ color: 'white', fontSize: '24px' }}></i>
                              </div>
                              <div>
                                <h3 className="title" style={{ fontSize: '24px', marginBottom: '10px', color: '#fff' }}>{feature.title}</h3>
                                <p className="description" style={{ fontSize: '16px', color: '#666666' }}>{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-title mt--50">
                  <h4 className="title" style={{ fontSize: '28px', marginBottom: '30px', color: '#7B61FF' }}>Expected Impact</h4>
                  <div className="row row--15 mt--20">
                    {projectMetrics.map((metric, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-12" style={{ marginBottom: '30px' }} data-sal="slide-up" data-sal-duration="700">
                        <div className="rn-service-box h-100" style={{ 
                          background: '#1B1B1B', 
                          borderRadius: '10px',
                          padding: '30px',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}>
                          <div className="inner">
                            <div className="content">
                              <div style={{ 
                                backgroundColor: '#7B61FF',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px'
                              }}>
                                <i className={metric.icon} style={{ color: 'white', fontSize: '24px' }}></i>
                              </div>
                              <h3 className="title" style={{ fontSize: '48px', color: '#7B61FF', marginBottom: '15px' }}>{metric.value}</h3>
                              <p className="description" style={{ fontSize: '18px', color: '#666666' }}>{metric.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual representation of the AI system */}
                <div className="section-title mt--50">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="rn-service-box" style={{ 
                        background: '#1B1B1B', 
                        borderRadius: '10px',
                        padding: '40px',
                        textAlign: 'center',
                        marginBottom: '80px'
                      }}>
                        <div className="flow-diagram" style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '20px',
                          margin: '40px auto',
                          maxWidth: '400px',
                          width: '100%',
                          padding: '0 10px'
                        }}>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            flex: '1'
                          }}>
                            <div style={{
                              backgroundColor: '#7B61FF',
                              borderRadius: '50%',
                              width: 'clamp(45px, 4vw, 70px)',
                              height: 'clamp(45px, 4vw, 70px)',
                              minWidth: 'clamp(45px, 4vw, 70px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <i className="feather-user" style={{ 
                                color: 'white', 
                                fontSize: 'clamp(20px, 2vw, 32px)'
                              }}></i>
                            </div>
                            <span style={{ 
                              color: 'white',
                              fontSize: 'clamp(14px, 1.5vw, 20px)',
                              textAlign: 'center',
                              whiteSpace: 'nowrap'
                            }}>Patient</span>
                          </div>

                          <i className="feather-arrow-right" style={{ 
                            color: '#7B61FF', 
                            fontSize: 'clamp(16px, 1.8vw, 28px)',
                            flexShrink: 0
                          }}></i>

                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            flex: '1'
                          }}>
                            <div style={{
                              backgroundColor: '#7B61FF',
                              borderRadius: '50%',
                              width: 'clamp(45px, 4vw, 70px)',
                              height: 'clamp(45px, 4vw, 70px)',
                              minWidth: 'clamp(45px, 4vw, 70px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <i className="feather-message-circle" style={{ 
                                color: 'white', 
                                fontSize: 'clamp(20px, 2vw, 32px)'
                              }}></i>
                            </div>
                            <span style={{ 
                              color: 'white',
                              fontSize: 'clamp(14px, 1.5vw, 20px)',
                              textAlign: 'center',
                              whiteSpace: 'nowrap'
                            }}>AI Assistant</span>
                          </div>

                          <i className="feather-arrow-right" style={{ 
                            color: '#7B61FF', 
                            fontSize: 'clamp(16px, 1.8vw, 28px)',
                            flexShrink: 0
                          }}></i>

                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            flex: '1'
                          }}>
                            <div style={{
                              backgroundColor: '#7B61FF',
                              borderRadius: '50%',
                              width: 'clamp(45px, 4vw, 70px)',
                              height: 'clamp(45px, 4vw, 70px)',
                              minWidth: 'clamp(45px, 4vw, 70px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <i className="feather-database" style={{ 
                                color: 'white', 
                                fontSize: 'clamp(20px, 2vw, 32px)'
                              }}></i>
                            </div>
                            <span style={{ 
                              color: 'white',
                              fontSize: 'clamp(14px, 1.5vw, 20px)',
                              textAlign: 'center',
                              whiteSpace: 'nowrap'
                            }}>NHS System</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default UpcomingProjects;
