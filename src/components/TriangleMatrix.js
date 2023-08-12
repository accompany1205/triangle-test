import React, { useMemo } from "react";
import { getAlteredTriangle, parseContent } from "../utils/arrayUtil";

function TriangleMatrix({fileContent}) {
    const triangle = useMemo(() => parseContent(fileContent), [fileContent]);
    const [result, elements] = useMemo(() =>
        getAlteredTriangle(triangle)
        , [triangle])
    return (
        <div className="triangle-container-body">
            {triangle.length > 0 && triangle.map((row, index) => (
                <div key={index} className="triangle-container-body-triangle-row">
                    <p>
                        {row.length > 0 && row.map((ele, _index) => (
                            <span key={_index} className={elements && elements[index] && _index === elements[index][1] ? "text-red scale-animation" : ""}>
                                {ele}
                            </span>
                        ))}
                    </p>
                </div>
            ))}
            <p className="triangle-container-body-equation">
                {elements.length > 0 && elements.map((ele, index) => (
                    <span key={index} className="text-red">{triangle[ele[0]][ele[1]]}{index === elements.length - 1 ? "" : "+"}</span>
                ))}{result && (<span>=<b data-testid="result">{result}</b></span>)}
            </p>
        </div>
    )
}

export default TriangleMatrix;