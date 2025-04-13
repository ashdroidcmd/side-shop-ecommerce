// src/components/UploadProducts.jsx
import React, { useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const UploadProducts = () => {
  const productsData = {
    // "cpu": {
    //     "cpu1": {
    //         "id": "cpu1",
    //         "name": "Intel Core i9-13900K",
    //         "brand": "Intel",
    //         "price": 589.99,
    //         "stock": 15,
    //         "image": "url_to_image",
    //         "specs": {
    //             "cores": 24,
    //             "threads": 32,
    //             "baseClock": "3.0GHz",
    //             "boostClock": "5.8GHz",
    //             "tdp": "125W",
    //             "socket": "LGA1700"
    //         }
    //     },
    //     "cpu2": {
    //         "id": "cpu2",
    //         "name": "AMD Ryzen 9 7950X",
    //         "brand": "AMD",
    //         "price": 549.99,
    //         "stock": 12,
    //         "image": "url_to_image",
    //         "specs": {
    //             "cores": 16,
    //             "threads": 32,
    //             "baseClock": "4.5GHz",
    //             "boostClock": "5.7GHz",
    //             "tdp": "170W",
    //             "socket": "AM5"
    //         }
    //     }
    // },
    // "gpu": {
    //     "gpu1": {
    //         "id": "gpu1",
    //         "name": "NVIDIA GeForce RTX 4080",
    //         "brand": "NVIDIA",
    //         "price": 1199.99,
    //         "stock": 8,
    //         "image": "url_to_image",
    //         "specs": {
    //             "vram": "16GB GDDR6X",
    //             "coreClock": "2.2GHz",
    //             "ports": ["HDMI", "DisplayPort"],
    //             "power": "320W"
    //         }
    //     },
    //     "gpu2": {
    //         "id": "gpu2",
    //         "name": "AMD Radeon RX 7900 XTX",
    //         "brand": "AMD",
    //         "price": 999.99,
    //         "stock": 10,
    //         "image": "url_to_image",
    //         "specs": {
    //             "vram": "24GB GDDR6",
    //             "coreClock": "2.3GHz",
    //             "ports": ["HDMI", "DisplayPort"],
    //             "power": "355W"
    //         }
    //     },
    //     "gpu3": {
    //       "id": "gpu3",
    //       "name": "Intel Arc A770",
    //       "brand": "Intel",
    //       "price": 349.99,
    //       "stock": 20,
    //       "image": "url_to_image",
    //       "specs": {
    //         "vram": "16GB GDDR6",
    //         "coreClock": "2.1GHz",
    //         "ports": ["HDMI", "DisplayPort"],
    //         "power": "225W"
    //       }
    //     }
    // },
    // "mobo": {
    //     "mobo1": {
    //         "id": "mobo1",
    //         "name": "ASUS ROG Strix Z790-E",
    //         "brand": "ASUS",
    //         "price": 399.99,
    //         "stock": 10,
    //         "image": "url_to_image",
    //         "specs": {
    //             "chipset": "Z790",
    //             "formFactor": "ATX",
    //             "socket": "LGA1700",
    //             "ramSupport": "DDR5",
    //             "maxRam": "128GB"
    //         }
    //     }
    //   },
    //   "ram": {
    //     "ram1": {
    //       "id": "ram1",
    //       "name": "Corsair Vengeance DDR5 32GB",
    //       "brand": "Corsair",
    //       "price": 169.99,
    //       "stock": 25,
    //       "image": "url_to_image",
    //       "specs": {
    //         "type": "DDR5",
    //         "capacity": "32GB (2x16GB)",
    //         "speed": "6000MHz",
    //         "voltage": "1.35V"
    //       }
    //     }
    //   },
    //   "storage": {
    //     "storage1": {
    //       "id": "storage1",
    //       "name": "Samsung 980 Pro 1TB NVMe",
    //       "brand": "Samsung",
    //       "price": 129.99,
    //       "stock": 18,
    //       "image": "url_to_image",
    //       "specs": {
    //         "type": "NVMe SSD",
    //         "capacity": "1TB",
    //         "interface": "PCIe Gen4",
    //         "readSpeed": "7000MB/s",
    //         "writeSpeed": "5000MB/s"
    //       }
    //     }
    //   }
    // }

  useEffect(() => {
    const uploadProducts = async () => {
      for (const category in productsData) {
        const categoryItems = productsData[category];
        for (const id in categoryItems) {
          const product = categoryItems[id];
          product.category = category;
          try {
            await setDoc(doc(db, "products", product.id), product);
            console.log(`✅ Uploaded ${product.name}`);
          } catch (error) {
            console.error(`❌ Error uploading ${product.name}:`, error);
          }
        }
      }
    };

    uploadProducts();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Uploading Products...</h2>
      <p className="text-gray-600">Check console for upload logs</p>
    </div>
  );
};

export default UploadProducts;
