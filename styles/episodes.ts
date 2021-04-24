import styled from 'styled-components'

const EpisodesStyles = styled.div`
height:calc(100vh - 6.5rem);
max-width:45rem;
padding:3rem 2rem;
margin: 0 auto;

.thumbnailContainer{
    position:relative;

    img {
        border-radius:1rem;
    }

    button {
        width:3rem;
        height:3rem;
        border-radius:0.75rem;
        border:0;
        position:absolute;
        z-index:5;
        font-size:0;

        transition:filter 0.2s;

        &:first-child {
            left:0;
            top:50%;
            background:var(--purple-500);
            transform:translate(-50%,-50%);
        }

        &:last-child {
            right:0;
            top:50%;
            background:var(--green-500);
            transform:translate(50%,-50%);
        }

        &:hover{
            filter:brightness(0.9);
        }
    }
}

header {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--gray-100);

    h1 {
        font-size:1.5rem;
        margin-top:1rem;
        margin-bottom:1rem;
    }

    span {
        display:inline-block;
        font-size:0.775rem;

        & + span {
            margin-left:1rem;
            padding-left:1rem;
            position:relative;

            &::before{
                content:"";
                            width:4px;
                            height:4px;
                            border-radius:2px;
                            background:#DDD;
                            position:absolute;
                            left:0;
                            top:50%;
                            transform:translate(-50%,-50%);
            }
        }
    }
}

.description {
    margin-top:1rem;
    line-height:1.675rem;
    color:var(--gray-800);

    p {
        font-size:0.875rem;
        margin: 0.5rem 0;
    }
}
`


export default EpisodesStyles;