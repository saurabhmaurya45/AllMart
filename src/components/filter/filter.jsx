import React, { useEffect, useState } from "react";
import "../../components/filter/filter.css";

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
export default function Filter({ setSelectedCategories, selectedCategories}) {
    const [allCategory, setAllCategory] = useState([]);

    const fetchAllCategory = async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        const data = await response.json();
        setAllCategory(data);
    }
    const handleCategoryChange = (categoryName) => {
        if (selectedCategories.includes(categoryName)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== categoryName));
        } else {
            setSelectedCategories([...selectedCategories, categoryName]);
        }
    };
    useEffect(() => {
        fetchAllCategory();
    }, [])
    
    return (
        <>
            <div className="filter " >
                <aside className="p-3 mx-2">
                    <h3 className="text-center">Filter </h3>
                    <div className="card mt-3">
                        <article className="card-group-item">
                            <header className="card-header">
                                <h6 className="title">Category </h6>
                            </header>
                            <div className="filter-content">
                                <div className="card-body">
                                <label className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="All"
                                            checked={selectedCategories.length === 0}
                                            onChange={() => {
                                                setSelectedCategories([]);
                                            }}
                                        />
                                        <span className="form-check-label">All</span>
                                    </label>
                                    {
                                        allCategory?.map((category) => {
                                            return (
                                                <label key={category.id} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={category}
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryChange(category)}
                                            />
                                            <span className="form-check-label">{titleCase(category)}</span>
                                        </label>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        </article>


                    </div>




                </aside>
            </div>
        </>
    )
}