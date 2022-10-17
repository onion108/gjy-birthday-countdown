/**
 * Convert seconds to days.
 * @param {number} sec The seconds.
 * @returns {number} The converted number.
 */
export function sec2day(sec) {
  return parseInt(sec / (1000 * 60 * 60 * 24));
}

/**
 * Calculate the remaining days.
 * @returns {number} The remaning days.
 */
export function calculateRemaining() {
  let now = new Date();
  now.setHours(0);
  now.setSeconds(0);
  now.setMinutes(0);
  let birthday = new Date(now.getFullYear(), 11, 30);
  if (birthday < now) {
    if (sec2day(now - birthday) >= 4) {
      birthday.setFullYear(birthday.getFullYear() + 1);
    } else {
      return 0;
    }
  }
  return sec2day(birthday - now);
}
