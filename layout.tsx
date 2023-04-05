import * as React from 'react';
import NavBar from './navbar';
import Banner from './banner';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-xxl bg-white p-0">
          <NavBar />
          <Banner/>
         
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
