import React from 'react'
import { useGetAllHospitalsQuery } from '../../services/hospApi'
import { Link } from 'react-router-dom';
function Home(){
    var {isLoading,data} = useGetAllHospitalsQuery()
    return(
        <div>
            <h1>Home</h1>
            {
                isLoading&& (<b>please wait...</b>)
            }
            <ul className='d-flex flex-wrap'>
            {
                !isLoading&&(
                    data.map((hospital)=>{
                        return <li className='w-25 border-3 p-2' style={{listStyle:'none'}}>
                            <h3 className="text-center">{hospital.hospitalName.toUpperCase()}</h3>
                            <img src={hospital.image} width='300px' className="" alt=''/>
                            <br/>
                            <li>
                                <b>Total Beds:{hospital.bed.length}</b>
                                <br/>
                                <Link to={`details/${hospital.id}`}>Details</Link>
                            </li>
                            </li>
                    })
                )
            }
            </ul>
        </div>
    )
}
export default Home