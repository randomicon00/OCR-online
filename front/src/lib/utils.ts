import moment from "moment.js";

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

const formatDate = (date, format) => {
  const formattedDate = moment(date).format(format); 
  return formattedDate;
};

export {
  formatSize,
  formatDate,
};

