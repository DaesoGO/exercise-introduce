import React from 'react';
import * as Z from "./Zoom.style"

/**
 * @ask 이렇게 e.target.value 써도 되죠?
 */
const Zoom = ({zoom,setZoom}) => {
    return (
        <Z.Wrapper>
            <Z.Ranger defaultValue={zoom * 10} onChange={(e) => setZoom(e.target.value / 10)} min={10} max={70} />
        </Z.Wrapper>
    );
};

export default Zoom;