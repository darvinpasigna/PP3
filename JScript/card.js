const url = 'https://taobao-advanced.p.rapidapi.com/api?num_iid=646821454917&api=item_detail_new';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cd6f65bfa2mshe178319733a6760p1c7610jsnadd15834c753',
		'x-rapidapi-host': 'taobao-advanced.p.rapidapi.com'
	}
};



fetch(url, options).then(response => response.json() )
.then(response => {
    console.log(response);

         // Assuming data.result.images is an array of image URLs
         const imageContainer = document.getElementById('testing');
        
        //  Clear any existing content in the image container
         imageContainer.innerHTML = '';
         
        //  Loop through the images and create img elements to display them
         response.result.item.images.forEach(imageUrl => {
             const img = document.createElement('img');
             img.src = imageUrl;
             img.alt = 'Image'; // Add alt text if needed
             imageContainer.appendChild(img);
         });
         // Assuming response.item.properties is the array of properties
        const properties = response.result.item.properties;

        // Display the properties in a readable format
        const propertiesContainer = document.getElementById('price');

        // Clear any existing content in the container
        propertiesContainer.innerHTML = '';

        // Loop through the properties and create elements to display them
        properties.forEach(property => {
            const propertyElement = document.createElement('div');
            propertyElement.textContent = `${property.name}: ${property.value}`;
            propertiesContainer.appendChild(propertyElement);
        });
});