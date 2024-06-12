import { useEffect, useState } from "react"
import { IMovie, MovieService } from "../../../services/MovieService"
import { Link, useLocation } from "react-router-dom";
export default function Home() {
    const [movieList, setMovieList] = useState<IMovie[]>([])
    const [query, setQuery] = useState<string>('');
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state);
        
    },[location])
    const changeQuery = (e: React.ChangeEvent) => {
        setQuery((e.target as HTMLInputElement).value);
    }
    useEffect(() => {
        MovieService.getList({query}).then(response => {
            setMovieList(response.dataList)
        })
    }, [query]);

    return <>
        <div style={{ display: 'inline-block',textAlign: 'center' }}>
            <input value={query} onChange={changeQuery}></input>
            <table border={1} >
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>上映地区</th>
                        <th>类型</th>
                        <th>描述</th>
                        <th>操作</th>

                    </tr>
                </thead>
                <tbody>
                    {movieList.map(({ name, areas, description, types,_id }) => {
                        return <tr key={name}>
                            <td width={100}>{name}</td>
                            <td width={100}>{areas}</td>
                            <td width={100}>{types}</td>
                            <td width={300} title={description} ><div style={{width:'300px',whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</div></td>
                            <td width={100}><Link to={'/detail/'+ _id}>详情</Link> 修改</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    </>
}