import React , {useState} from 'react';
import './home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
  const optionsArr = [
    {
      title : "Users",
      link : "/users"
    },

    {
      title : "Positive-Negative",
      link : "/positive-negative"
    },

    {
      title : "Nadi",
      link : "/nadi"
    },

    {
      title : "Chakra",
      link : "/chakra"
    },

    {
      title : "Vaastu",
      link : "/vaastu"
    },

    {
      
        title : "Body Parts",
        link : "/body-parts"
      
    }, 
    {
      
      title : "Disease",
      link : "/diseases"
    
  }


  ]

  return (
    <div className='home'>

      <h1>Spandan Admin Panel</h1>
      <div className="container">

        {optionsArr.map(item=>{
          return (
            <>
            <Link style={{color:'inherit' , textDecoration:'none'}} to={`${item.link}`}>
              <div className='box' > 
                <h3>{item.title}</h3>
              </div>
            
            </Link>
            </>
          )
        })}
      </div>

    </div>
    
  )
}

export default Home