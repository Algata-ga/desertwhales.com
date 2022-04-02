import { useQuery } from "react-query";

const fetchPartners = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/partners?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ name, image, link }) => {
        return {
            name: name,
            image: `${import.meta.env.VITE_BASE_API_URL}${image}`,
            link: link,
        };
    });
    return parsedData;
};

const usePartners = (settings) => useQuery("partners", fetchPartners, settings);

const fetchPortfolios = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/portfolios?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ name, image, link }) => {
        return {
            name: name,
            image: `${import.meta.env.VITE_BASE_API_URL}${image}`,
            link: link,
        };
    });
    return parsedData;
};

const usePortfolios = (settings) =>
    useQuery("portfolio", fetchPortfolios, settings);

const fetchKOI = async () => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/koi?_format=json`
    );
    const data = await response.json();
    const parsedData = data.map(({ name, description, location }) => {
        return {
            name: name,
            coordinates: location.split(",").map((loc) => parseFloat(loc)),
            description: description,
        };
    });
    return parsedData;
};

const useKOIs = (settings) => useQuery("koi", fetchKOI, settings);

export { usePartners, useKOIs, usePortfolios };
