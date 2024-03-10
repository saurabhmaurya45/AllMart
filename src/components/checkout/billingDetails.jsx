import React from "react";
import "./checkout.css";
import PaymentInfo from "./paymentInfo";
import ShippingInfo from "./shippingInfo";
import BillingInfo from "./billingInfo";

export default function BillingDetails() {
    return (
        <div className="card">
            <div className="card-body">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                    <li className="checkout-item">
                        <div className="avatar checkout-icon p-1">
                            <div className="avatar-title rounded-circle bg-primary">
                                <i className="bx bxs-receipt text-white font-size-20"></i>
                            </div>
                        </div>
                        <div className="feed-item-list">
                            <BillingInfo />
                        </div>
                    </li>
                    <li className="checkout-item">
                        <div className="avatar checkout-icon p-1">
                            <div className="avatar-title rounded-circle bg-primary">
                                <i className="bx bxs-truck text-white font-size-20"></i>
                            </div>
                        </div>
                        <div className="feed-item-list">
                            <ShippingInfo />
                        </div>
                    </li>
                    <li className="checkout-item">
                        <div className="avatar checkout-icon p-1">
                            <div className="avatar-title rounded-circle bg-primary">
                                <i className="bx bxs-wallet-alt text-white font-size-20"></i>
                            </div>
                        </div>
                        <div className="feed-item-list">
                            <PaymentInfo />
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}