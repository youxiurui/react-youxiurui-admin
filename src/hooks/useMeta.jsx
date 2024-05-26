import { useState, useEffect } from 'react'
import { useLocation, matchRoutes } from 'react-router-dom'
import router from '@/router'

const useMeta = () => {

    const location = useLocation()

    const getMeta = () => {

        const routeMatches = matchRoutes(router, location)

        const currentRoute = routeMatches ? routeMatches[routeMatches.length - 1].route : null
        const meta = currentRoute ? currentRoute.meta : {}

        return {
            name: meta?.pathName,
            path: location.pathname
        }

    }

    const [meta, setMeta] = useState(getMeta())

    useEffect(() => {

        const metaInfo = getMeta()
        console.log(metaInfo, metaInfo === meta, 'metaInfo')
        setMeta(metaInfo)

    }, [location])

    return meta

}

export default useMeta