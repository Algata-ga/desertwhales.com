import useQuery from "react-query";

const getMediumPosts = async () => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Getting AMAs from medium",
        }),
    };
    const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@desertwhales",
        requestOptions
    );
    const data = await response.json();

    return data;
};
const useMediumPosts = () => useQuery("mediumPosts", getMediumPosts);

export default useMediumPosts;
