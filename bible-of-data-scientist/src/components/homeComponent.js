import React, { Component, Suspense } from 'react';
import { Card, CardBody , CardImg, CardHeader, CardText, CardTitle, CardSubtitle, ListGroup, ListGroupItem } from 'reactstrap';

const WhatIsDataScience = props => {
    return (
        <div className="row">
            <div className="col-12 mt-3">
                <h3>What is Data Science ?</h3>
                <hr />
            </div>   
            <p className="col-12">
                {props.datascience.whatisdatascience}
                <hr />
            </p>
        </div>
    )
}

const FiveStageLifeCycle = props => {
    const item = props.datascience.fivestagelifecycle.map((stage, index) => {
        return (
            <li key={index}>
                <span>{stage}</span>
            </li>
        );
    });
   return (
       <div className="row">
        <h3>Five Stage Life Cycle</h3>
        <Card className="col-12">
            <CardImg top width="100%" src={props.datascience.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">What is Data Science ?</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Five Stage Life Cycle</CardSubtitle>
                <CardText>
                    <ol type="I">
                        {item}
                    </ol>
                </CardText>
            </CardBody>
        </Card>
        <hr />
    </div>
   );
}

const DataScienceUses = props => {
    const item = props.datascience.datascienceuses.map((use, index) => {
    return (
        <ListGroupItem key={index}>
            <span>{use}</span>
        </ListGroupItem>
        );
    });
    return (
        <div className="row">
            <div className="col-12 mt-3">
                <h3>Data Science Uses Cases</h3>
                <hr />
            </div>   
            <p className="col-12">
                <ListGroup>
                    {item}
                </ListGroup>
                <hr />
            </p>
        </div>
    )
}

const Source = props => {
    const item = props.datascience.sources.map((source, index) => {
        return (
            <ListGroupItem key={index}>
                <a href={source} target="_blank">{source}</a>
            </ListGroupItem>
        )
    });
    return (
        <div className="row mb-2">
            <h3 className="col-12">Sources</h3>
            <ListGroup className="col-12 list">
                {item}
            </ListGroup>
        </div>
    );
}
 
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <div className="container">
                <WhatIsDataScience {...this.props} />
                <FiveStageLifeCycle {...this.props} />
                <DataScienceUses {...this.props} />
                <Source {...this.props} />
            </div>
        )
    }
}

export default Home;