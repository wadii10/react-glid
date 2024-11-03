import { useEffect, useRef } from "react";

const useOld = (oldValue) => {
    const ref = useRef();

    useEffect( () => {

         ref.current = oldValue;
        
    }, [oldValue]
    )

    return ref.current;
}

export default useOld;