import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, matchRoutes } from 'react-router-dom'
import { TweenOneGroup } from 'rc-tween-one'
import { Tag } from 'antd'
import router from '@/router'
import './index.css'

function Tags({ activeTag, changeTag }) {

    const navigate = useNavigate()
    const location = useLocation()

    const [tags, setTags] = useState(() => {
        const savedTags = localStorage.getItem('tags')
        return savedTags ? JSON.parse(savedTags) : [{ name: '首页', path: '/home' }]
    })

    const getMeta = () => {

        const routeMatches = matchRoutes(router, location)

        const currentRoute = routeMatches ? routeMatches[routeMatches.length - 1].route : null
        const meta = currentRoute ? currentRoute.meta : {}

        return {
            name: meta?.pathName,
            path: location.pathname
        }

    }

    useEffect(() => {

        const tag = getMeta()

        changeTag(tag.path)

        if (!tags.some(t => t.path === tag.path)) {

            const newTags = [...tags, tag]
            setTags(newTags)
            localStorage.setItem('tags', JSON.stringify(newTags))

        }

    }, [location])

    const handleClose = (tag) => {

        const index = tags.findIndex(t => t.path === tag.path)

        setTags(tags => tags.filter((_, i) => i !== index))

        if (tag.path === location.pathname) {
            navigate(tags[index - 1].path)
        }

    }

    const redirectPage = (params) => {
        navigate(params.path)
    }

    return (
        <TweenOneGroup
            appear={false}
            enter={{
                scale: 0.8,
                opacity: 0,
                type: 'from',
                duration: 100,
            }}
            leave={{
                opacity: 0,
                width: 0,
                scale: 0,
                duration: 200,
            }}
            onEnd={(e) => {
                if (e.type === 'appear' || e.type === 'enter') {
                    e.target.style = 'display: inline-block'
                }
            }}
        >
            {tags.map(tag =>
                <span
                    key={tag.path}
                    style={{
                        display: 'inline-block',
                    }}
                >
                    <Tag
                        closable={tag.name !== '首页'}
                        onClose={(e) => {
                            e.preventDefault()
                            handleClose(tag)
                        }}
                        onClick={() => redirectPage(tag)}
                        className={tag.path === activeTag ? 'tag-active' : ''}
                    >
                        {tag.name}
                    </Tag>
                </span>
            )}
        </TweenOneGroup>
    )
}

export default Tags