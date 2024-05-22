import { useState, useEffect } from 'react'
import { useLocation, matchRoutes } from 'react-router-dom'
import router from '@/router'

const useMeta = () => {

    const location = useLocation()

    const getMeta = () => {

        const routeMatches = matchRoutes(router, location)

        const currentRoute = routeMatches ? routeMatches[routeMatches.length - 1].route : null

        return currentRoute ? currentRoute.meta : {}

    }

    const [meta, setMeta] = useState(getMeta())

    useEffect(() => {
        
        const metaInfo = getMeta()
        setMeta(metaInfo)

    }, [location])

    return meta

}

export default useMeta