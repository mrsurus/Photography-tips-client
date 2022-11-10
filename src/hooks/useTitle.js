import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} -Photo Tips`
    }, [title])
}

export default useTitle;