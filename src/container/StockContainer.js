import { useEffect, useState } from 'react';
import { getCompany, getAllCompany } from '../services/StockService';
import {NavDropdown,FormControl,Form,Button,Nav,Navbar} from 'react-bootstrap';
import Header from '../components/Header';

function StockContainer(props){
const{setCompanyCode}=props;
const [companies, setCompanies] = useState([]);
const [companyDetails, setCompanyDetails] = useState({});
const [companySearch, setCompanySearch] = useState();

useEffect(() => {
    let mounted = true;
    getAllCompany()
        .then(items => {
            if (mounted) {
                console.log("effect call=>" + items)
                setCompanies(items.body)
            }
        })
    return () => mounted = false;
}, [])
const handleSubmit = () => {
    if (companySearch !== "") {
        getCompanyByCode(companySearch);
    } else {
        alert("Enter Company Name to Search")
    }

}
const handleChange = (event) => {
    if (event.target && event.target.name === "company") {
        setCompanySearch(event.target.value)
    }
    else {
        getCompanyByCode(event);
    }

}

const getCompanyByCode = (code) => {
    getCompany(code).then(res => {
        if (res && res.body) {
            setCompanyCode(res.body)
            setCompanyDetails(res.body)
        } else {
            setCompanyCode({})
            setCompanyDetails({})
            alert('No company found')
        }
    });

}
return <Navbar.Collapse id="basic-navbar-nav">
<Nav className="w-50">
<NavDropdown title="Companies" onSelect={handleChange} value={props.companyName}  id="basic-nav-dropdown">
 {companies.map(company=>
    <NavDropdown.Item name="dropdown" eventKey={company.companyCode}>{company.companyName}</NavDropdown.Item>)} 
</NavDropdown>
</Nav>
<Form inline>
<FormControl type="text" name="company" onChange={handleChange} value={props.companyCode} placeholder="Search by Company Code" className="mr-sm-2 w-25" />
<Button variant="outline-light" onClick={handleSubmit}>Search</Button>
</Form>
{Object.keys(companyDetails).length > 0 ?
    <div>
    <Header companyCode={companyDetails.companyCode} companyName={companyDetails.companyName} />
</div> : ''}
</Navbar.Collapse>


}
export default StockContainer;