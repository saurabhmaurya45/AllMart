import React from "react";
import { useState } from "react";

export default function Quantity(props) {
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    return (
        <>
            <div className="col-md-4 col-6 mb-3">
                <label className="mb-2 d-block">Quantity</label>
                <div className="input-group mb-3" style={{ width: "170px" }}>
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={()=>(setQuantity(quantity-1>0?quantity-1:1))}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <input type="text" className="form-control text-center border border-secondary" value={quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={()=>(setQuantity(quantity<props.stock?quantity+1:quantity))}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </>
    )
}