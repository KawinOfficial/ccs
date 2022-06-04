import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Layout from "../img/Layout.jpg";
import "./Map.css";
import { Box } from "@chakra-ui/react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWlvdC1jZW50ZXIiLCJhIjoiY2wzdGxyZGs3MjNhcjNkbTlqamltazI4diJ9.WHi56LyL6oB75Fh81Pbz6g";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(101.09129);
  const [lat, setLat] = useState(12.88771);
  const [zoom, setZoom] = useState(15.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      bearing: 30,
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("mousemove", (e) => {
      setLng(e.lngLat.lng.toFixed(6));
      setLat(e.lngLat.lat.toFixed(6));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <Box
        m={2}
        px={3}
        fontWeight="semibold"
        className="sidebarStyle"
        bgColor="white"
        rounded="full"
      >
        GPS: {lng},{lat}
      </Box>
      <Box
        ref={mapContainer}
        className="map-container"
        rounded="2xl"
        shadow="md"
        h={{ base: "50vh", lg: "54vh", xl: "56vh" }}
      />
    </>
  );
}
