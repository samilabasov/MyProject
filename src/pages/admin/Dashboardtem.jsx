import React from 'react'
import { Link } from 'react-router-dom'

const Dashboardtem = ({title,id,desc,count,img}) => {
  return (
    <tr>
      <th scope="row">{count}</th>
      <td><img src={img} width='100' alt="" /></td>
      <td>{title}</td>
      <td>{`${desc.substr(0, 20)}...`}</td>
      <td><Link className="btn btn-warning" to={`edit/${id}`}>Edit</Link></td>
      <td></td>
    </tr>
  )
}

export default Dashboardtem