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

window.onload = (e) => {
  let dailySentence = document.getElementById('a-sent');
  dailySentence.innerText = `- ${DAILY_SENTENCES[randomInt() % DAILY_SENTENCES.length]} -`
}