const element = (
  <div className="main-container">
    <h1 className="greet-head">Congratualtions</h1>
    <div className="details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-pic"
      />
      <p className="name">Kiran V</p>
      <p className="institute">
        Vishnu institure of computer education and technalogy, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-pic"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
