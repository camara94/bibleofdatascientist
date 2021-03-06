import React, { Component, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Collapse, Button } from 'reactstrap';



class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedCourse: null
        }
    }
    setIsOpen() {
        this.setState({isOpen: true});
    }
    toggle = () => this.setIsOpen(!this.state.isOpen);

    onCourseSelect(course) {
        this.setState({ selectedCourse: course});
    }

    renderCourse(course) {
        if (course != null)
            return(
                <div className="col-12 col-md-8 mt-3">
                        <Card>
                        <iframe width="auto" height="450" frameborder="1" src={course.linkiframe} allowfullscreen="allowfullscreen"></iframe>
                            <CardBody>
                                <CardTitle>{course.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
            const courses = this.props.courses.map((course, index)=>{
                return (
                    <div key={index} className="col-12 col-md-8 mt-3">
                        <Card>
                        <iframe width="auto" height="380" frameborder="1" src={course.linkiframe} allowfullscreen="allowfullscreen"></iframe>
                            <CardBody>
                                <CardTitle>{course.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                );
        });

        const titles = this.props.courses.map((course, index)=>{
            return (
               <li key={index} className="col-12 col-md-12 list-group-item form-control" 
               onClick={() => this.onCourseSelect(course)}>
                   {course.title}
                </li>
            );
        });
        return (
            <div className="container-fluid">
                <div className="row mx-auto">


                  <div className="col-12 col-md-4">
                    <Button color="primary" className="form-control mt-3" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Module I</Button>
                        <Collapse isOpen={this.state.isOpen}>
                            
                            <ul className="list-group">
                                {titles}
                            </ul>
                          
                        </Collapse>
                    </div>


                    {this.renderCourse(this.state.selectedCourse)}
                       
                </div>
                
            </div>
        );
    
    }
}

export default Course;