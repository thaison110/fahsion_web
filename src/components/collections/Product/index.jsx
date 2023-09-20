import classNames from "classNames/bind";
import styles from "./Product.module.scss";
import Gallery from "../../../assets/Gallery/Index";
import { Carousel } from "react-carousel-minimal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const cx = classNames.bind(styles);

function Product() {
    const [count, setCount] = useState(0);
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: "San Francisco",
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland",
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco",
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland",
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling",
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco",
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland",
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling",
        },
    ];
    const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
    };
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("left")}>
                    <Gallery />
                </div>
                <div className={cx("right")}>
                    <div className={cx("right-text")}>
                        <div>
                            <p className={cx("title")}>Thắt Lưng Nam</p>
                            <div className={cx("right01")}>
                                <FontAwesomeIcon
                                    className={cx("start")}
                                    icon={faStar}
                                />
                                <FontAwesomeIcon
                                    className={cx("start")}
                                    icon={faStar}
                                />
                                <FontAwesomeIcon
                                    className={cx("start")}
                                    icon={faStar}
                                />
                                <FontAwesomeIcon
                                    className={cx("start")}
                                    icon={faStar}
                                />
                                <FontAwesomeIcon
                                    className={cx("start")}
                                    icon={faStar}
                                />
                                <h2 className={cx("Price")}>259.000 đ</h2>
                            </div>
                            <div>
                                <div className={cx("color")}>
                                    <div className={cx("text-color")}>
                                        <p>Màu Sắc:</p>
                                    </div>
                                    <div className={cx("color-img")}>
                                        <div className={cx("img")}>
                                            <img
                                                className={cx("image")}
                                                src="https://product.hstatic.net/200000201725/product/z4333105274362_cc3988a3eee03253cd66db24c51317b0_f546dc0d7ce84b8bac0cced9cf8b1257_grande.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("img")}>
                                            <img
                                                className={cx("image")}
                                                src="https://product.hstatic.net/200000201725/product/z4333105274362_cc3988a3eee03253cd66db24c51317b0_f546dc0d7ce84b8bac0cced9cf8b1257_grande.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("size")}>
                                    <div className={cx("text-color")}>
                                        <p>Size:</p>
                                    </div>
                                    <div className={cx("color-img")}>
                                        <div className={cx("img")}>
                                            <h2 className={cx("text")}>S</h2>
                                        </div>
                                        <div className={cx("img")}>
                                            <h2 className={cx("text")}>M</h2>
                                        </div>
                                        <div className={cx("img")}>
                                            <h2 className={cx("text")}>L</h2>
                                        </div>
                                        <div className={cx("img")}>
                                            <h2 className={cx("text")}>XL</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link>
                                    <a>Hướng dẫn kích thước</a>
                                </Link>
                                <div className={cx("color")}>
                                    <div className={cx("text-color")}>
                                        <p>Số Lượng:</p>
                                    </div>
                                    <div className={cx("count")}>
                                        <button
                                            className={cx("btn")}
                                            onClick={() => setCount(count + 1)}
                                        >
                                            Tăng
                                        </button>
                                        <button
                                            className={cx("btn")}
                                            onClick={() => setCount(count - 1)}
                                        >
                                            Giảm
                                        </button>
                                        <div className={cx("btn-count")}>
                                            <h3 className={cx("btn-count")}>
                                                {count}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("btn-end")}>
                                <button className={cx("btn-cart")}>
                                    Thêm vào giỏ hàng
                                </button>
                                <button className={cx("btn-buy")}>
                                    {" "}
                                    Mua ngay
                                </button>
                            </div>
                            <div className={cx("primary")}>
                                <div className={cx("content")}>
                                    <div className={cx("line-content")}>
                                        <div className={cx("img-primary")}>
                                            <img
                                                className={cx("img-content")}
                                                src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_1.png?v=670"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("text-content")}>
                                            <a>Miễn phí vận chuyển</a>
                                            <Link>(Tìm hiểu thêm)</Link>
                                        </div>
                                    </div>
                                    <div className={cx("line-content")}>
                                        <div className={cx("img-primary")}>
                                            <img
                                                className={cx("img-content")}
                                                src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_2.png?v=670"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("text-content")}>
                                            <a>Thanh toán ngay hoặc COD</a>
                                            <Link>(Tìm hiểu thêm)</Link>
                                        </div>
                                    </div>
                                    <div className={cx("line-content")}>
                                        <div className={cx("img-primary")}>
                                            <img
                                                className={cx("img-content")}
                                                src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_3.png?v=670"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("text-content")}>
                                            <a>Chính sách đổi trả</a>
                                            <Link>(Tìm hiểu thêm)</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
