import React from 'react'

const ListItemDetail = (props,contentData)=>{
    const listDetailContent = props.contentData
    return (
    <div>
        <p>{listDetailContent.category}</p>
        <h4>{listDetailContent.title}</h4>
        <p>{listDetailContent.excerpt}</p>
        <div>
        <img src={listDetailContent.authorImg}/>
        <p>{listDetailContent.authorName}</p>
        <p>{listDetailContent.meta}</p>
        </div>
    </div>
        )
}

export default ListItemDetail
