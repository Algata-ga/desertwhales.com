import { useQuery } from "react-query";

const fetchPartners = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/partners?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ title, field_image, field_link }) => {
        return {
            name: title,
            image: `${import.meta.env.VITE_BASE_API_URL}${field_image}`,
            link: field_link,
        };
    });
    return parsedData;
};

const usePartners = (settings) => useQuery("partners", fetchPartners, settings);

const fetchPortfolios = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/portfolio?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ title, field_image, field_link }) => {
        return {
            name: title,
            image: `${import.meta.env.VITE_BASE_API_URL}${field_image}`,
            link: field_link,
        };
    });
    console.log(parsedData);
    return parsedData;
};

const usePortfolios = (settings) =>
    useQuery("portfolio", fetchPortfolios, settings);

const fetchKOI = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/koi?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ title, field_image, field_location }) => {
        return {
            markerOffset: 15,
            name: title,
            image: `${import.meta.env.VITE_BASE_API_URL}${field_image}`,
            coordinates: field_location
                .split(",")
                .map((loc) => parseFloat(loc)),
        };
    });
    return parsedData;
};

const useKOIs = (settings) => useQuery("koi", fetchKOI, settings);

export { usePartners, useKOIs, usePortfolios };
