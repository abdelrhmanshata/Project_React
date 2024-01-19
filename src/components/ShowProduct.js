import Rating from 'react-rating-stars-component';
// import { axiosInstance } from '../apis/config';
import { useEffect, useState } from 'react';
// import axiosInstance from './axiosInstance';
import axios from 'axios';

export default function ShowProduct() {
    const [product, setProducts] = useState({});
    
    useEffect(() => {
        getData();
    }, []);
    async function getData() {
        await axios
            .get("https://dummyjson.com/products/1")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }
    //function to round the star and place its value 
    const renderStars = () => {
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 !== 0;

        const starsArray = [];
        for (let i = 0; i < fullStars; i++) {
            starsArray.push(<span key={i}>&#9733;</span>); // Full star Unicode character
        }

        if (halfStar) {
            starsArray.push(<span key="half">&#9734;&#9733;</span>); // Half star Unicode characters
        }

        return starsArray;
    };
    // for calculating the estimated weeks to pay the money
    const divisor = product.price;
    const divident = Math.ceil(product.price * product.discountPercentage/100);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`${product.thumbnail}`} alt="..." style={{ height: "600px", width: "600px" }} />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="row">
                            <div className="col-md-3">
                                <Rating
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={renderStars()}
                                />
                            </div>
                            <div className="col-md-9  g-2">
                                <p>(121)</p>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div >
                                <h3>${product.price} or {Math.ceil(product.price * product.discountPercentage/100)}/month</h3>
                                <p>suggessted payments with {Math.ceil(divisor/divident)} months special financing</p>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div >
                                {product.stock === 94 ? (
                                    <p className="text-success rounded-pill text-light p-1 text-center" style={{ width: "110px", backgroundColor: "red" }}> Out Of Stock </p>

                                ) : (
                                    <p className="text-success rounded-pill text-light p-1 text-center" style={{ width: "85px", backgroundColor: "green" }}>   In stock </p>
                                )}
                                <p>More Information</p>
                                {/* while clicking on the category it goes to the categories page in the specified category */}
                                <button type="button" className="btn rounded-pill " style={{ backgroundColor: "#D3D3D3" }}>Category</button>
                                {/* while clicking on the brand it goes to the categories page in the specified category */}

                                <button type="button" className="btn rounded-pill " style={{ backgroundColor: "#D3D3D3", marginLeft: "25px" }}>Brand</button>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 g-2">
                                <div className="d-flex align-items-center rounded-pill  text-light p-1" style={{ backgroundColor: "#D3D3D3", width: "85px" }}>
                                    <button type="button" className="btn btn-sm rounded-pill">-</button>
                                    <span className="mx-2" style={{ color: "black" }}>5</span>
                                    <button type="button" className="btn btn-sm rounded-pill">+</button>
                                </div>
                            </div>
                            <div className="col-md-9  g-2">
                                <p>Only 12 Items Left!<br />Don't miss it</p>
                            </div>
                            <hr />
                            <div className="row">
                                <div>
                                    <button type="button" className="btn btn-primary rounded-pill mr-2">Buy Now</button>
                                    <button type="button" className="btn btn-primary rounded-pill mr-2" style={{ marginLeft: "25px" }}>Add To Cart</button>
                                    <hr />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="row ">
                    <div className="col-md-8">
                        <div className="row ">
                                {console.log(product.images)}
                            {/* <div className="col-md-2 g-4">
                                <img src={`${product.images[0]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${product.images[1]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${product.images[2]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${product.images[3]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div> */}
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}
