import React, { Component } from 'react'

class CompanyAndDateInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Code:</b></div>
                <div className="w-50 p-3 h3" name="companyCode"><b>CC001</b></div>
                </div>
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Name:</b></div>
                <div className="w-50 p-3 h3" name="companyName"><b>Company 1</b></div>
                </div>
               
                <div class="row">
                <div className="col-sm">
                <label htmlFor="startDate" className="h4">From:</label>
                        <br />
                        <input className="form-control w-50"
                          name="startDate"
                          type="date"
                          /> 
                          </div>
                          <div className="col-sm">
                <label htmlFor="endDate" className="h4">To:</label>
                        <br />
                        <input className="form-control w-50"
                          name="endDate"
                          type="date"
                          /> 
                          </div>

                          </div>
                          
            </div>
        )
    }
}
export default CompanyAndDateInfo;
