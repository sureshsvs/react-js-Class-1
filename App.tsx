import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customStyle.scss';
import './style.css';
import { Button } from 'reactstrap';
import Layout from './layout';
export default function App() {
  return (
    <div>
      <Layout/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
