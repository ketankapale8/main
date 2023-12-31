import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './nadi.scss';
import axios from 'axios'


const Nadi = () => {

  const [formData , setFormData] = useState({title : '', question: '', questionDesc : '', questionPic : null , option1Title: '', option1Input:null, option2Title: '', option2Input: null , option3Title: '', option3Input: null  })

  const handleSubmit = async () => {
    const url = "https://spandan-git-main-ketankapale8.vercel.app/api/v1/addnadi"
    //  await fetch(url,{
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // },
    // withCredentials: true
    // })
    axios.post(url , formData)

  }

  function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setFormData({...formData , questionPic : base64 })
  }

  const handleFileUpload1 = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setFormData({...formData , option1Input : base64 })
  }

  const handleFileUpload2 = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setFormData({...formData , option2Input : base64 })
  }

  const handleFileUpload3 = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setFormData({...formData , option3Input : base64 })
  }


  console.log(formData)

   return (
    <div className='form'>
      <h2>Nadi</h2>

      <div className="title">Heading</div>
      <textarea onChange={(e)=> setFormData({...formData  , title : e.target.value})}/>
      <div className="title">Question</div>
      <textarea onChange={(e)=> setFormData({...formData  , question : e.target.value})}/>
      <div className="title">Question Description</div>
      <textarea onChange={(e)=> setFormData({...formData  , questionDesc : e.target.value})}/>
      <div className="title">Question Picture</div>
      <input type="file"  style={{width : '180px' ,}} label="Image" name='myFile0' id='file-upload' accept='.jpeg, .png , .jpg' onChange={(e)=> handleFileUpload(e)} />
      <div className="answerContainer">
        <div className="box">
          <h5>Option 1</h5>
          <input placeholder='Option 1 title' onChange={(e)=> setFormData({...formData  , option1Title : e.target.value})} />
          <input type="file" label="Image" name='myFile' id='file-upload' accept='.jpeg, .png , .jpg'  style={{width : '180px' ,}}  onChange={(e)=> handleFileUpload1(e)} />

        </div>

        <div className="box">
          <h5>Option 2</h5>
          <input placeholder='Option 2 title' onChange={(e)=> setFormData({...formData  , option2Title : e.target.value})}/>
          <input type="file"  style={{width : '180px' ,}}  label="Image" name='myFile0' id='file-upload' accept='.jpeg, .png , .jpg'  onChange={(e)=> handleFileUpload2(e)} />


        </div>

        <div className="box">
          <h5>Option 3</h5>
          <input placeholder='Option 3 title' onChange={(e)=> setFormData({...formData  , option3Title : e.target.value})}/>
          <input type="file"  style={{width : '180px' ,}}  label="Image" name='myFile0' id='file-upload' accept='.jpeg, .png , .jpg'  onChange={(e)=> handleFileUpload3(e)} />


        </div>
        
      </div>

      <button className='submitBtn' type='button' onClick={()=>handleSubmit()}>Submit</button>
    <Link to="/">
      <button className='backbtn'>Home</button>
    </Link>


    </div>
  )
}

export default Nadi