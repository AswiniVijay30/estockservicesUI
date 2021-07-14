import React, { Component } from 'react'
import StockTable from './StockTable';


class CompanyAndDateInfo extends Component {
    constructor(props) {
      super(props);
        this.state =
        {
            startDate: new Date(), endDate: new Date()
        };
        this.handleChange=this.handleChange.bind(this);
    }

      handleChange(event) {
        console.log(event);
        this.setState({ [event.target.name]: event.target.value })
    
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Code:</b></div>
                <div className="w-50 p-3 h3" name="companyCode"><b>{this.props.companyCode}</b></div>
                </div>
                <div className="row">
                <div className="w-50 p-3 h3"><b>Company Name:</b></div>
                <div className="w-50 p-3 h3" name="companyName"><b>{this.props.companyName}</b></div>
                </div>
               
                <div class="row">
                <div className="col-sm">
                <label htmlFor="startDate" className="h4">From:</label>
                        <br />
                        <input className="form-control w-50"
                          name="startDate"
                          value={this.state.startDate}
                          onChange={this.handleChange}
                          type="date"
                          /> 
                          </div>
                          <div className="col-sm">
                <label htmlFor="endDate" className="h4">To:</label>
                        <br />
                        <input className="form-control w-50"
                          name="endDate"
                          value={this.state.endDate}
                          onChange={this.handleChange}
                          type="date"
                          /> 
                          </div>

                          </div>
                <StockTable companyCode={this.props.companyCode} companyName={this.props.companyName} startDate={this.state.startDate} endDate={this.state.endDate}/>
            </div>
           
          
        )
    }
}

export default CompanyAndDateInfo;
