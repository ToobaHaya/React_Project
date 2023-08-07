import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css'
import { CartContext } from '../context/context'
import './Product.css'


export default function product() {

    const [products, setProducts] = useState([])
  

    const { state, dispatch } = useContext(CartContext)



    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => {
            setProducts(json.data.products);
            setLoader(false)
        })
    }, [])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    const addtoCart = (item) => {
        console.log(item)
        dispatch(
            {
                type: "ADD_TO_CART",
                payload: item
            }
        )

    }
    return (
        <>

            (
            <div className="hero">
                <div className="card text-bg-light text-wite" data-aos="zoom-in-up">
                    <img src="https://t3.ftcdn.net/jpg/05/35/13/82/360_F_535138292_62ZnI4Hcw37J8Jaeg4E9TzJwUciCwSnp.jpg" className="card-img " alt="background" height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container justify-item-center text-white" data-aos="zoom-out-left">
                            <h5 className="card-title display-4 fw-border mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text FS-2s">
                                CHECK OUT ALL THE TRENDS
                            </p></div>


                    </div>
                </div>

            </div>

          
                    
            <div className="container">
                <div className="col-12 mt-5 my-6">
                    <h1 className=' text-center'>Products</h1>

                </div>



                <div className="container mt-3" data-aos="fade-up">
                    <div className="row" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">

                        {
                            products.map((product, key) =>
                                <div className="col-md-4 mb-4 " key={key}>
                                    <Link to={`/products/${product.id}`} className='text-decoration-none'>
                                        <Card className='h-100 text-center p-4'>
                                            <Card.Img variant="top" src={product.thumbnail} height={"250px"} />
                                            <Card.Body>
                                                <Card.Title style={{ fontWeight: '1em'}} className='mb-0'>{product.title}</Card.Title>
                                                <Card.Text><strong>${product.price}</strong>
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>

                            )
                        }

                    </div>
                </div>
            </div>
            )

        </>
    )
}
