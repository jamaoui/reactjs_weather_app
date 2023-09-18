import styles from './SearchBar.module.scss'
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {resetData, setData} from "../../features/weather/WeatherSlice";

export const SearchBar = () => {
    const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API
    const dispatch = useDispatch()
    const [cities, setCities] = useState([])
    const [unity, setUnity] = useState('metric')
    const handleInputChange = (e) => {
        const {value} = e.currentTarget
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
            .then(response => response.json())
            .then(json => setCities(json.results?.map(data => {
                const {lat, lon, city, country, formatted} = data
                return {lat, lon, city, country, formatted}
            })))
    }
    const handleAutocompleteSelect = (e, value) => {
        if (value !== null) {
            const {lon, lat} = value
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(json => {
                    const {clouds, main, name, sys, weather, wind} = json
                    dispatch(setData({clouds, main, name, sys, weather, wind}))
                })
        } else {
            dispatch(resetData())
        }

    }
    return (
        <>
            <div
                className={styles.searchContainer}>
                <Autocomplete className={styles.searchInput}
                              clearOnBlur={false}
                              onChange={handleAutocompleteSelect}
                              getOptionLabel={(option) => option.formatted}
                              renderInput={(params) =>
                                  <TextField onChange={handleInputChange} {...params}
                                             label={'Enter your city ...'}/>}
                              options={cities|| []}/>
            </div>
        </>
    )
}