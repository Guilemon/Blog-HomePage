import React from 'react'
import ListItemDetail from './listItemDetail'
const ListItem = (props,content,tagName)=>{
    const listContent = props.content
    const contentType = props.tagName
    const filteredElem = listContent.filter((el)=>{return el.tags[0].split(",").indexOf(contentType)>-1})
    const blogElements = filteredElem.map((value,index)=>{
        return (
            <div key={value.title}>
                <img src={value.postImg}/>
                <div>
                <ListItemDetail contentData={value}/>
                </div>
            </div>
        )
    })

    return (blogElements)
}

export default ListItem
