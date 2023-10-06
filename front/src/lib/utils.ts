import moment from "moment.js";

// Add jsdoc to all functions in this file
const formatSize = (size) => {
  if (size >= 1073741824) {
    return (size / 1073741824).toFixed(2) + " Gb";
  } else if (size >= 1048576) {
    return (size / 1048576).toFixed(2) + " Mb";
  } else if (size >= 1024) {
    return (size / 1024).toFixed(2) + " Kb";
  } else {
    return size + " b";
  }
};

const formatDate = (date, format) => moment(date).format(format);

const countCharacters = (str) => str.trim().length;

const countWords = (str) => str.trim().split(/\s+/).length;

export { formatSize, formatDate, countCharacters, countWords };
