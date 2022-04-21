fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc')
.then(res => res.json())
.then(data => console.log(data))

 