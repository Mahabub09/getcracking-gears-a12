import { useEffect, useState } from "react"

const UseTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {

        fetch("https://fierce-scrubland-22388.herokuapp.com/tool")
            .then(res => res.json())
            .then(data => setTools(data))

    }, [])
    return [tools, setTools]
}

export default UseTools;