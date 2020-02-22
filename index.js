/**
 * Sleep, async method
 * @async
 * @param {Number} amountOfTimeInMs 
 * @returns {Promise.<void>}
 */
function sleep(amountOfTimeInMs) {
  return new Promise(resolve =>
    setTimeout(resolve, amountOfTimeInMs)
  );
}

module.exports = sleep;