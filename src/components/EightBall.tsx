// No AI was used in the creation of this project.
// Note: The name "EightBall.tsx," among others, reflect an earlier state of this
//       project. The current project has nothing to do with Magic 8-Balls.

import styled from "styled-components";
import type {BallResponse} from "../types/Responses.ts";

const Everything = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #002200;
    margin-left: 10vw;
    margin-right: 10vw;
`

const Chars = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    width: 320px;
    border: 5px solid white;
    border-radius: 5px;
    color: #ccffcc;
    text-align: center;
    margin: 0.67vh;
    padding: 1vh;
    font-family: Helvetica, Arial, sans-serif;
    
`;

const Num = styled.span `
    text-align: left;
`

const Header = styled.h2 `
    color: lime;
    font-family: Cooper Black, Arial, Helvetica, sans-serif;
    padding-bottom: 1vh;
`

const SpecInd = styled.h3<{species: string}>`
    font-size: ${(props) => (props.species === "Human" ? '0em' : '1em')}; /* em = font size relative to parent; Citation: my own knowledge */
`

const TypeInd = styled.h3<{type: string}>`
    font-size: ${(props) => (props.type === "" ? '0em' : '1em')};
`

const StatusInd = styled.h3<{status: string}>`
    color: ${(props) => (props.status === "Dead" ? 'red' : '#ccffcc')};
    font-size: 1em;
`

// UNUSED FUNCTION
// Given a Unix timestamp, this function returns a string of its date.
// I coded this with knowledge from https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
// Input is meant to be gathered through Date.parse, which I learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
//function unix2date(num : number) {
//    let date = new Date(num);
//    return date.toLocaleDateString();
//}

export default function EightBall(props : {data:BallResponse[]}) {
    return (
        <Everything>
            {
                props.data.map((resp: BallResponse) =>

                    <Chars>
                        <Num><span>{resp.id}</span></Num>
                        <Header><h2><u>{resp.name}</u></h2></Header>
                        <img src={resp.image} alt={resp.name} />
                        <SpecInd species={resp.species}><h3><b>Species:</b> {resp.species}</h3></SpecInd>
                        <TypeInd type={resp.type}><h3><b>Type:</b> {resp.type}</h3></TypeInd>
                        <h3><b>Gender:</b> {resp.gender}</h3>
                        <StatusInd status={resp.status}> <h3><b>Status:</b> {resp.status}</h3></StatusInd>
                        <h5 id="datepart"><b>Date of Addition to Database: </b>{resp.created.substring(0,10)}</h5>
                    </Chars>
                )
            }
        </Everything>
    );
}