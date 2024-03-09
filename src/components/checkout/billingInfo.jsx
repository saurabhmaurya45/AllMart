import React from "react";


export default function BillingInfo() {

    return (
        <>
            <div>
                <h5 className="font-size-16 mb-1">Billing Info</h5>
                <p className="text-muted text-truncate mb-4">Enter Billing Address</p>
                <div className="mb-3">

                    <div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-name">Name</label>
                                    <input type="text" className="form-control" id="billing-name" placeholder="Enter name" required="required" name="billing-name" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                    <input type="email" className="form-control" id="billing-email-address" placeholder="Enter email" required="required" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-phone">Phone</label>
                                    <input type="number" className="form-control" id="billing-phone" placeholder="Enter Phone no." required="required" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="billing-address">Address</label>
                            <textarea className="form-control" id="billing-address" rows="3" placeholder="Enter full address" required="required"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                    <label className="form-label">Country</label>
                                    <select className="form-control form-select" title="Country" required="required">
                                        <option value="0">Select Country</option>
                                        <option value="AF">India</option>


                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                    <label className="form-label" htmlFor="billing-city">City</label>
                                    <input type="text" className="form-control" id="billing-city" placeholder="Enter City" required="required" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-0">
                                    <label className="form-label" htmlFor="zip-code">Zip / Postal code</label>
                                    <input type="text" className="form-control" id="zip-code" placeholder="Enter Postal code" required="required" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}