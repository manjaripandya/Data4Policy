import React from "react";
import "../Common/common.css";
import Header from "../Common/Header";
import { BiX } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Table } from "reactstrap";
import undplogo from "../img/undp-logo.png";
import telenganalogo from "../img/telengana-logo.png";
import telenganaagri from "../img/telengana-agri.png";
import icrisat from "../img/icrisat.png";
import jads from "../img/jads.png";
import rich from "../img/rich.jpg";
import rockefeller from "../img/rockefeller.png";
import tilburg from "../img/tilburg.png";
import misteo from "../img/MistEO_Logo_Square.png";
import { connect } from "react-redux";
const mapStateToProps = (ReduxProps) => {
  return {
    Layers: ReduxProps.Layers,
  };
};
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <Header />
        </div>
        <div className="about-body">
          <div>
            <Row style={{ paddingBottom: "10px" }}>
              <Col>
                <h6 className="page-heading">About DiCRA</h6>
              </Col>
              <Col>
                <Link to="/">
                  <BiX className="page-close" />
                </Link>
              </Col>
            </Row>
            <hr />
            <div>
              <div class="container about-page">
                <Row>
                  {/* <h3 className="about-heading">About DiCRA</h3> */}
                  <Col className="about-content">
                    <p style={{ fontSize: "16px" }}>
                      Data in Climate Resilient Agriculture (DiCRA) is a
                      collaborative digital public good which provides open
                      access to key geospatial datasets pertinent to climate
                      resilient agriculture. These datasets are curated and
                      validated through collaborative efforts of hundreds of
                      data scientists and citizen scientists across the world.
                      The pattern detection and data insights emerging from
                      DiCRA are aimed towards strengthening evidence-driven
                      policy making for climate resilient food systems. DiCRA is
                      guided by the digital public good principles of open
                      access, open software, open code and open APIs.
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        fontSize: "18px",
                        paddingBottom: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Partners
                    </div>
                    <p style={{ fontSize: "16px" }}>
                      The platform is facilitated by Government of Telangana and
                      UNDP, in collaboration with Zero Huger Lab (Netherlands),
                      JADS (Netherlands), ICRISAT, PJTSAU, and RICH. It is part
                      of UNDP’s ‘Data for Policy’ initiative supported by
                      Rockefeller Foundation.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <ul className="org-logo">
                    <li className="org-logo-item">
                      <a href="https://www.undp.org/" target="_blank">
                        <img src={undplogo} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a href="https://www.telangana.gov.in/" target="_blank">
                        <img src={telenganalogo} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a href="https://www.pjtsau.edu.in/" target="_blank">
                        <img src={telenganaagri} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a href="https://www.icrisat.org/" target="_blank">
                        <img src={icrisat} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a href="https://www.jads.nl/" target="_blank">
                        <img src={jads} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a
                        href="http://www.rich.telangana.gov.in/team.html"
                        target="_blank"
                      >
                        <img src={rich} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a
                        href="https://www.rockefellerfoundation.org/"
                        target="_blank"
                      >
                        <img src={rockefeller} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a
                        href="https://www.tilburguniversity.edu/"
                        target="_blank"
                      >
                        <img src={tilburg} alt="" />
                      </a>
                    </li>
                    <li className="org-logo-item">
                      <a href="https://misteo.co/" target="_blank">
                        <img src={misteo} alt="" />
                      </a>
                    </li>
                  </ul>
                </Row>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      paddingBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Data Source
                  </div>
                  <Table
                    size="sm"
                    className="table-source"
                    style={{ textAlign: "left", fontSize: "16px" }}
                    bordered
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Desription</th>
                        <th>Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.Layers.map((data) => {
                        console.log("ABOUT LAYERS", data);
                        console.log("ABOUT LAYERS", data.layer_name);
                        return(
                        <tr>
                          <td>{data.layer_name}</td>
                          <td>
                           {data.long_description}
                          </td>
                          <td>{data.source}</td>
                        </tr>
                        )
                      })}
                        {/* <tr>
                          <td>NDVI</td>
                          <td>
                            Normalized Difference Vegetation Index (NDVI)
                            quantifies vegetation by measuring the difference
                            between near-infrared (which vegetation strongly
                            reflects) and red light (which vegetation absorbs)
                          </td>
                          <td>GLAM NDVIDB</td>
                        </tr>
                        <tr>
                          <td>RWI</td>
                          <td>
                            The Relative Wealth Index predicts the relative
                            standard of living within countries using privacy
                            protecting connectivity data, satellite imagery, and
                            other novel data sources.
                          </td>
                          <td>dataforgood.facebook.com</td>
                        </tr> */}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps)(About);
