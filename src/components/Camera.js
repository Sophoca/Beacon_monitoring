import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Streamedian from '../Streamedian';
import CameraDiv from './CameraDiv';

const CameraLayoutDiv = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
`;

const Camera = ({ cameraInfo, heightRatio }) => {
    const [ID, setID] = useState(null);
    const cameraSize = 30;
    const [url, setUrl] = useState(null);
    console.log(ID);
    useEffect(() => {
        ID &&
            setUrl(
                `rtsp://admin:admin1234@218.153.209.100:${CamDict[ID].major}/cam/realmonitor?channel=${CamDict[ID].minor}&subtype=1`
            );
    }, [ID]);

    return (
        <>
            <CameraLayoutDiv className="camera-layout">
                {Object.keys(cameraInfo).map(camNum => {
                    const current = cameraInfo[camNum];
                    const type = CamDict[camNum].type;
                    return (
                        <CameraDiv
                            key={camNum}
                            top={current.top * heightRatio - cameraSize / 2}
                            left={current.left * heightRatio - cameraSize / 2}
                            cameraSize={cameraSize}
                        >
                            <Button
                                variant={camNum === ID ? 'contained' : 'outlined'}
                                color={
                                    type === 264
                                        ? 'primary'
                                        : type === 265
                                        ? 'secondary'
                                        : 'default'
                                }
                                className="beacon-toggle-btn"
                                onClick={() => setID(camNum)}
                                style={{ padding: 0, minHeight: cameraSize, minWidth: cameraSize }}
                            >
                                {camNum}
                            </Button>
                        </CameraDiv>
                    );
                })}
            </CameraLayoutDiv>
            <div
                className="player"
                style={{
                    position: 'fixed',
                    display: 'flex',
                    width: 75 + '%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {ID && <Streamedian id={ID} url={url}></Streamedian>}
            </div>
        </>
    );
};

// cctv 주소
// 'rtsp://admin:admin1234@218.153.209.100:500/cam/realmonitor?channel=1&subtype=1'    500부터 506
// 500 : channel = 1 - 30  : 249 11번 - 40번
// 501 : channel = 1 - 30  : 250 41번 - 70번
// 502 : channel = 1 - 30  : 251 71번 - 100번
// 503 : channel = 1 - 30  : 252 101번 - 130번
// 504 : channel = 1 - 30  : 253 #순서가 다름 :
//  132 136 135 139 137 140 138 134 131 133 142 150 143 144 148 145 146 149 147 141 157 159 152 160 156 155 154 151 158 153
//   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
// 505 : channel = 1 - 30  : 254 161-190
// 506 : channel = 1 - 30  : 255 191-220

const CamDict = {
    // 500 (11~40)
    11: { major: 500, minor: 1, type: 264 },
    12: { major: 500, minor: 2, type: 264 },
    13: { major: 500, minor: 3, type: 265 },
    14: { major: 500, minor: 4, type: 264 },
    15: { major: 500, minor: 5, type: 264 },
    16: { major: 500, minor: 6, type: 265 },
    17: { major: 500, minor: 7, type: 0 },
    18: { major: 500, minor: 8, type: 0 },
    19: { major: 500, minor: 9, type: 0 },
    20: { major: 500, minor: 10, type: 0 },
    21: { major: 500, minor: 11, type: 0 },
    22: { major: 500, minor: 12, type: 0 },
    23: { major: 500, minor: 13, type: 0 },
    24: { major: 500, minor: 14, type: 0 },
    25: { major: 500, minor: 15, type: 0 },
    26: { major: 500, minor: 16, type: 0 },
    27: { major: 500, minor: 17, type: 0 },
    28: { major: 500, minor: 18, type: 0 },
    29: { major: 500, minor: 19, type: 0 },
    30: { major: 500, minor: 20, type: 0 },
    31: { major: 500, minor: 21, type: 0 },
    32: { major: 500, minor: 22, type: 0 },
    33: { major: 500, minor: 23, type: 0 },
    34: { major: 500, minor: 24, type: 0 },
    35: { major: 500, minor: 25, type: 0 },
    36: { major: 500, minor: 26, type: 0 },
    37: { major: 500, minor: 27, type: 0 },
    38: { major: 500, minor: 28, type: 0 },
    39: { major: 500, minor: 29, type: 0 },
    40: { major: 500, minor: 30, type: 0 },
    // 501 (41~70)
    41: { major: 501, minor: 1, type: 0 },
    42: { major: 501, minor: 2, type: 0 },
    43: { major: 501, minor: 3, type: 0 },
    44: { major: 501, minor: 4, type: 0 },
    45: { major: 501, minor: 5, type: 0 },
    46: { major: 501, minor: 6, type: 0 },
    47: { major: 501, minor: 7, type: 0 },
    48: { major: 501, minor: 8, type: 0 },
    49: { major: 501, minor: 9, type: 0 },
    50: { major: 501, minor: 10, type: 0 },
    51: { major: 501, minor: 11, type: 0 },
    52: { major: 501, minor: 12, type: 0 },
    53: { major: 501, minor: 13, type: 264 },
    54: { major: 501, minor: 14, type: 265 },
    55: { major: 501, minor: 15, type: 264 },
    56: { major: 501, minor: 16, type: 264 },
    57: { major: 501, minor: 17, type: 265 },
    58: { major: 501, minor: 18, type: 0 },
    59: { major: 501, minor: 19, type: 0 },
    60: { major: 501, minor: 20, type: 0 },
    61: { major: 501, minor: 21, type: 0 },
    62: { major: 501, minor: 22, type: 0 },
    63: { major: 501, minor: 23, type: 0 },
    64: { major: 501, minor: 24, type: 0 },
    65: { major: 501, minor: 25, type: 265 },
    66: { major: 501, minor: 26, type: 265 },
    67: { major: 501, minor: 27, type: 265 },
    68: { major: 501, minor: 28, type: 265 },
    69: { major: 501, minor: 29, type: 0 },
    70: { major: 501, minor: 30, type: 0 },
    // 502 (71~100)
    71: { major: 502, minor: 1, type: 0 },
    72: { major: 502, minor: 2, type: 0 },
    73: { major: 502, minor: 3, type: 0 },
    74: { major: 502, minor: 4, type: 0 },
    75: { major: 502, minor: 5, type: 0 },
    76: { major: 502, minor: 6, type: 0 },
    77: { major: 502, minor: 7, type: 0 },
    78: { major: 502, minor: 8, type: 0 },
    79: { major: 502, minor: 9, type: 0 },
    80: { major: 502, minor: 10, type: 0 },
    81: { major: 502, minor: 11, type: 0 },
    82: { major: 502, minor: 12, type: 0 },
    83: { major: 502, minor: 13, type: 0 },
    84: { major: 502, minor: 14, type: 0 },
    85: { major: 502, minor: 15, type: 0 },
    86: { major: 502, minor: 16, type: 0 },
    87: { major: 502, minor: 17, type: 0 },
    88: { major: 502, minor: 18, type: 0 },
    89: { major: 502, minor: 19, type: 0 },
    90: { major: 502, minor: 20, type: 0 },
    91: { major: 502, minor: 21, type: 0 },
    92: { major: 502, minor: 22, type: 0 },
    93: { major: 502, minor: 23, type: 0 },
    94: { major: 502, minor: 24, type: 0 },
    95: { major: 502, minor: 25, type: 0 },
    96: { major: 502, minor: 26, type: 0 },
    97: { major: 502, minor: 27, type: 0 },
    98: { major: 502, minor: 28, type: 0 },
    99: { major: 502, minor: 29, type: 0 },
    100: { major: 502, minor: 30, type: 0 },
    // 503 (101~130)
    101: { major: 503, minor: 1, type: 0 },
    102: { major: 503, minor: 2, type: 0 },
    103: { major: 503, minor: 3, type: 0 },
    104: { major: 503, minor: 4, type: 0 },
    105: { major: 503, minor: 5, type: 0 },
    106: { major: 503, minor: 6, type: 0 },
    107: { major: 503, minor: 7, type: 0 },
    108: { major: 503, minor: 8, type: 0 },
    109: { major: 503, minor: 9, type: 0 },
    110: { major: 503, minor: 10, type: 0 },
    111: { major: 503, minor: 11, type: 265 },
    112: { major: 503, minor: 12, type: 0 },
    113: { major: 503, minor: 13, type: 0 },
    114: { major: 503, minor: 14, type: 0 },
    115: { major: 503, minor: 15, type: 0 },
    116: { major: 503, minor: 16, type: 0 },
    117: { major: 503, minor: 17, type: 0 },
    118: { major: 503, minor: 18, type: 0 },
    119: { major: 503, minor: 19, type: 265 },
    120: { major: 503, minor: 20, type: 265 },
    121: { major: 503, minor: 21, type: 265 },
    122: { major: 503, minor: 22, type: 265 },
    123: { major: 503, minor: 23, type: 265 },
    124: { major: 503, minor: 24, type: 265 },
    125: { major: 503, minor: 25, type: 0 },
    126: { major: 503, minor: 26, type: 0 },
    127: { major: 503, minor: 27, type: 0 },
    128: { major: 503, minor: 28, type: 0 },
    129: { major: 503, minor: 29, type: 0 },
    130: { major: 503, minor: 30, type: 0 },
    // 504 (131~160)
    131: { major: 504, minor: 9, type: 0 },
    132: { major: 504, minor: 1, type: 0 },
    133: { major: 504, minor: 10, type: 0 },
    134: { major: 504, minor: 8, type: 0 },
    135: { major: 504, minor: 3, type: 0 },
    136: { major: 504, minor: 2, type: 0 },
    137: { major: 504, minor: 5, type: 0 },
    138: { major: 504, minor: 7, type: 0 },
    139: { major: 504, minor: 4, type: 0 },
    140: { major: 504, minor: 6, type: 0 },
    141: { major: 504, minor: 20, type: 0 },
    142: { major: 504, minor: 11, type: 0 },
    143: { major: 504, minor: 13, type: 0 },
    144: { major: 504, minor: 14, type: 0 },
    145: { major: 504, minor: 16, type: 0 },
    146: { major: 504, minor: 17, type: 0 },
    147: { major: 504, minor: 19, type: 0 },
    148: { major: 504, minor: 15, type: 0 },
    149: { major: 504, minor: 18, type: 0 },
    150: { major: 504, minor: 12, type: 0 },
    151: { major: 504, minor: 28, type: 0 },
    152: { major: 504, minor: 23, type: 0 },
    153: { major: 504, minor: 30, type: 0 },
    154: { major: 504, minor: 27, type: 0 },
    155: { major: 504, minor: 26, type: 0 },
    156: { major: 504, minor: 25, type: 0 },
    157: { major: 504, minor: 21, type: 0 },
    158: { major: 504, minor: 29, type: 0 },
    159: { major: 504, minor: 22, type: 265 },
    160: { major: 504, minor: 24, type: 265 },
    // 505 (161~190)
    161: { major: 505, minor: 1, type: 265 },
    162: { major: 505, minor: 2, type: 265 },
    163: { major: 505, minor: 3, type: 0 },
    164: { major: 505, minor: 4, type: 0 },
    165: { major: 505, minor: 5, type: 0 },
    166: { major: 505, minor: 6, type: 0 },
    167: { major: 505, minor: 7, type: 0 },
    168: { major: 505, minor: 8, type: 264 },
    169: { major: 505, minor: 9, type: 264 },
    170: { major: 505, minor: 10, type: 264 },
    171: { major: 505, minor: 11, type: 264 },
    172: { major: 505, minor: 12, type: 264 },
    173: { major: 505, minor: 13, type: 265 },
    174: { major: 505, minor: 14, type: 0 },
    175: { major: 505, minor: 15, type: 0 },
    176: { major: 505, minor: 16, type: 0 },
    177: { major: 505, minor: 17, type: 0 },
    178: { major: 505, minor: 18, type: 0 },
    179: { major: 505, minor: 19, type: 0 },
    180: { major: 505, minor: 20, type: 0 },
    181: { major: 505, minor: 21, type: 0 },
    182: { major: 505, minor: 22, type: 0 },
    183: { major: 505, minor: 23, type: 0 },
    184: { major: 505, minor: 24, type: 0 },
    185: { major: 505, minor: 25, type: 0 },
    186: { major: 505, minor: 26, type: 0 },
    187: { major: 505, minor: 27, type: 0 },
    188: { major: 505, minor: 28, type: 0 },
    189: { major: 505, minor: 29, type: 0 },
    190: { major: 505, minor: 30, type: 0 },
    // 506 (191~220)
    191: { major: 506, minor: 1, type: 0 },
    192: { major: 506, minor: 2, type: 0 },
    193: { major: 506, minor: 3, type: 0 },
    194: { major: 506, minor: 4, type: 0 },
    195: { major: 506, minor: 5, type: 0 },
    196: { major: 506, minor: 6, type: 0 },
    197: { major: 506, minor: 7, type: 0 },
    198: { major: 506, minor: 8, type: 0 },
    199: { major: 506, minor: 9, type: 0 },
    200: { major: 506, minor: 10, type: 0 },
    201: { major: 506, minor: 11, type: 0 },
    202: { major: 506, minor: 12, type: 0 },
    203: { major: 506, minor: 13, type: 0 },
    204: { major: 506, minor: 14, type: 0 },
    205: { major: 506, minor: 15, type: 0 },
    206: { major: 506, minor: 16, type: 0 },
    207: { major: 506, minor: 17, type: 0 },
    208: { major: 506, minor: 18, type: 0 },
    209: { major: 506, minor: 19, type: 0 },
    210: { major: 506, minor: 20, type: 264 },
    211: { major: 506, minor: 21, type: 0 },
    212: { major: 506, minor: 22, type: 264 },
    213: { major: 506, minor: 23, type: 264 },
    214: { major: 506, minor: 24, type: 264 },
    215: { major: 506, minor: 25, type: 0 },
    216: { major: 506, minor: 26, type: 0 },
    217: { major: 506, minor: 27, type: 0 },
    218: { major: 506, minor: 28, type: 0 },
    219: { major: 506, minor: 29, type: 0 },
    220: { major: 506, minor: 30, type: 0 }
};

export default Camera;
