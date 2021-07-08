import React, { Component } from 'react'

class StockTable extends Component {
    render() {
        return (
            
                <div>
                   
                    <div className="container">
                      
                    <h1>Stock Details</h1>
                    
                   
                        <table className='table table-bordered table-hover w-100 p-3'>
                            <thead>
                                <tr>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                            { /*Function call for the table body*/}
                            </tbody>


                        </table>
                        
                        
                        <table className='table table-bordered table-hover w-25 p-3'>
                            <tbody>
                               <tr><th scope="row">Average</th><th>Average Value</th></tr>
                               <tr><th scope="row">Minimum</th><th>Minimum Value</th></tr>
                               <tr><th scope="row">Maximum</th><th>Maximum Value</th></tr>
                            </tbody>
                        </table>
                        </div>
                    
                    
                </div>
            
        )
    }
}
export default StockTable;

