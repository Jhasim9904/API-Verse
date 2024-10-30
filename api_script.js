// Sample data for APIs (replace with your actual data source)
const apiData = [
    { name: "OpenWeather", url: "https://api.openweathermap.org", description: "Provides weather data for locations worldwide.", category: "Weather" },
    { name: "Alpha Vantage", url: "https://www.alphavantage.co", description: "Financial data for stock market analysis.", category: "Finance" },
    { name: "SportDB", url: "https://www.thesportsdb.com", description: "Sports data including leagues, teams, and players.", category: "Sports" },
    { name: "HealthAPI", url: "https://health.api.com", description: "API for health-related information.", category: "Health" }
];

// Function to filter APIs by category and display with a direct link
function filterByCategory(category) {
    const apiList = document.getElementById('api-list');
    const filteredAPIs = apiData.filter(api => api.category === category);
    
    apiList.innerHTML = ''; // Clear previous API list

    // Populate filtered API list with direct links
    filteredAPIs.forEach(api => {
        const apiItem = document.createElement('div');
        apiItem.classList.add('api-item');
        
        // Display API name with a direct clickable URL
        apiItem.innerHTML = `
            <h3>${api.name}</h3>
            <p>${api.description}</p>
            <a href="${api.url}" target="_blank">${api.url}</a>
        `;

        apiList.appendChild(apiItem);
    });
}

// Filter all APIs by main search input
function filterAPIs() {
    const searchTerm = document.getElementById('main-search').value.toLowerCase();
    const apiList = document.getElementById('api-list');
    const filteredAPIs = apiData.filter(api =>
        api.name.toLowerCase().includes(searchTerm) ||
        api.description.toLowerCase().includes(searchTerm) ||
        api.category.toLowerCase().includes(searchTerm)
    );

    apiList.innerHTML = ''; // Clear previous API list

    filteredAPIs.forEach(api => {
        const apiItem = document.createElement('div');
        apiItem.classList.add('api-item');

        apiItem.innerHTML = `
            <h3>${api.name}</h3>
            <p>${api.description}</p>
            <a href="${api.url}" target="_blank">${api.url}</a>
        `;

        apiList.appendChild(apiItem);
    });
}
