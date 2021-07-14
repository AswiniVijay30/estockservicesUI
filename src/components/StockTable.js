import StockTableContainer from '../container/StockTableContainer'
function StockTable (props){
    
        return (
            
                <div>
                   
                    <div className="container">
                      
                    <h1>Stock Details</h1>
                    
                    <StockTableContainer
                               companyCode={props.companyCode}
                               companyName={props.companyName}
                               startDate={props.startDate}
                               endDate={props.endDate}/>
                        
                        </div>
                    
                    
                </div>
            
        )
    }

export default StockTable;

