import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboardtem from './Dashboardtem'
import dahhboarddata from '../../data/dashboarddata';
import { t } from 'i18next';

const Dashboard = props => {
  return (
    <div className='container mt-5'>
        <Link className='btn btn-primary' to='/add'>Add</Link>
        <table className="table">
  <thead>
     {dahhboarddata.dashboard.map((fd,i)=>(
    <tr>
       <th scope="col">{t(`${fd.number}`)}</th>
       <th scope="col">{t(`${fd.photo}`)}</th>
       <th scope="col">{t(`${fd.name}`)}</th>
       <th scope="col">{t(`${fd.information}`)}</th>
       <th scope="col">{t(`${fd.edit}`)}</th>
    </tr>
     ))}
  </thead>
  <tbody>
  {props.pvalue.map((a, i) => {
          return <Dashboardtem count={i+1}  key={i} {...a} />;
        })}
    
  </tbody>
</table>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      pvalue: state.actionreducer,
    };
  };

export default connect(mapStateToProps)(Dashboard)