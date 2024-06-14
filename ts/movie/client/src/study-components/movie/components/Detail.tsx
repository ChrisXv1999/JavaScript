import { useEffect, useState } from "react";
import { useParams,useNavigate ,useLocation} from "react-router-dom"
import { IMovie, MovieService } from "../../../services/MovieService";
export default function Detail(){
    const {id} = useParams();
    const [detail,setDetail] = useState<IMovie | null>(null);
    const navigate = useNavigate();

    const back = ()=>{
        navigate('/home',{state: {type: 'cancel'}})
    }
    useEffect(()=>{
        if(!id){
            return;
        };
        MovieService.getDetail(id).then(response=>{
            setDetail(response);
        })
    },[])
    return <>
        {detail ? <div>
            <h1>{detail.name}</h1>
            <div><img src={detail.poster} alt="" width={100}/>{detail.description}</div>
            <div>类型：{detail.types}</div>
            <div>上映地区：{detail.areas}</div>
            <div>时长：{detail.timeLong / 60} 分钟</div>
            
        </div>:'暂无数据'}
        <button onClick={back}>返回</button>
    </>
}