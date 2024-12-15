import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Sal from "sal.js";

const teamMembers = [
  {
    name: "Hassan Ahmad",
    role: "Co-Founder",
    qualifications: [
      {
        degree: "B.SC Biomedical Engineering and Medical Physics",
        institution: "University College London"
      },
      {
        degree: "M.B.B.S.",
        institution: "University College London"
      }
    ],
    bio: "Hassan is a radiology registrar at Watford Hospital, having graduated with distinction and merits from University College London. He has extensive experience running a large-volume online business with international suppliers, showcasing his expertise in managing complex operations. In addition to his strong background in Python programming, Hassan is proficient in Flutter and web design, making him a versatile full-stack developer. His diverse skill set and experiences drive his passion for integrating technology into healthcare, aiming to enhance efficiency and patient care in radiology.",
    image: "/images/about-us/hassan.jpg",
    linkedin: "https://www.linkedin.com/in/hassanmahmood/"
  },
  {
    name: "Sabeeh Syed",
    role: "Co-Founder",
    qualifications: [
      {
        degree: "B.SC Biomedical Engineering and Medical Physics",
        institution: "University College London"
      },
      {
        degree: "M.B.B.S.",
        institution: "University College London"
      }
    ],
    bio: "Sabeeh is a radiology registrar at Guy's and St Thomas' NHS Foundation Trust in London, having graduated with distinction and merits from University College London. He has a strong background in Python programming and project management. His professional journey includes a national leadership role in an international charity and founding a tech charity dedicated to 3D printing prosthetics for children in developing countries. These diverse experiences have fueled his passion for leveraging technology to improve healthcare, driving him to innovate solutions that enhance efficiency and patient care in radiology.",
    image: "/images/about-us/sabeeh.jpg",
    linkedin: "https://www.linkedin.com/in/sabeehm/"
  }
];

const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Sal();
    }
  }, []);

  return (
    <>
      <div className="rn-about-area rn-section-gap" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--50" data-sal="slide-up" data-sal-duration="700">
                <h4 className="subtitle" style={{ fontSize: '32px', marginBottom: '30px' }}>
                  <span className="theme-gradient">Our Mission</span>
                </h4>
                <p className="description mt--20" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  At RoentgenX, we are driven by the belief that AI will revolutionize radiology and transform the efficiency of healthcare delivery. Our mission is to leverage AI to minimize administrative burdens and maximize operational efficiency in radiological practices.
                </p>
                <p className="description mt--20" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Today, we are developing innovative AI-driven products designed to streamline radiology workflows, including our flagship product, VetBot, which uses AI to vet and protocol scans. By incorporating AI into these critical processes, we aim to reduce manual workload, enhance accuracy, and expedite patient care. But this is just the beginning. In the future, our AI technology will enable radiologists and healthcare professionals to make precise, data-driven decisions, elevating the practice of radiology to new heights.
                </p>
                <p className="description mt--20" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  We are also working on developing a sophisticated AI system that can efficiently call patients to book scans, reducing the waste of resources caused by missed appointments. As we advance in our mission, we remain committed to our vision that AI has the power to transform healthcare for the better.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="section-title text-center" data-sal="slide-up" data-sal-duration="700">
                <h4 className="subtitle" style={{ fontSize: '32px', marginBottom: '40px' }}>
                  <span className="theme-gradient">Meet Our Team</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="row row--15 mt--30">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12" data-sal="slide-up" data-sal-duration="700">
                <div className="rn-team-wrapper" style={{ 
                  background: '#1B1B1B', 
                  borderRadius: '10px',
                  padding: '30px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div className="inner" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div className="thumbnail" style={{ 
                      width: '100%',
                      aspectRatio: '1/1',
                      position: 'relative',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      marginBottom: '30px'
                    }}>
                      <Image 
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{
                          objectFit: 'cover',
                          filter: 'grayscale(100%)'
                        }}
                      />
                    </div>
                    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h2 className="title" style={{ fontSize: '56px', marginBottom: '15px', fontWeight: '600' }}>{member.name}</h2>
                      <h6 className="subtitle" style={{ color: '#7B61FF', marginBottom: '30px', fontSize: '24px' }}>{member.role}</h6>
                      
                      {member.qualifications.map((qual, idx) => (
                        <div key={idx} className="mb--15">
                          <h6 className="degree" style={{ fontSize: '18px', fontWeight: '500' }}>{qual.degree}</h6>
                          <p className="institution" style={{ color: '#666666', fontSize: '16px' }}>{qual.institution}</p>
                        </div>
                      ))}

                      <p className="description mt--20" style={{ 
                        color: '#666666', 
                        lineHeight: '1.8',
                        flex: 1,
                        marginBottom: '30px',
                        fontSize: '16px'
                      }}>
                        {member.bio}
                      </p>
                      
                      <div style={{ marginTop: 'auto' }}>
                        <Link 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            backgroundColor: '#7B61FF',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '500',
                            transition: 'background-color 0.3s ease'
                          }}
                        >
                          Connect on LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
