import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
import axios from "../axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearGradient from './LinearGradient'

const INDIA_TOPO_JSON = require("./india.topo.json");
const PROJECTION_CONFIG = {
  scale: 600,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};
// Red Variants
const COLOR_RANGE = [
  "#FFEDEA",
  "#FFCEC5",
  "#FFAD9F",
  "#FF8A75",
  "#FF5533",
  "#E2492D",
  "#BE3D26",
  "#9A311F",
  "#782618",
];
const DEFAULT_COLOR = "#EEE";
const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};
const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};
const getStateData = (city) => {
  const info = {
    "Ahmedabad": { id: "GJ", state: "Gujarat" },
    "Bangalore": { id: "KA", state: "Karnataka" },
    "Chennai": { id: "TN", state: "Tamil Nadu" },
    "Jaipur": { id: "RJ", state: "Rajasthan" },
    "Kolkata": { id: "WB", state: "West Bengal" },
    "Lucknow": { id: "UP", state: "Uttar Pradesh" },
    "Mumbai": { id: "MH", state: "Maharashtra" },
    "Nagpur": { id: "MH", state: "Maharashtra" },
    "New Delhi": { id: "DL", state: "Delhi" },
    "Pune": { id: "MH", state: "Maharashtra" },
  };
  return info[city];
};
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: getRandomInt() },
    { id: "AR", state: "Arunachal Pradesh", value: getRandomInt() },
    { id: "AS", state: "Assam", value: getRandomInt() },
    { id: "BR", state: "Bihar", value: getRandomInt() },
    { id: "CT", state: "Chhattisgarh", value: getRandomInt() },
    { id: "GA", state: "Goa", value: 21 },
    { id: "GJ", state: "Gujarat", value: 22 },
    { id: "HR", state: "Haryana", value: getRandomInt() },
    { id: "HP", state: "Himachal Pradesh", value: 24 },
    { id: "JH", state: "Jharkhand", value: 26 },
    { id: "KA", state: "Karnataka", value: 27 },
    { id: "KL", state: "Kerala", value: getRandomInt() },
    { id: "MP", state: "Madhya Pradesh", value: getRandomInt() },
    { id: "MH", state: "Maharashtra", value: getRandomInt() },
    { id: "MN", state: "Manipur", value: getRandomInt() },
    { id: "ML", state: "Meghalaya", value: 59 },
    { id: "MZ", state: "Mizoram", value: getRandomInt() },
    { id: "NL", state: "Nagaland", value: 59 },
    { id: "OR", state: "Odisha", value: 59 },
    { id: "PB", state: "Punjab", value: getRandomInt() },
    { id: "RJ", state: "Rajasthan", value: getRandomInt() },
    { id: "SK", state: "Sikkim", value: getRandomInt() },
    { id: "TN", state: "Tamil Nadu", value: getRandomInt() },
    { id: "TG", state: "Telangana", value: getRandomInt() },
    { id: "TR", state: "Tripura", value: 14 },
    { id: "UT", state: "Uttarakhand", value: getRandomInt() },
    { id: "UP", state: "Uttar Pradesh", value: 15 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: getRandomInt() },
    { id: "CH", state: "Chandigarh", value: getRandomInt() },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 19 },
    { id: "DD", state: "Daman and Diu", value: 20 },
    { id: "DL", state: "Delhi", value: 59 },
    { id: "JK", state: "Jammu and Kashmir", value: 25 },
    { id: "LA", state: "Ladakh", value: getRandomInt() },
    { id: "LD", state: "Lakshadweep", value: getRandomInt() },
    { id: "PY", state: "Puducherry", value: getRandomInt() },
  ];
};



function LocationVsMigrants() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());
  const [allData, setAllData] = useState();
  const [dropDown, setDropDown] = useState([]);
  const [selected, setSelected] = useState();
  const genMapData = (data) => {
    const req = [];
    for (let city in data) {
      if(getStateData(city))
        req.push({ "value": data[city], ...getStateData(city) });
    }
    return req;
  };
  useEffect(() => {
    axios
      .get("getLocationDetails")
      .then((response) => {
        setAllData(response.data);
        var months = [];
        for (let month in response.data) {
          months = [month, ...months];
        }
        setDropDown(months);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (!allData || !selected) {
      return null;
    }
    const month_data = allData[selected];
    setData(genMapData(month_data));
  }, [selected]);
  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };
  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);
  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };
  const onMouseLeave = () => {
    setTooltipContent("");
  };
  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };


  
  return (
    <div className="full-width-height container">
      <h1 className="no-margin center" style ={{ marginBottom: ".5em" }}>Migration Inflow Pattern</h1>
      <ReactTooltip >{tooltipContent}</ReactTooltip>
      {dropDown.length ? (
        <>
          <FormControl
            variant="outlined"
            fullWidth
            styles={{ marginTop: "3rem" }}
          >
            <InputLabel>Months</InputLabel>
            <Select
              value={selected}
              onChange={(event) => {
                setSelected(event.target.value);
              }}
              label="Months"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {dropDown.map((element) => {
                return <MenuItem value={element}>{element}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            width={340}
            height={420}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const current = data.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          <LinearGradient data={gradientData} />
        </>
      ) : (
        <><CircularProgress /></>
      )}
    </div>
  );
}
export default LocationVsMigrants;