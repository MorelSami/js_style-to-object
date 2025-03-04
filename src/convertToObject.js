'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const entries = [];

  if (!sourceString) {
    return {};
  }

  sourceString
    .replaceAll(/^[a-zA-Z]^[!#\w\d.-/%(#)]/g, '')
    .trim()
    .split(';')
    .forEach((style) => {
      if (style) {
        entries.push([...style.split(':').map((x) => x.trim())]);
      }
    });

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
