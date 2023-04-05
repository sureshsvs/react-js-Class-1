import * as React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import ServicesSection from './servicesSection';
export const Services = [
  {
    icon: 'fa-user-tie',
    serviceTitle: 'Master Chefs',
    Desc: ' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
  },
  {
    icon: 'fa-utensils',
    serviceTitle: 'Quality Food',
    Desc: '  Diam elitr kasd sed at elitr sed ipsum justo dolor sed  clita amet diam',
  },
  {
    icon: 'fa-cart-plus',
    serviceTitle: 'Online Order',
    Desc: '  Diam elitr kasd sed at elitr sed ipsum justo dolor sed  clita amet diam',
  },
  {
    icon: 'fa-headset',
    serviceTitle: '24/7 Service',
    Desc: '  Diam elitr kasd sed at elitr sed ipsum justo dolor sed  clita amet diam',
  },
  {
    icon: 'fa-headset',
    serviceTitle: '24/7 Service',
    Desc: '  Diam elitr kasd sed at elitr sed ipsum justo dolor sed  clita amet diam',
  },
];
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startServices: [],
    };
  }
  componentDidMount() {
    this.setState({ startServices: Services });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-xxl bg-white p-0">
          <NavBar />
          <Banner />
          <ServicesSection {...this.state} />
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
