type Coordinates = {
    accuracy: number;
    latitude: number;
    longitude: number;
};

export type LocationData = {
    coords: Coordinates;
    timestamp: number;
};
