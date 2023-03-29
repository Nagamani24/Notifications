const Notification = (props) => {
  //  Write your code here.
  const { text, className, imageUrl } = props;
  return (
    <div className={`container ${className}`}>
      <img src={imageUrl} className="image" />
      <p className={className}>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Notifications</h1>
    <div className="container">
      <Notification
        text="Information Message"
        className="info-container"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        text="Success Message"
        className="success-container"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        text="Warning Message"
        className="warning-container"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        text="Error Message"
        className="danger-container"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
