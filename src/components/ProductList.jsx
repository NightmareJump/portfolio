import './productList.css'
function ProductList(){
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Here are some interesting projects I did before
                </p>
            </div>
            <div className="pl-list">
                <iframe width="400" height="300"
                        src="https://www.youtube.com/embed/lQ3kmGDNDuo">
                </iframe>
                <iframe width="400" height="300"
                        src="https://www.youtube.com/embed/Rsi8BOIVOa8">
                </iframe>
                <iframe width="400" height="300"
                        src="https://www.youtube.com/embed/vEArmXr_NoQ">
                </iframe>
                <iframe width="400" height="300"
                        src="https://www.youtube.com/embed/E0mTpOKJgjw">
                </iframe>
                <p className="pl-p">To be continued</p>

            </div>
        </div>
    )
}
export default ProductList;
