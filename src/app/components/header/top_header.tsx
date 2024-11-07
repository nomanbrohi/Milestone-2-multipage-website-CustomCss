export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-content">
        <p className="header-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="shop-now-button">
          Shop Now
        </button>
      </div>
      <div>
        <select className="language-select">
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
}
