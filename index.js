// index.js
import listnav from './modules/nav.js';                                                                               // eslint-disable-line max-classes-per-file
import ManageBookDetails from './modules/manageBookDetails.js';                                                        // eslint-disable-line max-classes-per-file
import getCurrentDateTime from './modules/data_time.js';

const now = getCurrentDateTime();
// Convert the time to my East African Time (EAT)
const eastAfricanTime = now.setZone('Africa/Nairobi');
// Format the time as a string
const formattedTime = eastAfricanTime.toFormat('yyyy-MM-dd HH:mm:ss');
// Display the time in East African Time
const outputElement = document.getElementById('luxondate');
outputElement.textContent = `Current Time in East African Time (EAT): ${formattedTime}`;
