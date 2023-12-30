import {calculateGamma, convertValuesToNumber, calculateMean, calculateMedian,calculateMode } from "../Utility"

const Gamma =({data})=>{
    const alcohalData = convertValuesToNumber(data)
    const gammaData = calculateGamma(alcohalData)

    const classWiseGammaStatsGenerater =(gammaData)=>{
        const classes = [...new Set(gammaData.map((point) => point.Alcohol))];
  
        const classStatistics = classes.map((cls) => {
          const filteredData = gammaData.filter((point) => point.Alcohol === cls);
          const gammaValues = filteredData.map((point) => point.Gamma);
      
          return {
            Class: cls,
            Gamma: {
              Mean: calculateMean(gammaValues),
              Median: calculateMedian(gammaValues),
              Mode: calculateMode(gammaValues.map(value => value.toFixed(3))),
            },
          };
        });
        return classStatistics;
    }
   
    const classWiseGammaStats = classWiseGammaStatsGenerater(gammaData);

    return (
        <div>
             <h2>Gamma tabular data set </h2>
          <table>
            <thead>
              <tr>
                <th>Measure</th>
                {classWiseGammaStats.map((stats) => (
                  <th key={stats.Class}>Class {stats.Class}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gamma Mean</td>
                {classWiseGammaStats.map((stats) => (
                  <td key={`${stats.Class}-mean`}>{stats.Gamma.Mean.toFixed(3)}</td>
                ))}
              </tr>
              <tr>
                <td>Gamma Median</td>
                {classWiseGammaStats.map((stats) => (
                  <td key={`${stats.Class}-median`}>{stats.Gamma.Median.toFixed(3)}</td>
                ))}
              </tr>
              <tr>
                <td>Gamma Mode</td>
                {classWiseGammaStats.map((stats) => (
                  <td key={`${stats.Class}-mode`}>{stats.Gamma.Mode}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
}

export default Gamma;