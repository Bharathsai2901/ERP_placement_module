import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios';
import { saveAs } from 'file-saver';

const ref = React.createRef();
export default class Resume extends Component {
    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        const data = this.props.values;


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <form onSubmit={this.formSubmit}>
                <div className="card-body">

<h3 className="card-title">Personal Info</h3>
<hr />
</div>
<div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.name} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.email} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Github</label>
                            <input type="text" name="github" className="form-control" defaultValue={values.status === 1 ? '' : values.github} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Skills* (Separate each skill with a space and a comma)</label>
                            <input type="text" name="skills" className="form-control"  defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="edu1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_desc} onChange={handleChange} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification</label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} />
                        </div>
                        <div className="card-body">
                        <div className="card-body">

<h3 className="card-title">Projects</h3>
<hr />
</div>
<div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className=""></i>1</b></h3>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj1_title" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_title} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj1_link" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_desc} onChange={handleChange} required />
                        </div>
                    </div>

                    <br />

                    

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className=""></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj2_title" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_title} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj2_link" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_desc} onChange={handleChange} required />
                        </div>
                    </div>
                    <br />
                    <h3 className="card-title">Experience</h3>
                    <hr />
                    </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-12 text-left">
                                    <h3><b><i className=""></i>1</b></h3>
                                </div>
                                
                                <div className="col-lg-4 text-left">
                                    <label>Institute/Organisation*</label>
                                    <input type="text" name="exp1_org" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_org} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-4 text-left">
                                    <label>Position*</label>
                                    <input type="text" name="exp1_pos" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_pos} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-4 text-left">
                                    <label>Duration*</label>
                                    <input type="text" name="exp1_dur" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_dur} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-12 text-left">
                                    <label>Description*</label>
                                    <input type="text" name="exp1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_desc} onChange={handleChange} required />
                                </div>
                            </div>
        
                            <br/>
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-12 text-left">
                                    <h3><b><i className=""></i>2</b></h3>
                                    <hr/>
                                </div>
                                <div className="col-lg-4 text-left">
                                    <label>Institute/Organisation*</label>
                                    <input type="text" name="exp2_org" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_org} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-4 text-left">
                                    <label>Position*</label>
                                    <input type="text" name="exp2_pos" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_pos} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-4 text-left">
                                    <label>Duration*</label>
                                    <input type="text" name="exp2_dur" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_dur} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row col-lg-10 mx-auto">
                                <div className="col-lg-12 text-left">
                                    <label>Description*</label>
                                    <input type="text" name="exp2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_desc} onChange={handleChange} required />
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">

<h3 className="card-title">Extras</h3>
<hr />
</div>
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_1" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_1} onChange={handleChange} required />
                            <label htmlFor="extra_1">Languages</label>
                        </div>
                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_2" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_2} onChange={handleChange} required />
                            <label htmlFor="extra_2">Hobbies</label>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                            <label htmlFor="extra_3">Activity/Achievement</label>
                        </div>
                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                            <label htmlFor="extra_4">Activity/Achievement</label>
                        </div>
                    </div>
                    <br />

                    <div className="container text-center">
                    <Pdf targetRef={ref} filename="resume.pdf">
                    {({ toPdf }) => <button className="btn btn-info" onClick={toPdf}>Generate Pdf</button>}
                    </Pdf> 
                    <div ref={ref}>
                        Download
                    </div>
                    </div>
                    <br />
                </form>
            </div>

        )
    }
}

