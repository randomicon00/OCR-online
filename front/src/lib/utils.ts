const formatNumber = () => {
  console.log("TODO format number");
};

const formatDate = () => {
   console.log("TODO format date");
};

const formatFileSizeUnit = () => {
  console.log("TODO format file size unit");
};

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

