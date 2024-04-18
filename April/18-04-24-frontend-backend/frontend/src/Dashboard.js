
import axios from 'axios';
import { useEffect, useState } from 'react';


function Dashboard(){

    const [getProduct, setProduct] = useState([]);
  
  useEffect(() => {
    initialAPI();
  }, [])

  const initialAPI = () => {
    axios.get('http://localhost:8080/api/v1/product').then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
      alert("internal server error");
    })
  }


    return (<div>
           <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stocks</th>
          </tr>
        </thead>
        <tbody>
          {
            getProduct.map((obj, index) => {
              return (<tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{obj.name}</td>
                <td>{obj.price}</td>
                <td>{obj.stocks}</td>
              </tr>)
            })
          }

        </tbody>
      </table>
    </div>)
}
export default Dashboard;