import React, { useEffect, useState , useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductPage.css'
import {CartContext} from '../context/context'



export default function ProductPage() {
    useEffect(()=> {
        AOS.init({duration:2000});
      },[]);
    

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)
    const {state,dispatch} = useContext(CartContext)

    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)


        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

        setReview('')
        setratingStar(0)

    }


    const addToCart = () => {

        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        console.log(payload)
            localStorage.setItem('cart', JSON.stringify(payload))
      

        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])


    return (
        <div className="container">
            <div className="text-center my-5"  data-aos="fade-up-left">
                <h1>{product.title} - {product.price}$</h1>
                <p className="text-secondary">{product.description}</p>
                <div className='d-flex justify-content-center'>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={product.rating}
                        color2={'#ffd700'}
                    />
                </div>

                <div className="my-3">
                    <button className="btn btn-light mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                    {productQuantity}
                    <button className="btn btn-light mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                </div>

                <button className='buttonn' onClick={addToCart}> Add to Cart</button>

               


  </div>

            <div className="row" >
                <div className="col-md-6" data-aos="zoom-out-left">

                    {
                        product?.images?.length > 0 && <ImageSection images={product.images} />
                    }

                </div>


                <div className="col-md-6" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500">

                    <div className="container">
                        <div className='mb-5'>
                            <h2 className="text-center">Reviews Us</h2>
                            <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.</p>
                        </div>



                        <div>


                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>

                            <div className='mt-3'>

                                Rate Us :
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        color2={'#ffd700'}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>
                                </div>
                            </div>
                            <button className='button submit' id="buttonn" onClick={submitReview} >Submit review</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

                }