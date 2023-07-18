
import { DateTime } from "./luxon.js";

export function getCurrentDateTime() {
    return DateTime.local();
}