// Function to check if the user is within a specific region
function isUserInRegion(lat, lon, targetLat, targetLon, radius) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat - targetLat) * Math.PI / 180;
    const dLon = (lon - targetLon) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat * Math.PI / 180) * Math.cos(targetLat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km

    return distance <= radius;
}

// Function to check if the user is in the allowed region
function checkLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            const targetLat = 5.5592846;  // Example latitude of the region center
            const targetLon = -0.1974306;  // Example longitude of the region center
            const regionRadius = 0.5;     // Radius in km

            if (!isUserInRegion(userLat, userLon, targetLat, targetLon, regionRadius)) {
                window.location.href = "result.html"; // Redirect if not in region
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

checkLocation();

const QRCode = require('qrcode');
const qrElement = document.getElementById("qr-code");

// Generate the QR Code that links to the attendance form page
QRCode.toCanvas(qrElement, 'http://127.0.0.1:5500/form.html', function (err) {
  if (err) console.error(err);
});




  