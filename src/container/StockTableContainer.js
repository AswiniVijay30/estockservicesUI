import { useEffect, useState } from 'react';
import { getStockDetailsByDate } from '../services/StockService';
function StockTableContainer(props){
   
    const [stockDetails, setStockDetails] = useState({});
   
    
    useEffect(() => {
        let mounted = true;
        getStockDetailsByDate(props.companyCode,props.startDate,props.endDate)
            .then(items => {
                if (mounted) {
                    console.log("effect call=>" + items)
                    setStockDetails(items.body)
                }
            })
        return () => mounted = false;
    }, [])
    
    return <div><table className='table table-bordered table-hover w-100 p-3'>
    <thead>
        <tr>
            <th scope="col">Stock Price</th>
            <th scope="col">Date </th>
            <th scope="col">Time</th>
        </tr>
    </thead>
    <tbody>
        {stockDetails.stockDetails.map(stock=><tr eventKey={stock.Id}><td>{stock.price}</td><td>`${stock.createdDate.getDate()}+"-"+${stock.createdDate.getMonth()}+"-"+${stock.createdDate.getYear()}`</td>
        <td>`${stock.createdDate.getHour()}+":"+${stock.createdDate.getMinutes()}+"-"+${stock.createdDate.getSeconds()}`</td>
        </tr>)}
    </tbody>
    </table>
    <table className='table table-bordered table-hover w-25 p-3'>
                            <tbody>
                               <tr><th scope="row">Average</th><th>{stockDetails.averageStock}</th></tr>
                               <tr><th scope="row">Minimum</th><th>{stockDetails.minimumStock}</th></tr>
                               <tr><th scope="row">Maximum</th><th>{stockDetails.maximumStock}</th></tr>
                            </tbody>
                        </table>
   
    </div>
    
    }
    export default StockTableContainer
