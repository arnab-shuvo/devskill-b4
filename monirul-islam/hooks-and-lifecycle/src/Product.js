import {React,useState,useEffect} from 'react';
import ProductDetails from './ProductDetails';
import {Table} from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {BrowserRouter, Routes,Route,Link,Navigate } from 'react-router-dom';


  const Products=[
    {
    id: "1",
    name: "Dell",
    description: "Latitude 560",
    price: '100000',
    category: "Laptop",
    },
    {
        id: "2",
    name: "HP Probook",
    description: "Brand - HP, Ram: 8GB (8x1),Ram Type - DDR4",
    price: "60000",
    category: "Laptop",
    },
    {
        id: "3",
    name: "quartz",
    description: "Quartz Hand watch",
    price: "2000",
    category: "Watch",
    },
    
    ];
  
function ProductList(){

    const [product,setProduct] = useState([]);
    const [page,setPage] = useState("start");

      useEffect(async()=>{

          setProduct(Products);

     },[])
     const [isLoading,SetLoading]=useState(false);
     const fetchData=()=>{
        SetLoading(true);
        setTimeout(()=>{
            SetLoading(false);
        },3500)
     }

    return(
        <BrowserRouter>
        <div style={{width:"700px",paddingLeft:"300px"}}>
             <h3 style={{paddingLeft:"100px"}}>Product List</h3>
          
           <table style={{height:"10px"}}>

            <tr style={{flex: 5, backgroundColor: "Highlight",textColour:"blue" , height: "1px"}}>
             <th style={{paddingRight:"20px"}}>ID</th>
             <th style={{paddingRight:"20px"}}>NAME</th>
             <th style={{paddingRight:"20px"}}>PRICE</th>
             <th style={{paddingRight:"20px"}}>CATEGORY</th>
             <th style={{paddingRight:"20px"}}>EVENT</th>
            </tr>

            {
                product.map((item)=>

                    <tr >
                   
                    <td style={{paddingRight:"20px"}}>{item.id}</td>
                    <td style={{paddingRight:"20px"}}>{item.name}</td>
                    <td style={{paddingRight:"20px"}}>{item.price}</td>
                    <td style={{paddingRight:"20px"}}>{item.category}</td>
                    <Link to="/ProductDetails" state={{product:item}} className="Link" onClick={fetchData}> Details</Link>
                 
                    </tr>
                  
                )
            }
                      
         </table>

           {isLoading?<h3 style={{color: "Red"}}>Loading...</h3>:
           <Routes>
             
           <Route path='/ProductDetails' element={<ProductDetails/>}/>
        
        </Routes>

        }
       </div>
       
        </BrowserRouter>
    );
}

export default ProductList;

