import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaChevronDown, FaSearch, FaShoppingCart, FaCar, FaChevronRight } from 'react-icons/fa';
import bg_image_section_merge from '../src/assets/img/bg_image_section_merge.jpg';
import overall_parts from '../src/assets/img/overall_parts.png';
import overall_parts_2 from '../src/assets/img/overall_parts_2.png';
import parts1 from '../src/assets/img/parts1.png';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  let url = "";
  return (
    <div className="App">
      <Container fluid className="primary-custom">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col md={6}>
                  <a href={url} className="top_social_a"><FaFacebookF className="top_social" /></a>
                  <a href={url} className="top_social_a"><FaTwitter className="top_social" /></a>
                  <a href={url} className="top_social_a"><FaGooglePlusG className="top_social" /></a>
                  <a href={url} className="top_social_a"><FaInstagram className="top_social" /></a>
                </Col>
                <Col md={6}>
                  <ul className="links-list">
                    <li><a href={url}>Hello. Sign In </a></li>
                    <li><a href={url}>Order Status </a></li>
                    <li><a href={url}>Shipping </a></li>
                    <li><a href={url}>FAQ </a></li>
                    <li><a href={url}>Contact Us </a></li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <a href={url} className="logo_img"><img src={bg_image_section_merge} alt="bg_image_section_merge" className="img-fluid w-100" /></a>
        </Row>
      </Container>
      <Container fluid className="secondary-header">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col md={12}>
                  <ul className="main-nav-links">
                    <li><a href={url}>Home</a></li>
                    <li><a href={url}>Accessories</a></li>
                    <li><a href={url}>Motor Oil</a></li>
                    <li><a href={url}>Apparel <FaChevronDown /></a></li>
                    <li><a href={url}>Lifestyle <FaChevronDown /></a></li>
                    <li><a href={url}>Performance <FaChevronDown /></a></li>
                    <li><a href={url}>Parts Kits</a></li>
                    <li><a href={url}>Knowledge</a></li>
                    <li><a href={url} className="red_txt">Clearance</a></li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="search-header">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="actions-bar-module">
                    <div className="garage-search-bar-component">
                      <div className="garage-component search-car ">
                        <div className="garage-text-wrap"> <a href="javascript:;" className="garage-text flyout-select" data-flyout="garage_flyout"> 2019 Subaru Forester <FaChevronDown /> </a> </div>
                      </div>
                      <div className="search-bar-component">
                        <form action="/search" method="get" className="search-box">
                          <fieldset>
                            <legend className="sr-only">Search Bar 5</legend>
                            <div className="main-search-wrapper"> <input id="main_search_4" type="text" name="search_str" value="" placeholder="Part Number(s), Keywords, or VIN" title="Part Number(s), Keywords, or VIN" autocomplete="off" /> </div>
                            <button type="submit" className="button-start-search submit call-to-action-button"> <FaSearch /> <span className="sr-only">Search by Part Number(s), Keywords, or VIN</span> </button>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                    <div id="action_account">
                      <div className="content-wrap">
                        <strong className="design-text">Welcome!</strong> <button className="your-account gradient-button flyout-select" data-flyout="account-flyout">My Account <FaChevronDown /></button>
                      </div>
                    </div>
                    <div id="cart_column">
                      <div className="cart-component flyout-hover " id="cart_6" data-flyout="flyout_cart_6">
                        <a className="cart-button call-to-action-button flyout-select flyout-hover " href="/cart" data-flyout="cart-flyout">
                          <div className="cart-wrapper"> <span className="cart-icon"> <span className="cart-items "></span> <FaShoppingCart /> </span>   <span className="cart-text"> <strong>My Cart</strong> </span>   </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className="page-content">
        <div className="page-content-header">
          <Container>
            <Row>
              <Col md={12}>
                <div className="page-breadcrumbs">
                  <a className="link" href={url}>Home</a>
                  <FaChevronRight className="link-devider" />
                  <a className="link" href={url}>2019 Subaru Forester</a>
                  <FaChevronRight className="link-devider" />
                  <span className="current">Door &amp; Components</span>
                </div>
                <div className="page-title">
                  <h1 className="page-title-heading h1">Door & Components for 2019 Subaru Forester</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="page-content-inner">
          <Container>
            <Row>
              <Col md={3}>
                <div className="page-sidebar">
                  <div className="sidebar sidebar-1 sidebar-vehicle  odd">
                    <div className="sidebar-inner">
                      <div className="sidebar-inner-title">
                        <h6>VEHICLE</h6>
                      </div>
                      <div className="sidebar-inner-text">
                        <p>2019 Subaru Forester <a href={url}> <span><FaCar className="car_icon" /></span> Change Vehicle</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar sidebar-2 sidebar-category even">
                    <div className="sidebar-inner">
                      <div className="sidebar-inner-title">
                        <h5>Categories</h5>
                      </div>
                      <div className="sidebar-inner-text">
                        <ul>
                          <li><a href={url} className="cat-single">All</a></li>
                          <li><a href={url} className="cat-single active">Parts</a></li>
                          <li><a href={url} className="cat-single">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar sidebar-3 sidebar-category-parts  odd">
                    <div className="sidebar-inner">
                      <div className="sidebar-inner-text">
                        <ul>
                          <li className="cat-li">
                            <a href={url} className="cat-single">Automatic Transaxle</a>
                            <ul>
                              <li><a href={url} className="subcategory">Case &amp; Related Parts</a></li>
                              <li><a href={url} className="subcategory">Valve Body</a></li>
                            </ul>
                          </li>
                          <li className="cat-li">
                            <a href={url} className="cat-single">Automatic Transmission</a>
                            <ul>
                              <li><a href={url} className="subcategory">Case &amp; Related Parts</a></li>
                              <li><a href={url} className="subcategory">Valve Body</a></li>
                            </ul>
                          </li>
                          <li className="cat-li active">
                            <a href={url} className="cat-single active">Body</a>
                            <ul>
                              <li><a href={url} className="subcategory">Bumper &amp; Components - Front</a>
                              </li>
                              <li><a href={url} className="subcategory">Bumper &amp; Components - Rear</a>
                              </li>
                              <li><a href={url} className="subcategory active-cat">Door &amp; Components</a>
                              </li>
                              <li><a href={url} className="subcategory">Doors</a></li>
                            </ul>
                          </li>
                          <li className="cat-li">
                            <a href={url} className="cat-single">Body Hardware</a>
                            <ul>
                              <li><a href={url} className="subcategory">Case &amp; Related Parts</a></li>
                              <li><a href={url} className="subcategory">Valve Body</a></li>
                            </ul>
                          </li>
                          <li className="cat-li">
                            <a href={url} className="cat-single">Brakes</a>
                            <ul>
                              <li><a href={url} className="subcategory">Case &amp; Related Parts</a></li>
                              <li><a href={url} className="subcategory">Valve Body</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className="page-right-side-content">
                  <div className="oem-assemblies-module">
                    <div className="oem-assemblies-module-left">
                      <div className="oem-assemblies-module-left-inner">
                        <div className="assemblies-thumnail-main"><img src={overall_parts} alt="overall_parts" />
                        </div>
                      </div>
                    </div>
                    <div className="oem-assemblies-module-right">
                      <div className="oem-assemblies-module-right-inner">
                        <div className="assemblies-thumnails">
                          <div className="assemblies-thumnail assemblies-thumnail-1 active">
                            <a href={url}><img src={overall_parts} alt="overall_parts" /></a>
                          </div>
                          <div className="assemblies-thumnail assemblies-thumnail-2">
                            <a href={url}><img src={overall_parts_2} alt="overall_parts_2" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="all-parts-table-container">
                    <Row className="label-row">
                      <Col md={1} className="reference-code-col">No.</Col>
                      <Col md={2} className="product-image-col"></Col>
                      <Col md={5} className="product-details-col">Part # / Description</Col>
                      <Col md={4} className="add-to-cart-col">Price</Col>
                    </Row>
                    <Row className="catelog-row catelog-row-1" id="catelog-row-1">
                      <Col md={1} className="reference-code-col"><span>1</span></Col>
                      <Col md={2} className="product-image-col"><a href={url} className="product-image-link"><img src={parts1} /></a></Col>
                      <Col md={5} className="product-details-col">
                        <strong className="product-title"><a href={url}>Door Shell CANNOT BE SHIPPED/PICKUP ONLY</a></strong>
                        <div className="product-partnum"><a href={url}>60009SJ0419P</a></div>
                        <div className="product-more-info">
                          <p className="contextual_description">Door Shell, Right</p>
                          <p className="specific_description">Panel Complete Door. Fits Forester</p>
                        </div>
                      </Col>
                      <Col md={4} className="add-to-cart-col">
                        <div className="list-price"><span className="list-price-label"> MSRP </span> $800.00</div>
                        <div className="sale-price">$551.52</div>
                        <div className="part-purchase-button"><button type="submit" className="action-button place-order-button no-icon add-to-cart enabled ">Add to Cart</button></div>
                      </Col>
                    </Row>
                    <Row className="catelog-row catelog-row-2" id="catelog-row-2">
                      <Col md={1} className="reference-code-col"><span>2</span></Col>
                      <Col md={2} className="product-image-col"><a href={url} className="product-image-link"><img src={parts1} /></a></Col>
                      <Col md={5} className="product-details-col">
                        <strong className="product-title"><a href={url}>Door Shell CANNOT BE SHIPPED/PICKUP ONLY</a></strong>
                        <div className="product-partnum"><a href={url}>60009SJ0419P</a></div>
                        <div className="product-more-info">
                          <p className="contextual_description">Door Shell, Right</p>
                          <p className="specific_description">Panel Complete Door. Fits Forester</p>
                        </div>
                      </Col>
                      <Col md={4} className="add-to-cart-col">
                        <div className="list-price"><span className="list-price-label"> MSRP </span> $800.00</div>
                        <div className="sale-price">$551.52</div>
                        <div className="part-purchase-button"><button type="submit" className="action-button place-order-button no-icon add-to-cart enabled ">Add to Cart</button></div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
