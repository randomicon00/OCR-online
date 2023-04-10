import moment from "moment.js";

// Add jsdoc to all functions in this file
const formatSize = (size) => {
  if (size >= 1073741824) {
    return (size / 1073741824).toFixed(2) + " GB";
  } else if (size >= 1048576) {
    return (size / 1048576).toFixed(2) + " MB";
  } else if (size >= 1024) {
    return (size / 1024).toFixed(2) + " KB";
  } else {
    return size + " B";
  }
};

const formatDate = (date, format) => moment(date).format(format);


function countCharacters(str) {
  // Remove whitespace from the beginning and end of the string
  str = str.trim();

  // Return the length of the string
  return str.length;
}

function countWords(str) {
  // Remove whitespace from the beginning and end of the string
  str = str.trim();

  // Split the string into an array of words using whitespace as the delimiter
  var words = str.split(/\s+/);

  // Return the number of words in the array
  return words.length;
}

export { formatSize, formatDate, countCharacters, countWords };
