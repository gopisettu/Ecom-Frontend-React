import { useEffect, useState } from "react";
import axios from "axios";

function SellerProductList() {
    const [products, setProducts] =useState([]);
    const [selectedFiles, setSelectedFiles] = useState({});

    useEffect(() => {
        getAllProducts();
    }, []);

    // Fetch all seller products
    const getAllProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8080/api/seller/by-seller",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );

            setProducts(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    // Upload product image
    const uploadImage = async (productId) => {
        const file = selectedFiles[productId];

        if (!file) {
            alert("Please select an image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("pImage", file);

            const res = await axios.put(
                `http://localhost:8080/api/product/image/upload/${productId}`,
                formData,
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );

            alert("Image uploaded successfully!");
            console.log(res.data);

            // Refresh product list
            getAllProducts();

        } catch (err) {
            console.error("Upload failed:", err);
            alert("Failed to upload image.");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Seller Product List</h2>

            {products.length > 0 ? (
                <div className="row">
                    {products.map((p) => (
                        <div className="col-md-4 mb-4" key={p.id}>
                            <div
                                className="card h-100 shadow"
                                style={{ width: "18rem" }}
                            >
                                {p.imageUrl && (
    <img
        src={`/ProductImages/${p.imageUrl.split("\\").pop()}`}
        alt={p.title}
        className="card-img-top"
        style={{
            height: "220px",
            objectFit: "cover"
        }}
    />
)}

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {p.title}
                                    </h5>

                                    <p className="card-text">
                                        <strong>Price:</strong> ₹{p.price}
                                    </p>

                                    <p className="card-text">
                                        <strong>Seller:</strong>{" "}
                                        {p.sellerName}
                                    </p>

                                    <button className="btn btn-primary mb-3">
                                        View Details
                                    </button>

                                    <input
                                        type="file"
                                        className="form-control mb-2"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setSelectedFiles({
                                                ...selectedFiles,
                                                [p.id]: e.target.files[0],
                                            })
                                        }
                                    />

                                    <button
                                        className="btn btn-success w-100"
                                        onClick={() => uploadImage(p.id)}
                                    >
                                        Upload Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3>No products found for this seller.</h3>
            )}
        </div>
    );
}

export default SellerProductList;