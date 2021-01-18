import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    "week": 1,
                    "date": "9/30/2019",
                    "title": "WQU DS Module Introductory Video",
                    "link": "https://www.youtube.com/watch?v=QUQSY7pmuSQ&feature=youtu.be"
                },
                {
                    "week": 1,
                    "date": "10/01/2019",
                    "title": "1.1.1 Basic Programming and Variables",
                    "link": "https://www.youtube.com/watch?v=3phV29yvWO8&feature=youtu.be"
                },
                {
                    "week": 1,
                    "date": "10/02/2019",
                    "title": "1.1.2 Functions",
                    "link": "https://www.youtube.com/watch?v=SytwpgZ5k6U&feature=youtu.be"
                },
                {
                    "week": 1,
                    "date": "10/03/2019",
                    "title": "1.1.3 Logic & Conditional Expressions",
                    "link": "https://www.youtube.com/watch?v=CyjsNEFjLVk"
                },
                {
                    "week": 1,
                    "date": "10/04/2019",
                    "title": "1.1.4 Iteration & Conclusion",
                    "link": "https://www.youtube.com/watch?v=MIjqvWgfdq8"
                },
                {
                    "week": 1,
                    "date": "10/04/2019",
                    "title": "1.2.1 Data Structures (list)",
                    "link": "https://www.youtube.com/watch?v=GGhWL_r_CSE"
                },
                {
                    "week": 1,
                    "date": "10/04/2019",
                    "title": "1.2.2 Data Structures (tuple)",
                    "link": "https://www.youtube.com/watch?v=jDuGDuzGkyE"
                },
                {
                    "week": 1,
                    "date": "10/04/2019",
                    "title": "1.2.3 Data Structures (set)",
                    "link": "https://www.youtube.com/watch?v=b4odPCnUcwA"
                }
            ]
        }
    }

    render(){
        const courses = this.state.courses.map((course, index)=>{
            return (
                <div key={index} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src="./images/datascience1.jpg"/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{course.title}</Media>
                            <p>Date: {course.date} <br/>Week: {course.week}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <Media list>
                    {courses}
                </Media>
            </div>
        );
    }

}

export default Course;