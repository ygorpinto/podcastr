import styled from 'styled-components'

const PlayerStyles = styled.div`
width:26.5rem;
padding:3rem 4rem;
height:100vh;

background: var(--purple-500);
color:var(--white);

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

header {
    display:flex;
    align-items:center;
    gap:1rem;
}
strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
}

footer {

    align-self:stretch;

    &.empty {
        opacity:0.5;
    }
}

.currentEpisode {
    text-align:center;
    font-size:0.875rem;

    img {
        border-radius:1.5rem;
    }

    strong {
        display:block;
        margin-top:0.5rem;
        font: 600 1rem Lexend, sans-serif;
        line-height:1.5rem;
    }

    span {
        display:block;
        margin-top:1rem;
        opacity:0.6;
        line-height:1.5rem;
    }
}

.emptyPlayer {
    width:100%;
    height:20rem;
    border: 1.5px dashed var(--purple-300);
    border-radius:1.5rem;
    background: linear-gradient(143.8deg, rgba(145,100,250,0.8) 0%, rgba(0,0,0,0) 100%);

    padding:4rem;
    text-align:center;

    display:flex;
    align-items:center;
    justify-content:center;
}

.progress {
    display:flex;
    align-items:center;
    gap:0.5rem;
    font-size:0.875rem;

    span {
        display:inline-block;
        width:4rem;
        text-align:center;

    }

    .slider {
        flex:1;

        .emptySlider {
            width:100%;
            height:4px;
            background:var(--purple-300);
            border-radius:2px;
        }
    }
    
}

.buttons {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:2.5rem;
    gap:1.5rem;

    button {
        background:transparent;
        border:0;
        font-size:0;

        &.playButton {
            width:4rem;
            height:4rem;
            border-radius:1rem;
            background:var(--purple-400);
        }
    }
}
`
export default PlayerStyles;