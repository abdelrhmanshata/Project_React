import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../api/config';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/slices/cart';


export default function ShowProduct() {

    const [product, setProducts] = useState({});
    const [productQuantatiy, setproductQuantatiy] = useState(1);
    const [myStock, setMyStock] = useState(8); // Initial stock

    const params = useParams();
    const [productImage, setProductImage] = useState([]);
    const dispatch = useDispatch();
    function increaseQuantity() {
        if (myStock > 0) {
            setproductQuantatiy(productQuantatiy + 1);
            setMyStock(myStock - 1);
        }
    }
    function decreaseQuantity() {
        if (productQuantatiy > 1) {
            setproductQuantatiy(productQuantatiy - 1);
            setMyStock(myStock + 1);

        }
    }

    function addProduct(item) {
        const pro = {
            id: item.id,
            image: item.thumbnail,
            title: item.title,
            brand: item.brand,
            price: item.price,
            quantity: productQuantatiy,
        };
        dispatch(addCart(pro));
    }
    useEffect(() => {
        getData();
    }, []);
    async function getData() {
        await axiosInstance
            .get(`${params.id}`)
            .then((res) => { setProducts(res.data); setProductImage(res.data.images) })
            .catch((err) => console.log(err));

    }
    // for calculating the estimated weeks to pay the money
    const divisor = product.price;
    const divident = Math.ceil(product.price * product.discountPercentage / 100);
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
                        <div className="row" >
                            <div className="col-md-3 mb-3" >
                                <Rating rating={product.rating} />
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div >
                                <h3>${product.price} or {Math.ceil(product.price * product.discountPercentage / 100)}/month</h3>
                                <p>suggessted payments with {Math.ceil(divisor / divident)} months special financing</p>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <p className="text-success rounded-pill text-light p-1 text-center" style={{ width: product.stock < 40 ? "110px" : "85px", backgroundColor: product.stock < 40 ? "red" : "green" }}> {product.stock < 40 ? "Out Of Stock" : "In Stock"}</p>

                            {/* {product.stock < 40 ? (
                                <p className="text-success rounded-pill text-light p-1 text-center" style={{ width: "110px", backgroundColor: "red" }}> Out Of Stock </p>

                            ) : (
                                <p className="text-success rounded-pill text-light p-1 text-center" style={{ width: "85px", backgroundColor: "green" }}>   In stock </p>
                            )} */}
                            <p>More Information</p>
                            {/* while clicking on the category it goes to the categories page in the specified category */}
                            <p className=" rounded-pill  p-1 text-center " style={{ backgroundColor: "#D3D3D3", width: "140px", whiteSpace: "nowrap" }}>{product.category}</p>
                            {/* while clicking on the brand it goes to the categories page in the specified category */}

                            <p className=" rounded-pill  p-1 text-center " style={{ backgroundColor: "#D3D3D3", marginLeft: "25px", width: "140px", whiteSpace: "nowrap" }}>{product.brand}</p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-3 g-2">
                                <div className="d-flex align-items-center rounded-pill  text-light p-1" style={{ backgroundColor: "#D3D3D3", width: "85px" }}>

                                    {product.stock < 40 ? (
                                        <div>
                                            {/* <p className="text-success" style={{ width: "110px", backgroundColor: "red" }}> This Item  Out Of Stock </p> */}
                                            <button type="button" className="btn btn-sm rounded-pill">-</button>
                                            <span className="mx-2" style={{ color: "black" }}>0</span>
                                            <button type="button" className="btn btn-sm rounded-pill" >+</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button type="button" className="btn btn-sm rounded-pill" onClick={() => { decreaseQuantity() }}>-</button>
                                            <span className="mx-2" style={{ color: "black" }}>{productQuantatiy}</span>
                                            <button type="button" className="btn btn-sm rounded-pill" onClick={() => { increaseQuantity() }}>+</button>
                                        </div>
                                    )}


                                </div>
                            </div>
                            <div className="col-md-9  g-2">
                                {product.stock < 40 ? (
                                    <div>
                                        <p>No Items Left!</p>

                                    </div>
                                ) : (
                                    <div>
                                        <p>Only {myStock} Items Left!<br />Don't miss it</p>
                                    </div>
                                )}
                            </div>
                            <hr />
                            <div className="row">
                                <div>
                                    <button type="button" className="btn btn-dark rounded-pill mr-2">Buy Now</button>
                                    {product.stock < 40 ? (
                                        <button type="button" className="btn btn-primary rounded-pill mr-2" style={{ marginLeft: "25px" }} disabled>Add To Cart</button>
                                    ) : (
                                        <button type="button" className="btn btn-primary rounded-pill mr-2" style={{ marginLeft: "25px" }} onClick={() => { addProduct(product) }}>Add To Cart</button>
                                    )}
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row ">
                    <div className="col-md-8">
                        <div className="row ">
                            <div className="col-md-2 g-4">
                                <img src={`${productImage[0]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${productImage[1]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${productImage[2]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                            <div className="col-md-2 g-4">
                                <img src={`${productImage[3]}`} alt="..." style={{ height: "100px", width: "100px" }} />
                            </div>
                        </div>

                    </div>


                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}
