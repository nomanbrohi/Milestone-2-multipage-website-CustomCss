"use client";

import Image from "next/image";
import StarRating from "../StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section() {
  return (
    <>
      {/* flash Sale Section */}
      <section className="flex-container">
        <div className="full-width">
          <div className="flex-center-start">
            <div className="custom-rectangle"></div>
            <p className="custom-text">Today&apos;s</p>
          </div>
          <div className="custom-font-container">
            <div className="custom-width-container">
              <h1>Flash Sales</h1>
              <div className="custom-size-container">
                <div className="inner-custom-size-container">
                  <h6 className="custom-text-small">Days</h6>
                  <h2 className="custom-text-large">03</h2>
                </div>
                <p>:</p>

                <div className="inner-custom-size-container">
                  <h6 className="custom-text-small">Hours</h6>
                  <h2 className="custom-text-large">23</h2>
                </div>
                <p>:</p>

                <div className="inner-custom-size-container">
                  <h6 className="custom-text-small">Minutes</h6>
                  <h2 className="custom-text-large">19</h2>
                </div>
                <p>:</p>

                <div className="inner-custom-size-container">
                  <h6 className="custom-text-small">Seconds</h6>
                  <h2 className="custom-text-large">56</h2>
                </div>
              </div>
            </div>
            <div className="hidden lg:arrow-container">
              <Image
                className="Arrow-width Arrow-height"
                src="/images/left_Arrow.png"
                alt="Left Arrow"
                width={100}
                height={100}
              />
              <Image
                className="Arrow-width Arrow-height"
                src="/images/right_Arrow.png"
                alt="Right Arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="card-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation

            // autoplay={{
            //   delay: 1500, // Time in milliseconds between slides (3000ms = 3 seconds)
            //   disableOnInteraction: true, // Keeps autoplay active even after user interactions
            //   pauseOnMouseEnter: true
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
              // 1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[190px] h-[180px]"
                    src="/images/product_1.png"
                    alt=""
                    width={100}
                    height={0}
                  />
                  <p className="discount-price">-40</p>
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">HAVIT HV-G92 Gamepad</h1>
                <div className="price-container">
                  <p className="custom-text">$120</p>
                  <p className="price-box">$160</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[191px] h-[101px]"
                    src="/images/Keyboard.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="discount-price">-40</p>
                  <i className="favorite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">AK-900 Wired Keyboard</h1>
                <div className="price-container">
                  <p className="custom-text">$960</p>
                  <p className="price-box">$1160</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[190px] h-[180px]"
                    src="/images/LCD.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="discount-price">-40</p>
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">IPS LCD Gaming Monitor</h1>
                <div className="price-container">
                  <p className="custom-text">$370</p>
                  <p className="price-box">$400</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[107px] h-[180px]"
                    src="/images/Chair.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="discount-price">-40</p>
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">S-Series Comfort Chair</h1>
                <div className="price-container">
                  <p className="custom-text">$375</p>
                  <p className="price-box">$400</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="button-box">
          <button className="product-button"> View All Products</button>
        </div>
      </section>

      <section className="category-container">
        <div className="top-box">
          <div className="flex-center-start">
            <div className="custom-rectangle"></div>
            <p className="custom-text">Categories</p>
          </div>
          <div className="browse-container">
            <div className="heading-title-text">
              <h1>Browse By Category</h1>
            </div>
            <div className="arrow-container">
              <Image
                className="Arrow-width Arrow-height"
                src="/images/left_Arrow.png"
                alt="Left Arrow"
                width={100}
                height={100}
              />
              <Image
                className="Arrow-width Arrow-height"
                src="/images/right_Arrow.png"
                alt="Right Arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="category-items-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation

            // autoplay={{
            //   delay: 1500, // Time in milliseconds between slides (3000ms = 3 seconds)
            //   disableOnInteraction: true, // Keeps autoplay active even after user interactions
            //   pauseOnMouseEnter: true
            // }}
            breakpoints={{
              768: { slidesPerView: 6 },
              // 1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="category-item-box ">
                <Image
                  src="/images/Category-CellPhone.png"
                  alt="Category CellPhone"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>Phones</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="category-item-box pb-[24px] pt-[25px]">
                <Image
                  src="/images/Category-Computer.png"
                  alt="Category Computer"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>Computer</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="category-item-box ">
                <Image
                  src="/images/Category-Gamepad.png"
                  alt="Category Gamepad"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>Gaming</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="category-item-box ">
                <Image
                  src="/images/Category-Headphone.png"
                  alt="Category Headphones"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>HeadPhones</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="category-item-box ">
                <Image
                  src="/images/Category-SmartWatch.png"
                  alt="Category SmartWatch"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>SmartWatch</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="category-item-box ">
                <Image
                  src="/images/Category-SmartWatch.png"
                  alt="Category SmartWatch"
                  className="category-item-image"
                  width={56}
                  height={0}
                />
                <p>SmartWatch</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="best-selling-product-container">
        <div className="selling-top-box">
          <div className="flex-center-start">
            <div className="custom-rectangle"></div>
            <p className="custom-text">This Month</p>
          </div>
          <div className="custom-font-container">
            <div className="heading-title-text">
              <h1>Best Selling Products</h1>
            </div>
            <div className="selling-view-all-button">
              <button className="selling-product-button">View All</button>
            </div>
          </div>
        </div>

        <div className="card-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={3}
            slidesPerView={1}
            // navigation

            // autoplay={{
            //   delay: 1500, // Time in milliseconds between slides (3000ms = 3 seconds)
            //   disableOnInteraction: true, // Keeps autoplay active even after user interactions
            //   pauseOnMouseEnter: true
            // }}
            breakpoints={{
              768: { slidesPerView: 4 },
              // 1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[140px] h-[180px]"
                    src="/images/pink_dress.png"
                    alt="The north Coat"
                    width={100}
                    height={100}
                  />
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">The north coat</h1>
                <div className="price-container">
                  <p className="custom-text">$260</p>
                  <p className="price-box">$360</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[178px] h-[129px]"
                    src="/images/purse.png"
                    alt="Gucci duffle bag"
                    width={100}
                    height={100}
                  />
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">Gucci duffle bag</h1>
                <div className="price-container">
                  <p className="custom-text">$960</p>
                  <p className="price-box">$1160</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[191px] h-[130px]"
                    src="/images/gamingHeadphone.png"
                    alt="CPU Cooler"
                    width={100}
                    height={100}
                  />
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">RGB liquid CPU Cooler</h1>
                <div className="price-container">
                  <p className="custom-text">$160</p>
                  <p className="price-box">$170</p>
                </div>
                <StarRating />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-box">
                <div className="product-box">
                  <Image
                    className="m-auto pt-9 w-[140px] h-[180px]"
                    src="/images/table.png"
                    alt="Small BookSelf"
                    width={100}
                    height={100}
                  />
                  <i className="favourite-item bx bx-heart"></i>
                  <button className="cart-button">Add to Cart</button>
                </div>
                <h1 className="text-medium">Small BookSelf</h1>
                <p className="custom-text">$360</p>
                <StarRating />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="forth-section-container">
        <div className="forth-sec-box">
          <div className="first-heading">
            <h5 className="first-heading-color">Categories</h5>
          </div>
          <div className="inner-forthContainer">
            <div className="left-side">
              <h1 className="heading-text-4sec">
                Enhance Your Music Experience
              </h1>
              <div className="circle-main-container">
                <div className="circle-container">
                  <h6 className="hour-num">23</h6>
                  <p className="text-[11px]">Hours</p>
                </div>
                <div className="circle-container">
                  <h6 className="hour-num">05</h6>
                  <p className="text-xs">Days</p>
                </div>
                <div className="circle-container">
                  <h6 className="hour-num">59</h6>
                  <p className="text-xs">Minutes</p>
                </div>
                <div className="circle-container">
                  <h6 className="hour-num">35</h6>
                  <p className="text-xs">Seconds</p>
                </div>
              </div>
              <div>
                <button className="buy-now-button">Buy Now!</button>
              </div>
            </div>

            <div className="right-side-container">
              <div className="shadow-box"></div>
              <div className="image-box-2">
                <Image
                  src="/images/jbl-box.png"
                  alt="JBL"
                  height={330}
                  width={568}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-main-container">
        <div className="ourProductTopBox">
          <div className="flex-center-start">
            <div className="custom-rectangle"></div>
            <p className="custom-text">Featured</p>
          </div>
          <div className="custom-font-container">
            <div className="heading-title-text">
              <h1>New Arrival</h1>
            </div>
          </div>
        </div>

        <div className="ps5">
          <div className="ps5-inner-box">
            <Image
              src="/images/ps5.png"
              alt="ps5"
              height={511}
              width={511}
              className="ps5Image"
            ></Image>
            <div className="ps5-text-box">
              <h1 className="ps5-heading">PlayStation 5</h1>
              <p className="text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="ps5-button-text">Shop Now</button>
            </div>
          </div>

          <div className="lady-image-container">
            <Image
              src="/images/lady.png"
              alt="lady"
              width={429}
              height={286}
            ></Image>
            <div className="lady-image-text-box">
              <h1 className="ps5-heading">Women&apos;s Collections</h1>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="ps5-button-text">Shop Now</button>
            </div>
          </div>

          <div className="sp-per-grid">
            <div className="spperfume-inner-box">
              <Image
                src="/images/speaker.png"
                alt="Speaker"
                width={190}
                height={221}
              ></Image>
              <div className="sppertextbox">
                <h1 className="ps5-heading">Speakers</h1>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="ps5-button-text">Shop Now</button>
              </div>
            </div>
            <div className="spperfume-inner-box">
              <Image
                src="/images/perfume.png"
                alt="Speaker"
                width={201}
                height={203}
              ></Image>
              <div className="sppertextbox">
                <h1 className="ps5-heading">Perfume</h1>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="ps5-button-text">Shop Now</button>
              </div>
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
            <h3 className="last-heading">FREE AND FAST DELIVERY</h3>
            <p className="text-[11px]">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="lastSecboxes">
            <Image
              src="/images/services-1.png"
              alt="services-1"
              width={80}
              height={80}
            />
            <h3 className="last-heading">24/7 CUSTOMER SERVICE</h3>
            <p className="text-[11px]">Friendly 24/7 customer support</p>
          </div>
          <div className="lastSecboxes">
            <Image
              src="/images/Services-2.png"
              alt="services-2"
              width={80}
              height={80}
            />
            <h3 className="last-heading">MONEY BACK GUARANTEE</h3>
            <p className="text-[11px]">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </>
  );
}
