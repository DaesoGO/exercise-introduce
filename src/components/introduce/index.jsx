import Main from "./main";
import QnA from "./qna";
import api from '../../util/api/index'
import * as S from "./index.style";
import axios from "axios";
import { useEffect, useState } from "react";
import dummy from "./pushup.json";

const Render = () => {
    const [getInfo, setInfo] = useState(dummy);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get("exercise/스쿼트").then(
            (res) => {
                const d = res.data.data;
                d.muscle = d.muscle.split("/");
                setInfo(d);
            }, (err) => {
                console.log(err);
            });
        }, []
    );

    useEffect(() => {
        api.get("exercise/스쿼트/board").then(
            (res) => {
                setComments(res.data.data);
            }, (err) => {
                console.log(err);
            });
        }, []
    );
    return (
        <S.Root>
        <S.Container>
            <Main info={getInfo} comment={comments}/>
        </S.Container>
        </S.Root>
    );
};
export default Render;
