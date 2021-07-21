import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import Map from '../components/Map';

async function getLists({ parkingLotURL }) {
    const response = await axios.get(parkingLotURL);
    return response.data;
}

function Status({ match, location: { state } }) {
    const parkingLotURL = state.parkingLotInfoURL;
    const realBeaconURL = state.realBeaconURL;
    const { location, floor } = match.params;
    const detail = floor || state.imageSource;

    // console.log('Status', location, detail, parkingLotURL, realBeaconURL);

    const { data, error, isLoading } = useAsync({
        promiseFn: getLists,
        parkingLotURL,
        watch: parkingLotURL
    });

    if (isLoading || !data.mapInfo.imageUrl[detail]) return <div>로딩중-Status</div>;
    if (error) return <div>에러가 발생했습니다-Status {error}</div>;
    if (!data) return <div>반환값 없음-Status</div>;

    const imageUrl = data.mapInfo.imageUrl[detail];
    const configSlot = data.mapInfo.configSlot[detail];
    const allBeaconInfo = data.mapInfo.allBeaconInfo;

    return (
        <div
            className="Status"
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '0' }}
        >
            <Map
                location={location}
                detail={detail}
                imageUrl={imageUrl}
                allBeaconInfo={allBeaconInfo}
                configSlot={configSlot}
                realBeaconURL={realBeaconURL}
            />
        </div>
    );
}

export default Status;
