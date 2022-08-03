import React from 'react';
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");
    return (
        <div className="featured">
            {loading 
            ? ("Loading please wait")
            : (
                <>
                {data.map((obj, index) => {
                    return (
                        <div className="featuredItem" key={index}>
                            <img 
                                className="featuredImg"
                                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
                                alt={obj.name}
                            />
                            <div className="featuredTitles">
                                <h1>{obj.city}</h1>
                                <h2>{obj.name}</h2>
                            </div>
                        </div>
                    );
                })}
                </>
            )}
        </div>
    );
};

export default Featured;