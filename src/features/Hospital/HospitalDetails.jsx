import React from 'react';
import { useParams } from 'react-router-dom';
import {  useGetHospitalDetailsByIdQuery,useGetAllHospitalsQuery, useGetHospitalsDetailsByidQuery } from '../../services/hospApi'
import _from 'lodash';
function HospitalDetails(){
    var p = useParams();
    var {isLoading,data} = useGetHospitalDetailsByIdQuery(p.id);
    var [beds,setBeds]=useState(null)
    //var x = useGetHospitalsDetailsByidQuery(p.id)
    //console.log(x)
    var {isLoading,data} = useGetAllHospitalsQuery()
    console.log(isLoading)
    console.log(data)
    return(
        <div>
            <h1>HospitalDetails</h1>
             {
                isLoading && ("please wait")

            }
            {
                !isLoading && data.map((hospital)=>{
                    return (
                    <div className='border'>
                        <h4>{hospital.hospitalName}</h4>
                    </div>
                    )

                })
            }
        </div>
    )
}
export default HospitalDetails;