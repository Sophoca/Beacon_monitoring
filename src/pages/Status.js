import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import Map from '.././components/Map';

async function getLists({ URL }) {
    const response = await axios.get(URL);
    return response.data;
}

function Status({ match, location: { state } }) {
    const URL = state.parkingLotInfoURL;
    const { location, floor } = match.params;
    const detail = floor ? floor : state.imageSource;

    const { data, error, isLoading } = useAsync({
        promiseFn: getLists,
        URL,
        watch: location
    });

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다-Status {error}</div>;
    if (!data) return <div>반환값 없음-Status</div>;

    const imageUrl = data.mapInfo.imageUrl[detail];
    const configSlot = data.mapInfo.configSlot[detail];
    const allBeaconInfo = data.mapInfo.allBeaconInfo ? data.mapInfo.allBeaconInfo[detail] : null;
    return (
        <div
            className="Status"
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '0' }}
        >
            {/* <div>{`${location} ${detail}`}</div> */}
            <Map
                imageInfo={`${location} ${detail}`}
                imageUrl={imageUrl}
                allBeaconInfo={allBeaconInfo}
                configSlot={configSlot}
            />
        </div>
    );
}

export default Status;
