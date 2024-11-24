export default function About() {
  return (
    <div className="container mt-5">
      {/* About Section Header */}
      <div className="row text-center mb-4">
        <div className="col">
          <h1>About Palestine</h1>
          <p className="lead">
          Palestine, located in the Eastern Mediterranean, is a region with a rich cultural and religious history. It has been a crossroads for civilizations for thousands of years, significant in Judaism, Christianity, and Islam. The ongoing Israeli-Palestinian conflict centers on territorial disputes, with Palestinians seeking statehood in the West Bank and Gaza. Peace efforts remain unresolved.
          </p>
        </div>
      </div>

      {/* Section for Image and Description */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://besacenter.org/wp-content/uploads/2024/01/shutterstock_2379572031-1536x898.jpg"
            alt="About Us"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <h3>Israel keeps stealing Palestinian land</h3>
          <p>
          Israel took control of Palestine through a series of events, starting with the 1947 UN partition plan, which proposed separate Jewish and Arab states. In 1948, Israel declared independence, leading to the Arab-Israeli War. After defeating neighboring Arab states, Israel expanded its territory, displacing many Palestinians.
          </p>
        </div>
      </div>

      {/* Section for Team or Core Values */}
      <div className="row mt-5">
        <div className="col">
          <h3>Our Core Values</h3>
          <ul className="list-group">
            <li className="list-group-item">Justice</li>
            <li className="list-group-item">Freedom</li>
            <li className="list-group-item">Human Rights</li>
            <li className="list-group-item">Peace</li>
          </ul>
        </div>
      </div>

      {/* Contact Section (optional) */}
      <div className="row mt-5 text-center">
        <div className="col">
          <h4>Contact Us</h4>
          <p>If you have any questions or need more information, feel free to reach out!</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
