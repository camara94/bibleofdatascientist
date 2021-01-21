import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                
                <div className="col-7 col-sm-5">
                    <h5>My Contact</h5>
                    <address>
		              <i className="fa fa-phone fa-lg"></i>: +216 56352275<br />
		              <i className="fa fa-fax fa-lg"></i>: +216 29352069<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:ldamaro98@gmail.com">
                         ldamaro98@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>&copy; Copyright {new Date().getFullYear()} the Bible Of Data Scientist</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;