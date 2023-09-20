import classNames from "classNames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section01")}>
                    <div className={cx("background")}></div>
                </div>
                <div className={cx("section04")}>
                    <div className={cx("section04-box")}>
                        <div className={cx("box")}>
                            <div className={cx("box01")}>
                                <div className={cx("img-box01")}>
                                    <img
                                        className={cx("img")}
                                        src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_1.png?v=670"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-box01")}>
                                    <a>Free ship đơn hàng trên 500k</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("box")}>
                            <div className={cx("box01")}>
                                <div className={cx("img-box01")}>
                                    <img
                                        className={cx("img")}
                                        src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_2.png?v=670"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-box01")}>
                                    <a>Free ship đơn hàng trên 500k</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("box")}>
                            <div className={cx("box01")}>
                                <div className={cx("img-box01")}>
                                    <img
                                        className={cx("img")}
                                        src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_3.png?v=670"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-box01")}>
                                    <a>Free ship đơn hàng trên 500k</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("product-catalog")}>
                    <div className={cx("title")}>
                        <a className={cx("title")} href="/">
                            {" "}
                            DANH MỤC SẢN PHẨM
                        </a>
                    </div>
                    <div className={cx("product-list")}>
                        <div className={cx("list-product")}>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>Áo Phông</a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/04/Tach-nen-APHTK422-Copy-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>Áo Polo</a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/02/Aso-polo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>
                                        Áo sơ mi dài
                                    </a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/01/anh6.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>Blazer</a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/01/anh4.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>
                                        Quần Jogger
                                    </a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/01/anh8.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>
                                        Quần Short
                                    </a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/02/Quan-short.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>
                                        Quần Jeans
                                    </a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/01/anh7.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("product-box01")}>
                                <div className={cx("text-product-box01")}>
                                    <a className={cx("text-box01")}>Quần Âu</a>
                                </div>
                                <div>
                                    <img
                                        className={cx("img-product")}
                                        src="https://360.com.vn/wp-content/uploads/2023/02/Quan-au.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section02")}>
                    <div className={cx("title")}>
                        <a className={cx("title")} href="/">
                            {" "}
                            SẢN PHẨM NHIỀU NGƯỜI MUA
                        </a>
                    </div>
                    <div className={cx("list-sanpham")}>
                        <div className={cx("production")}>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section02")}>
                    <div className={cx("title")}>
                        <a className={cx("title")} href="/">
                            {" "}
                            KHUYẾN MÃI HÔM NAY
                        </a>
                    </div>
                    <div className={cx("list-sanpham")}>
                        <div className={cx("production")}>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={cx("text-product")}
                                    href="/collection/product"
                                >
                                    <div className={cx("title-product")}>
                                        <a href="/collection/product">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className={cx("title")}>
                    <a className={cx("title")} href="/">
                        {" "}
                        BLOG BADBOY
                    </a>
                </div>
                <div className={cx("section03")}>
                    <div className={cx("product")}>
                        <div className={cx("product")}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
