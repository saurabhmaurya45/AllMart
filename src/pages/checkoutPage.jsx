import React from "react";
import { Link } from "react-router-dom";
import BillingDetails from "../components/checkout/billingDetails";
import OrderSummary from "../components/checkout/orderSummary";


export default function CheckoutPage() {



    return (
        <>

            <form method="get" action="/confirmation">
                <div className="container checkout mt-5">
                    <div className="row">
                        <div className="col-xl-8 mb-3">
                            <BillingDetails />
                            <div class="row my-4">
                                <div class="col">
                                    <Link to={"/shop"} class="btn btn-link text-muted">
                                        <i class="mdi mdi-arrow-left me-1"></i> Continue Shopping
                                    </Link>
                                </div>
                                <div class="col">
                                    <div class="text-end mt-2 mt-sm-0">
                                        <button class="btn btn-success" id="form-submit" type="submit"> <i class="mdi mdi-cart-outline me-1"></i> Procced </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}