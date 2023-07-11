import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CategoriesSection() {
  useEffect(()=> {
    AOS.init({duration:2000});
  },[]);


  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <div className="container">
      <div className="my-5 text-center" data-aos="fade-up-left">
        <h1>Categories</h1>
        <p className='text-secondary' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-4 my-3" key={key} data-aos="fade-up"
            data-aos-duration="3000">
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card>
                  <Card.Body>
                  <Card.Img variant="top" src={val.thumbnail}/>
                    <Card.Title>{val.replace('-', ' ')}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
