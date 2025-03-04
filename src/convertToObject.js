'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  sourceString.split(';').forEach((style) => {
    const separatorIndex = style.indexOf(':');
    obj[style.slice(0, separatorIndex)] = style.slice(separatorIndex + 1);
  });
  return obj;
}

module.exports = convertToObject;
