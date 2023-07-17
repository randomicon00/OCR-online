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

const countCharacters = (str) => {
  str = str.trim();

  return str.length;
}

const countWords = (str) => {
  str = str.trim();
  var words = str.split(/\s+/);

  return words.length;
}

export { formatSize, formatDate, countCharacters, countWords };
