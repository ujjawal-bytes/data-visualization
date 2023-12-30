import {calculateMean ,calculateMedian, calculateMode, convertValuesToNumber } from "../Utility"
 
const Flavanoids =({data})=>{
   const alcohalData = convertValuesToNumber(data)

    const uniqueClasses = Array.from(new Set(alcohalData.map((data) => data.Alcohol)));
      const classStatistics = uniqueClasses.map((cls) => {
        const filteredData = alcohalData.filter((data) => data.Alcohol === cls);
        const flavanoids = filteredData.map((data) => data.Flavanoids);

        return {
          Class: cls,
          Flavanoids: {
            Mean:calculateMean(flavanoids).toFixed(3),
            Median: calculateMedian(flavanoids).toFixed(3) ,
            Mode: calculateMode(flavanoids),
          },
        };
      });

      return (
        <div>
            <h2>Flavanoids tabular data set </h2>
          <table>
            <thead>
              <tr>
                <th>Measure</th>
                {uniqueClasses.map((cls) => (
                  <th key={cls}>Class {cls}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flavanoids Mean</td>
                {classStatistics.map((stats) => (
                  <td key={`${stats.Class}-mean`}>{stats.Flavanoids.Mean}</td>
                ))}
              </tr>
              <tr>
                <td>Flavanoids Median</td>
                {classStatistics.map((stats) => (
                  <td key={`${stats.Class}-median`}>{stats.Flavanoids.Median}</td>
                ))}
              </tr>
              <tr>
                <td>Flavanoids Mode</td>
                {classStatistics.map((stats) => (
                  <td key={`${stats.Class}-mode`}>{stats.Flavanoids.Mode}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );

}
export default Flavanoids;