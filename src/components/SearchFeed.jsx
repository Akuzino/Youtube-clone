import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overFlowY: "auto", height: "95vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight={900}
                mb={3}
                sx={{ color: "white" }}
            >
                Search Resuls for:{" "}
                <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
            </Typography>

            <Box display="flex">
                <Box sx={{ mr: { sm: "100px" } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    );
};

export default SearchFeed;
