import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href={props.about.links.github} target="_blank"><i className="fa fa-github"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-codepen" href={props.about.links.codepen} target="_blank"><i className="fa fa-codepen"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-facebook" href={props.about.links.facebook} target="_blank"><i className="fa fa-facebook"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-linkedin" href={props.about.links.linkedin} target="_blank"><i className="fa fa-linkedin"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-twitter" href={props.about.links.twitter} target="_blank"><i className="fa fa-twitter"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-google" href={props.about.links.youtube} target="_blank"><i className="fa fa-youtube"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-globe" href="https://camaratek.com" target="_blank"><i className="fa fa-globe"></i></a>
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