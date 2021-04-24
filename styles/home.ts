import styled from 'styled-components'


const HomeStyles = styled.div`
padding: 0 4rem;
height: calc(100vh - 6.5rem);
overflow-y:scroll;

h2 {
    margin-top:3rem;
    margin-bottom:1.5rem;
}

.latestEpisodes {
    ul {
        list-style:none;
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:1.5rem;

        li {
            background:var(--white);
            border: 1px solid var(--gray-100);
            padding: 1.25rem;
            border-radius:1.5rem;
            position:relative;

            display:flex;
            align-items:center;

            img {
                width:6rem;
                height:6rem;
                border-radius:1rem;
            }

            .episodeDetails {
                flex:1;
                margin-left:1rem;

                a {
                    display:block;
                    color:var(--gray-800);
                    font-family:Lexend, sans-serif;
                    font-weight:600;
                    text-decoration:none;
                    line-height:1.4rem;

                    &:hover {
                        text-decoration:underline;
                    }

                }

                p {
                    font-size:0.875rem;
                    margin-top:0.5rem;
                    max-width:70%;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }

                span {
                    display:inline-block;
                    margin-top:0.5rem;
                    font-size:0.875rem;

                    &:last-child {
                        margin-left:0.5rem;
                        padding-left:0.5rem;
                        position:relative;

                        &::before {
                            content:"";
                            width:4px;
                            height:4px;
                            border-radius:2px;
                            background:#DDD;
                            position:absolute;
                            left:0;
                            top:50%;
                        }
                    }
                }
            }
        }
    }
}
`

export default HomeStyles;