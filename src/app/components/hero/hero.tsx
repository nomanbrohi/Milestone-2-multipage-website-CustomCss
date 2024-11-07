import Image from "next/image";

export default function hero() {
  return (
    <div className="hero-main-container">
      <div className="hero-inner-container">
        <div className="sidebarContainer ">
          <div className="sidebarItemContainer">
            <ul className="textContent">
              <li>Woman&apos;s Fashion</li>
              <li>Men&apos;s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby&apos;s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
        </div>

        <div className="largeContentContainer">
          <div className="blackContentContainer">

            <div className="centeredFlexContainer">
              <div className="columnContainer">
                <div className="logoApple">
                  <Image
                    src="/images/apple_gray_logo_1.png"
                    alt="Apple Logo"
                    height={49}
                    width={40}
                  ></Image>
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="largeText">
                  Up to 10% off Voucher
                </h1>
                <button className="button-text">Shop Now</button>
              </div>
              <div className="content-img">
                <Image src="/images/hero_fram_01.png" alt="Hero Frame" width={496} height={344}></Image>
              </div>
            </div>

            <div className="radio-box ">
              <input type="radio" className="cursor-pointer "/>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
