import React from 'react'

class Field extends React.Component {
    render() {
        return <React.Fragment>

                <div className="form-group m-3">
                {this.props.elementName === 'input' ?
                    <input 
                            className="form-control" 
                            id={this.props.name}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            required="required" 
                            data-validation-required-message="Please enter your name." 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                    />
                    :
                    <textarea 
                                    className="form-control" 
                                    id={this.props.name}
                                    placeholder={this.props.placeholder}
                                    required="required" 
                                    data-validation-required-message="Please enter a message." 
                                    name={this.props.name}
                                    onChange={this.props.onChange}
                                    onBlur={this.props.onBlur}
                                    style={{
                                                height: 145
                                                
                                            }}
                                />
                }
                    <p className="help-block text-danger">
                        {(this.props.touched && this.props.errors) && 
                            <span>{this.props.errors}</span>
                        }
                    </p>
                </div>            

        </React.Fragment>
    }
}
export default Field