import Image from "next/image";

export default function about() {
  return (
    <div>
      {/* <h1 className="w-full h-[120px] border-b-4">BreadCrumb</h1> */}
      <section className="section1-container">
        <div className="beforeInnerContainer">
          <div className="inner-container">
            <div className="inner-box1">
              <h1 className="story-heading">Our Story</h1>
              <p style={{ fontSize: "16px", fontFamily: "poppins" }}>
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <br />
              <p
                className="text-base font-poppins"
                style={{
                  fontSize: "16px",
                  fontFamily: "poppins",
                  color: "black",
                }}
              >
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="grid-second-box">
              <Image
                src="/images/aboutImages/aboutProfile.png"
                alt="About Profile Picture"
                width={1000}
                height={700}
                className="rounded-s-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2-container">
        <div className="sec2-inner-container">
          <div className="sec2-inner-boxes">
            <Image
              src="/images/aboutImages/about-services-4.png"
              alt="services-4"
              width={80}
              height={80}
              className="iconcolor mb-5"
            />
            <h3 className="text-[32px] font-bold">10.5k</h3>
            <p className="textBlack">Buyers active our site</p>
          </div>
          <div className="sec2-inner-boxes">
            <Image
              src="/images/aboutImages/about-services-3.png"
              alt="services-3"
              width={80}
              height={80}
              className="filter invert iconcolorWhite mb-5"
            />
            <h3 className="text-[32px] font-bold">33k</h3>
            <p className="textBlack">Monthly Product Sale</p>
          </div>
          <div className="sec2-inner-boxes">
            <Image
              src="/images/aboutImages/about-services-2.png"
              alt="services-2"
              width={80}
              height={80}
              className="iconcolor mb-5"
            />
            <h3 className="text-[32px] font-bold">45.5k</h3>
            <p className="textBlack">Customer active in our site</p>
          </div>
          <div className="sec2-inner-boxes">
            <Image
              src="/images/aboutImages/about-services-1.png"
              alt="services-1"
              width={80}
              height={80}
              className="iconcolor mb-5"
            />
            <h3 className="text-[32px] font-bold">25k</h3>
            <p className="textBlack">Annual gross sale in our site</p>
          </div>
        </div>
      </section>

      <section className="aboutthirdsection">
        <div className="aboutthirdinnersec">
          <div className="aboutThirdBoxes">
            <div className="aboutthirdboximg">
              <Image
                src="/images/aboutImages/tom.png"
                alt="services-4"
                width={236}
                height={391}
              />
            </div>
            <h3 className="aboutthirdsecboxtitle">Tom Cruise</h3>
            <p style={{fontSize: '16px'}}>Founder & Chairman</p>
            <div style={{display: 'flex', gap: '3px'}}>
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>

          <div className="aboutThirdBoxes">
            <div className="aboutthirdboximg">
              <Image
                src="/images/aboutImages/emma.png"
                alt="services-4"
                width={294}
                height={397}
              />
            </div>
            <h3 className="aboutthirdsecboxtitle">Emma Watson</h3>
            <p style={{fontSize: '16px'}}>Managing Director</p>
            <div style={{display: 'flex', gap: '3px'}}>
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>

          <div className="aboutThirdBoxes">
            <div className="aboutthirdboximg">
              <Image
                src="/images/aboutImages/will.png"
                alt="services-4"
                width={326}
                height={392}
              />
            </div>
            <h3 className="aboutthirdsecboxtitle">Will Smith</h3>
            <p style={{fontSize: '16px'}}>Product Designer</p>
            <div style={{display: 'flex', gap: '3px'}}>
              <i className="bx bxl-twitter text-xl"></i>
              <i className="bx bxl-instagram text-xl"></i>
              <i className="bx bxl-linkedin text-xl"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="last-section-container">
        <div className="last-sec-con-inner">
          <div className="lastSecboxes">
            <Image
              src="/images/services.png"
              alt="services"
              width={80}
              height={80}
            />
            <h3 className="last-heading">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-[11px]">Free delivery for all orders over $140</p>
          </div>
          <div className="lastSecboxes">
            <Image
              src="/images/services-1.png"
              alt="services-1"
              width={80}
              height={80}
            />
            <h3 className="last-heading">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-[11px]">Friendly 24/7 customer support</p>
          </div>
          <div className="lastSecboxes">
            <Image
              src="/images/Services-2.png"
              alt="services-2"
              width={80}
              height={80}
            />
            <h3 className="last-heading">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-[11px]">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}
