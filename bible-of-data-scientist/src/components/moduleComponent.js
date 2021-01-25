import React, { Component } from 'react';

import { Card, CardBody, CardTitle, Collapse, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';



class Module extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedCourse: null,
            currentPage: 1,
            coursePerPage: 8
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    

    setIsOpen(v) {
        this.setState({isOpen: v});
    }
    toggle = () => this.setIsOpen(!this.state.isOpen);

    onCourseSelect(course) {
        this.setState({ selectedCourse: course});
    }

    SingleCourse(course, singleCourse){
        if (singleCourse == null) 
            return (
                <div className="col-12 col-md-9 mt-3">
                    <Card>
                        <iframe width="auto" height="450" frameborder="1" src={course.linkiframe} allowfullscreen="allowfullscreen"></iframe>
                        <CardBody>
                            <CardTitle>{course.title}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            ) ;
        else
            return (<div></div>);
    }

    renderCourse(course) {
        if (course != null)
            return(
                <div className="col-12 col-md-9 mt-3">
                        <Card>
                        <iframe width="auto" height="500" frameborder="1" src={course.linkiframe} allowfullscreen="allowfullscreen"></iframe>
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
        const {isOpen, selectedCourse , currentPage, coursePerPage } = this.state;
        // Logic for displaying todos
        const indexOfLastCourse = currentPage * coursePerPage;
        const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
        const currentCourse = this.props.courses.courses.slice(indexOfFirstCourse, indexOfLastCourse);

        const renderCourse = currentCourse.map((course, index) => {
            return (
                <li id="video" key={index} className="col-12 col-md-12 list-group-item form-control" 
               onClick={() => this.onCourseSelect(course)}>
                   {course.title}
                </li>)
            }
        );

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.courses.courses.length / coursePerPage); i++) {
            pageNumbers.push(i);
        }
    
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
              style={{
                  listStyleType:'none',
                   display: 'inline-block', 
                   width: '25px', 
                   background: 'gainsboro', 
                   margin: '2px',
                   textAlign: 'center',
                   borderRadius: '5px',
                }}
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
              
            );
          });
      

        const courses = this.props.courses.courses.map((course, index)=>{
                return (
                    <div key={index} className="col-12 col-md-9 mt-3">
                        <Card>
                        <iframe width="auto" height="500" frameborder="1" src={course.linkiframe} allowfullscreen="allowfullscreen"></iframe>
                            <CardBody>
                                <CardTitle>{course.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                );
        });

        var coursInter = [];
        for(let i = this.state.initalI; i < this.state.count; i++)
           coursInter[i] = this.props.courses.courses[i];

        const titles = coursInter.map((course, index)=>{
            return (
                <li id="video" key={index} className="col-12 col-md-12 list-group-item form-control" 
               onClick={() => this.onCourseSelect(course)}>
                   {course.title}
                </li>
            );
        });

        


        return (
            <div className="container-fluid">
                <div className="row mx-auto">


                  <div className="col-12 col-md-3">
                    <Button color="primary" className="form-control mt-3" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.courses.title}</Button>
                        <Collapse isOpen={this.state.isOpen}>
                          
                            <ul className="list-group">
                                {renderCourse}
                            </ul>
                            <ul>
                                {renderPageNumbers}
                            </ul>
                            
              
            
                        </Collapse>
                    </div>


                    {this.renderCourse(this.state.selectedCourse)}
                    {this.SingleCourse(this.props.courses.courses[0], this.state.selectedCourse)}
                       
                </div>
                
            </div>
        );
    
    }
}

export default Module;