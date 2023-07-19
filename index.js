import './modules/nav.js';
import './modules/manageBookDetails.js';
import getCurrentDateTime from './modules/data_time.js';

const now = getCurrentDateTime();
// Convert the time to my East African Time (EAT)
const eastAfricanTime = now.setZone('Africa/Nairobi');
// Format the time as a string
const formattedTime = eastAfricanTime.toFormat('yyyy-MM-dd HH:mm:ss');
// Display the time in East African Time
const outputElement = document.getElementById('luxondate');
outputElement.textContent = `Current Time in East African Time (EAT): ${formattedTime}`;
