import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Resource extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-3">
                    <h3>Resources and Mini Project</h3>
                    <hr />
                </div>   
                <p className="col-12">
                You can find all the resources and mini-project of those two module on my Github repository here.<br />
                <h4>{this.props.courses.moduleone.title}</h4>
                <Button className="btn btn-social-icon" ><i className="fa fa-github"></i></Button>&nbsp;: <a href={this.props.courses.moduleone.resource} target="_blank">{this.props.courses.moduleone.resource}</a>

                <h4>{this.props.courses.moduletwo.title}</h4>
                <Button className="btn btn-social-icon" ><i className="fa fa-github"></i></Button>&nbsp;: <a href={this.props.courses.moduletwo.resource} target="_blank">{this.props.courses.moduletwo.resource}</a>
                </p>
                <p className="col-12">
                <h4>Kaggle</h4>
                Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners.
                <br /><a href={this.props.courses.moduletwo.resource} target="_blank">{this.props.courses.moduletwo.resource}</a>
                </p>
            </div>
        </div>
    );
  }
}

export default Resource;
