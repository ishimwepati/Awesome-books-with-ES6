import { DateTime } from './luxon.js';

function getCurrentDateTime() {
  return DateTime.local();
}

export default getCurrentDateTime;