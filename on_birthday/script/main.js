import * as shared from '../../shared/shared.js';

const DAILY_SENTENCES = [
  '爱笑的女孩运气不会太差哦！',
  '加油，你化学能学好的！',
  '青青子衿 悠悠我心',
  '希望你平平安安，健健康康，快快乐乐！',
]

/**
 * A function that returns a random integer.
 * @returns {number} The integer.
 */
function randomInt() {
  return Math.round(Math.random() * 114514);
}

/**
 * Calculate how many days from birthday to now.
 */
function calculateLiveDays() {
  let birthday = new Date(2007, 11, 2);
  let now = new Date();
  now.setMinutes(0);
  now.setSeconds(0);
  now.setHours(0);
  return shared.sec2day(now - birthday);
}

window.onload = (e) => {
  if (shared.calculateRemaining() != 0) {
    window.location.href = "..";
  }
  let dailySentence = document.getElementById('a-sent');
  dailySentence.innerText = `- ${DAILY_SENTENCES[randomInt() % DAILY_SENTENCES.length]} -`;

  let replaceWithLiveDays = document.querySelectorAll('.live-days');
  for (let i of replaceWithLiveDays) {
    i.innerText = `${calculateLiveDays()}`;
  }
}