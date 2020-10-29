import React from 'react'
import Field from '../Common/Field'
import {withFormik} from 'formik'
import * as Yup from 'yup'

const fields = {

    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*'}
        ]
    ]
}

class Contact extends React.Component {
   

    render() {
        return <React.Fragment>

<section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase p-2">Contact Me</h2>
                    <h3 className="section-subheading text-muted p-4">Thanks for visiting my online resume!</h3>
                </div>
                <form  name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                  
                    {fields.sections.map((section, sectionIndex) => {
                        return (
                            <div key ={sectionIndex} className="col-md-6">
                                {section.map((field,i) => {
                                    return <Field 
                                                {...field} 
                                                key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                                 />
                                })}
                            </div>
                        )
                    })}


                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                      
                        type="submit"
                     
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>



        </React.Fragment>
    }
}



export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    
    
    //with yup

    validationSchema: Yup.object().shape({

        name: Yup.string().min(3,'You name is longer than that!').required('You must give us your name'),
        email: Yup.string().email('You need to give us a valid email').required('We need your email'),
        phone: Yup.string()
        .min(10, 'Please provide your 10-digit phone number')
        .max(15, 'Your phone number is too long')
        .required('We need a phone number to reach you at.'),
        message: Yup.string().min(50, 'You need to provide us more detailed information')
        .required('Message is required - min 50 letters')

    }),


    //Submission not implemented
    //Gotta implement backend
    handleSubmit: (values, {setSubmitting}) => {
        alert("you have submitted the form", JSON.stringify(values))
    }


})(Contact)