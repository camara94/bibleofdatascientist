import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

 
const RenderLeader = ({leader}) => {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading> {leader.name} </Media>
                <h6> {leader.designation} </h6>
                <p> {leader.description} </p>
            </Media>
        </Media>
    );
}

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Me</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Me</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>{props.about.description}</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">{props.about.firstname + ' ' + props.about.lastname}</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Email</dt>
                                <dd className="col-6">{props.about.emails[0]}</dd>
                                <dt className="col-6">Téléphone</dt>
                                <dd className="col-6">{props.about.telephones[0]}</dd>
                                <dt className="col-6">Téléphone</dt>
                                <dd className="col-6">{props.about.telephones[1]}</dd>
                                <dt className="col-6">Site Perso</dt>
                                <dd className="col-6"><a href={props.about.links.site}> {props.about.links.site}</a></dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">{props.about.proverbes[0]}</p>
                                <footer className="blockquote-footer">Aristote, Références de Aristote - Biographie de Aristote,
                                <cite title="Source Title"> Ajouter à mon carnet de citations</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;    