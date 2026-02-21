// No AI was used in the creation of this project.
// Note: The name "EightBall.tsx," among others, reflect an earlier state of this
//       project. The current project has nothing to do with Magic 8-Balls.

import EightBall from "./components/EightBall.tsx";
import styled from "styled-components";
// import {useEffect, useState} from "react";
import useSWR from "swr";
// import type {BallResponse} from "./types/Responses.ts";

const ParentDiv = styled.div`

`;

const Header = styled.h1`
    text-align: center;
    color: white;
    font-family: Cooper Black, Helvetica, Arial, sans-serif;
`;



export default function App() {

//     const [data, setData] = useState<BallResponse[]>([]);
//
//    useEffect(() => {
//        async function fetchData(): Promise<void> {
//            const rawData = await fetch("https://rickandmortyapi.com/api/character/2");
//            /* const {results} : {results: BallResponse[]} = await rawData.json(); */
//            const {results} : {results : BallResponse[]} = await rawData.json();
//            setData(results);
//        }

//        fetchData()
//            .then(() => console.log("BOOM!"))
//            .catch((e: Error) => console.log("Yikes: " + e));

//    }, [data.length]);
    const{data, error}=useSWR("https://rickandmortyapi.com/api/character?page=19", /* Page 19 for variety's sake*/
        (url)=>fetch(url).then(res=>res.json())
    )
        console.log(data);
        if(!data) return <h2>Loading...</h2>
        if(error) return <h2>Error!</h2>
    return(
        <ParentDiv>
            <Header><h1><i>Rick and Morty</i> Directory</h1></Header>
            <EightBall data={data.results}/>
        </ParentDiv>
    );
}