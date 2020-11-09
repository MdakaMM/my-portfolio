import React from 'react'
import styled from 'styled-components'

export default function Title(props) {
    return (
        <TitleWrapper className="title" style={{color:props.color}}>
            <h2>{props.title}</h2>
            <div className="first">
                <div className="underline"></div>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
text-align:center;
margin-bottom:25px;
margin-top:25px;

h2{
    font-weight:600;
    text-transform:uppercase;
}

.underline{
    width:80px;
    border:1px solid;
    margin:0 auto;
    margin-top:5px;
}
`