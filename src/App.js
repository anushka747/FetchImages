import React, { useState } from 'react'
import axios from 'axios' 
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=tDi3JczqvCAb_oC8w77X28Nut3L1Kt5vLmd54gNvZkk`)
            .then((response) => {
               
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <input type="text" placeholder='Search Anything...' className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container" >
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                          
                            <div class="col-lg-3 col-md-4 col-6" style={{padding:30}}>
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100"  src={value.urls.small} alt='' />
                                    <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                      
                                      <div style={{fontWeight:'bold', fontSize:18}}>{value.user.name}</div>
                                      <div> {value.likes}❤️</div>
                                    

                                    </div>
                            </div>
                          
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App
