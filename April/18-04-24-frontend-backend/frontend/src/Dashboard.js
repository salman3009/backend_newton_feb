
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard(){

    const [getProduct, setProduct] = useState([]);

    const navigate = useNavigate();
  
  useEffect(() => {
    initialAPI();
  }, [])

  const initialAPI = () => {
    axios.get('http://localhost:8080/api/v1/product').then((obj) => {
      console.log(obj.data.result);
      setProduct(obj.data.result);
    }).catch((err) => {
      console.log(err);
      navigate('/login');
    })
  }


    return (<div>
           <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            getProduct.map((obj, index) => {
              return (<tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{obj.productName}</td>
                <td>{obj.price}</td>
              </tr>)
            })
          }

        </tbody>
      </table>
    </div>)
}
export default Dashboard;