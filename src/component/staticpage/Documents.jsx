export default function Documents() {
  return (
    <>
      <main className="container mt-5">
        {/* Section for Documents Page Title */}
        <div className="text-center">
          <h1 className="display-4">Documents Related to Palestine</h1>
          <p className="lead">
            Explore key documents, agreements, and reports that have shaped the history and future of Palestine.
          </p>
        </div>

        {/* Section for Document Categories */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="Historical Documents"
              />
              <div className="card-body">
                <h5 className="card-title">Historical Documents</h5>
                <p className="card-text">
                  Browse through key documents from Palestines rich history, including declarations, treaties, and official records.
                </p>
                <a href="#" className="btn btn-primary">View Documents</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="Peace Agreements"
              />
              <div className="card-body">
                <h5 className="card-title">Peace Agreements</h5>
                <p className="card-text">
                  Access various peace agreements and accords between Palestine and Israel, and their impact on the region.
                </p>
                <a href="#" className="btn btn-primary">View Documents</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jypU2mZ7jw2fgdeniDYRmaVxcX4Tg6AqEg&s"
                className="card-img-top"
                alt="International Reports"
              />
              <div className="card-body">
                <h5 className="card-title">International Reports</h5>
                <p className="card-text">
                  Explore reports from international organizations, including UN resolutions, human rights reports, and more.
                </p>
                <a href="#" className="btn btn-primary">View Documents</a>
              </div>
            </div>
          </div>
        </div>

        {/* Section for Table of Documents */}
        <div className="mt-5">
          <h3>Important Documents List</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Document Title</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Declaration of Palestinian Independence</td>
                <td>1988</td>
                <td>Historical</td>
                <td>
                  <a href="#" className="btn btn-success btn-sm">Download</a>
                </td>
              </tr>
              <tr>
                <td>Oslo Accords</td>
                <td>1993</td>
                <td>Peace Agreement</td>
                <td>
                  <a href="#" className="btn btn-success btn-sm">Download</a>
                </td>
              </tr>
              <tr>
                <td>UN Resolution 242</td>
                <td>1967</td>
                <td>International</td>
                <td>
                  <a href="#" className="btn btn-success btn-sm">Download</a>
                </td>
              </tr>
              <tr>
                <td>Report on Gaza Strip Human Rights</td>
                <td>2020</td>
                <td>International Report</td>
                <td>
                  <a href="#" className="btn btn-success btn-sm">Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section for Document Search */}
        <div className="mt-5">
          <h3>Search for Documents</h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by document title"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </main>
    </>
  );
}
