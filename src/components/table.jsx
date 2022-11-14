import moment from "moment";
import { Table } from "react-bootstrap";
export const WeatherTable = ({ items, ...props }) => {
  const tempConverter = (temp) => {
    temp = parseFloat(temp);
    return (temp - 273.15) * 1.8 + 32;
  };
  return (
    <>
      <Table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp(F)</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{moment(item.dt_txt).format("MM/DD/YYYY")}</td>
                  <td>{tempConverter(item.main.temp).toFixed(2)}</td>
                  <td>{item.weather.map((x) => x.description)}</td>
                  <td>{item.weather.map((x) => x.main)}</td>
                  <td>{item.main.pressure}</td>
                  <td>{item.main.humidity}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6">No data.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default WeatherTable;
