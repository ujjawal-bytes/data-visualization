
export const calculateMean = (data) => {
    if (data.length === 0) return 0;
    const sum = data.reduce((total, val) => total + val, 0);
    return sum / data.length;
  };

  export const calculateMedian = (data) => {
    const sorted = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  };

  export const calculateMode = (data) => {
    const frequencyMap = {};
    data.forEach((val) => {
      frequencyMap[val] = (frequencyMap[val] || 0) + 1;
    });

    let maxFrequency = 0;
    let modes = [];
    for (const key in frequencyMap) {
      const frequency = frequencyMap[key];
      if (frequency > maxFrequency) {
        modes = [key];
        maxFrequency = frequency;
      } else if (frequency === maxFrequency) {
        modes.push(key);
      }
    }
    return modes.join(', ');
  };

  export const convertValuesToNumber=(arr)=> {
    return arr.map(obj => {
      const newObj = {};
      for (let key in obj) {
        if (!isNaN(obj[key])) {
          newObj[key] = Number(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    });
  }

  export const calculateGamma = (data) => {
    return data.map((point) => {
      const { Ash, Hue, Magnesium } = point;
      const gamma = (Ash * Hue) / Magnesium;
      console.log(" ...point, Gamma: gamma", {...point, Gamma: gamma})
      return { ...point, Gamma: gamma };
    });
  };

  


 

