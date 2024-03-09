import React from "react";

export default function ConfirmationPage() {
    localStorage.setItem("cartData", JSON.stringify([]));
    return (
        <div>
            <div class="container m-5">
                <div class="container text-center">
                    <h1>Thank you.</h1>
                    <p class="lead w-lg-50 mx-auto">Your order has been placed successfully.</p>
                    <p class="w-lg-50 mx-auto">Your order number is <a href="#">9237427634826</a>. We will immediatelly process your and it will be delivered in 2 - 5 business days.</p>
                </div>
            </div>
        </div>

    )
}