import Image from "next/image"

export default function Footer() {
  return (
    <div className="main-container">
      <div className="full-height-center">
        <div className="inner-box">
          <div className="boxes">
            <h1 className="logo">
              Exclusive
            </h1>
            <h2 className="logo-col-text">Subscribe</h2>
            <p className="text-base">
              Get 10% Off your First Order
            </p>
            <form className="text-white">
              <input type="email" placeholder="Enter Your Email" className="input-style"/>
              </form>
          </div>
          <div className="boxes-w200px ">
            <h1 className="support-text">Support</h1>
            <p style={{ fontSize: "16px", color: "white" }}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-base">nomanbrohi9@gmail.com</p>
            <p className="text-base">+92-346-2805603</p>
          </div>
          <div className="boxes">
            <h1 className="boxes-headings">Account</h1>
            <nav>
              <ul style={{display: "flex", flexDirection: 'column', gap:"0.75rem", fontSize: "16px", color:'white'}}>
                <li>My Account</li>
                <li>Login & Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </nav>
          </div>
          <div className="boxes">
            <h1 className="boxes-headings">Quick Link</h1>
            <nav>
              <ul style={{display: "flex", flexDirection: 'column', gap:"1rem", fontSize: "16px", color:'white' }}>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Faq</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="boxes">
            <h1 className="boxes-headings">Download App</h1>
            <div style={{display:'flex', flexDirection:'column', width:'198px', height:'110px', justifyContent:'space-between'}}>
            <p style={{fontSize:'0.75rem', color:'#FAFAFA'}}>
              Save $3 with App New User Only
            </p>
            <div className="barcode-container">
              <Image src="/images/qrCode.png" alt="" width={80} height={80}/>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <Image src="/images/appStore.png" alt="" width={110} height={40}/>
              <Image src="/images/googlePlayStore.png" alt="" width={110} height={40}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright 2022. All right reserved</p>
      </div>
    </div>
  );
}
