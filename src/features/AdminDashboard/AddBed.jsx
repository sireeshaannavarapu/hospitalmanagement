import React,{useState} from "react"
import { useAddBedsMutation, useGetAllHospitalsQuery } from "../../services/hospApi"
function AddBed(){
    debugger
    var [bedCount,setBedCount]=useState(0);
    var [bedPrice,setBedPrice]=useState(0);
    var [selectedBedType,setSelectedBedType]=useState('');
    var {isLoading:isHospitalsLoading,data:hospitals}=useGetAllHospitalsQuery();
    var [addBedsToDB] = useAddBedsMutation();
    var [selectedHospital,setSelectedHospital]=useState(null);

    // function updateBedTypes(hn){
    //     var selectedHospitalDetails = JSON.parse(hn);

    //     setBedTypes(selectedHospitalDetails.bedTypes);
    //     setSelectedHospitalId(selectedHospitalDetails.Id)
    // }
    function saveBed(){
    var newbeds = [];
    var numBeds=selectedHospital.beds.filter(b=>b.bedtype===selectedBedType).length;
    for(var i=0;i<=bedCount-1;i++){
        var newBed={
            bedStatus:"open",
            bedtype:selectedBedType,
            bedPrice,
            patients:[],
            bedId:`${selectedBedType+(numBeds+i+1)}`


        }
        newbeds.push(newBed);
    }
    var latestHospitalDetails={...selectedHospital,beds:[...selectedHospital.bed,...newbeds]};
    console.log("beds along with selected hospital",latestHospitalDetails);
    
    setSelectedHospital({...selectedHospital,beds:[...selectedHospital.bed,...newbeds]});
    console.log(selectedHospital);

    setSelectedHospital({...selectedHospital,beds:[...selectedHospital.bed,...newbeds]})
     addBedsToDB(latestHospitalDetails);
     console.log(addBedsToDB);
    }
    return(
        <div className="border border-2 border-info m-2 p-2">
          <h1>AddBed</h1>
          <>
          {
            isHospitalsLoading && (<b>...wait</b>)
          }
          {
            !isHospitalsLoading && <select onChange={(e)=>{setSelectedHospital(JSON.parse(e.target.value))}}>
                    <option value={null} disabled selected>Please select</option>
                    {
                        hospitals.map((hospital)=>{
                            return <option value={JSON.stringify(hospital)}>{hospital.hospitalName}</option>
                        })
                    }
                </select>
                
            
                }<br/><br />
                </>
           {
             selectedHospital && selectedHospital.bedTypes.length>0 &&(
                <>
                <select onChange={(e)=>{setSelectedBedType(e.target.value)}}>
                    <option value={null}>please Selected</option>
                    {
                     selectedHospital.bedTypes.map((bt)=>{
                        return <option value={bt.bedType}>{bt.bedType}</option>   
                   })}
                </select>
                <br/> 
         <input type="number"  placeholder="Enter Bed Count" onChange={(e)=>{setBedCount(e.target.value)}}/>
         <br/>
         <input type="number"  placeholder="Enter Bed price" onChange={(e)=>{setBedPrice(e.target.value)}}/>
         <br/>
         </>
              )}
              <br/>
              <button onClick={()=>{saveBed()}}>save Beds</button>
    
        </div>
    )
 }

export default AddBed