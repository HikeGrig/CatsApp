import React, {useEffect} from 'react';
import CatList from '../styledComponents/CatList';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import CatBlock from './CatBlock';
import { useParams } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';

interface ParamTypes {
    id: string | undefined
}

const CatListBlock: React.FC = () => {
    const {page, error, loading, cats, limit, loadingMore} = useTypedSelector(state => state.cats)
    const {fetchCats, loadMore} = useActions()
    const pages = [1, 2, 3, 4, 5]
    let { id } = useParams<ParamTypes>();

    useEffect(() => {
        if(id){
            fetchCats(page, limit, id)
        } else {
            fetchCats(page, limit, '')
        }
    }, [id])

    useEffect(() => {
        if(page != 1){
            if(id){
                loadMore(page, limit, id)
            } else {
                loadMore(page, limit, '')
            }
        }
    }, [page])


    if (loading) {
        return <FaSpinner/>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <CatList>
                {cats.map((cat, index) =>
                    <CatBlock key={index} imgUrl={cat.url} />
                )}
                {loadingMore && (
                    <FaSpinner/>
                )}
            </CatList>
        </>
    );
};

export default CatListBlock;


