// const url = 'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'cd6f65bfa2mshe178319733a6760p1c7610jsnadd15834c753',
//         'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//     }
// };

// fetch(url, options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);

//         const imageContainer = document.getElementById('product1');

//         // Clear any existing content in the image container
//         imageContainer.innerHTML = '';

//         // Loop through the seller products and create img elements to display their photos
//         response.data.seller_products.forEach(product => {
//             const img = document.createElement('img');
//             img.src = product.product_photo;
//             img.alt = product.product_title; // Add alt text using product title
//             imageContainer.appendChild(img);
//         });
//     });

const url = 'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'cd6f65bfa2mshe178319733a6760p1c7610jsnadd15834c753',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        if (!response || !response.data.seller_products || response.data.seller_products.length === 0) {
            throw new Error('No products found in the response');
        }

        const imageContainer = document.getElementById('product1');

        // Clear any existing content in the image container
        imageContainer.innerHTML = '';

        // Access the first product in the seller_products array
        const firstProduct = response.data.seller_products[0];
        
        // Create an img element to display the product photo
        const img = document.createElement('img');
        img.src = firstProduct.product_photo;
        img.alt = firstProduct.product_title; // Add alt text using product title
        imageContainer.appendChild(img);
    })
