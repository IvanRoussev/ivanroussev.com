function Certificate() {
  return (
    <div className="certificates">
      <h3>Certificates</h3>
      <div className="certificates-container">
        <img className="aws-logo" src={aws} alt="AWS Logo" />
        <div className="cert-info">
          <h4>Certified Cloud Practitioner</h4>
          <button className="cert-button">
            <a
              href="https://www.credly.com/badges/6144fc56-ef0e-4da1-af6d-7025732199f7/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
