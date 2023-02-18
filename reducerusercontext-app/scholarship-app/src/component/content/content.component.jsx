import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list'
const ContentComponent = () => {
    const [file,setFile]=useState('');
    const [school,setSchool]=useState();
    const [school1,setSchool1]=useState();

    const [value,setValue]=useState(" ");
    const options=useMemo(()=>countryList().getData(),[])
    const [value1,setValue1]=useState(" ");
    const option=useMemo(()=>countryList().getData(),[])

    const ImageUpload=(e)=>{
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    const nationHandle=(e)=>{
        setValue(e)
    }
    const countryStudyHandle=(event)=>{
        setValue1(event)
    }
    
    return ( 
        <div className='content-container'>
            <form className='form-container'><br/>
                <div className='poto'>
                <label htmlFor='file'>Upload your Picture</label>
                <input type='file' alt='file' name='file' onChange={ImageUpload} /><br/>
                 <img  alt="picture" src={file}/>
                </div><br/>           
                <div>
                <label htmlFor='fname'> First Name</label>
                <input type='text' id='fname' name='fname'/><br/>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' id='lname' name='lname'/><br/>
                <label htmlFor='phone'>Contact</label>
                <input type='number' id='phone' name='phone'/><br/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email'/><br/>   
                </div>                
                                
                <div>
                <p> Have you completed the school?</p>
               
                <input type='radio' id='yes1' name='school' value='yes1' onChange={e=>setSchool(e.target.value)}/>Yes<br/>
                <input type='radio' id='no1' name='school' value='no1' onChange={e=>setSchool(e.target.value)}/>No<br/>
                </div>
               
             
                <div className='selet'>
                <p> What is your nationality ? </p>
                <Select options={options} value={value} onChange={nationHandle}/>
                <p> which country are you studying ?</p>
                <Select option={option} value={value1} onChange={countryStudyHandle}/>
                                </div>
                <p> What is the name of your university</p>
                <label htmlFor='uni'>Name Uni</label>
                <input type='text' id='uni' name='uni'/><br/>
                <p>Enter the name of your course </p>
                <label htmlFor='course'>Course Name</label>
                <input type='text' id='course' name='course'/><br/>
                <div>
                <p>Are you under scholarship ?</p>
                
                <input type='radio' id='under' name='school1' value='under' onChange={e=>setSchool1(e.target.value)}/>Yes<br/>
                
                <input type='radio' id='under1' name='school1' value='under1' onChange={e=>setSchool1(e.target.value)}/>No<br/>
              
                </div>
            
                <label htmlFor='scholar'> scholarship type </label>
                <input type='text' id='scholar' name='scholar'/><br/>
            
                <label htmlFor='intent'>SOP/Motivation</label>
                <input type='file' id='intent' name='intent'/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default ContentComponent;