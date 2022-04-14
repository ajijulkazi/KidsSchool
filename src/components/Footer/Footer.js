import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
   
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            
            <h5 className="title">STAY CONNECTED</h5>
            <p>
            welcome our KidsSchool.If you wanna know more, please click Icon.
            </p>
          </MDBCol>
          <MDBCol md="6">
          <section className='mb-4'>
          <Link to='/home' className="btn btn-outline-light btn-floating m-1"><MDBIcon fab icon='facebook' /></Link>
          <Link to='/contact' className='btn btn-outline-light  btn-floating m-1' ><MDBIcon fab icon='twitter' /></Link>
          <Link to='/contact' className='btn btn-outline-light  btn-floating m-1' ><MDBIcon fab icon='google' /></Link>
          <Link to='/contact' className='btn btn-outline-light  btn-floating m-1' ><MDBIcon fab icon='instagram' /></Link>
          <Link to='/contact' className='btn btn-outline-light  btn-floating m-1' ><MDBIcon fab icon='linkedin-in' /></Link>
          <Link to='/contact' className='btn btn-outline-light  btn-floating m-1' ><MDBIcon fab icon='github' /></Link>

        </section>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         All &copy; {new Date().getFullYear()} Copyright Reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;