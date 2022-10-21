const formatNumber = () => {};
const formatDate = () => {};
const formatFileSizeUnit = () => {};

const getUnit = () => {
  const timeUnits = ["s", "ms", "us"]; 
  if (Math.floor(num / 1000000) > 0) { 
    return "s";
  }
  if (Math.floor(num / 1000) > 0) { 
    return "ms"; 
  }
  return "us";
};


export {
  formatNumber,
  formatDate,
  formatFileSizeUnit,
}

