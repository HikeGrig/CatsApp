import React, {useEffect} from 'react';
import Sidebar from '../styledComponents/Sidebar';
import NavLink from '../styledComponents/NavLink';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import { Link } from "react-router-dom";
import LoadMore from '../styledComponents/LoadMore';
import { FaSpinner } from 'react-icons/fa';

const SidebarBlock: React.FC = () => {
    const {categories, error, loading} = useTypedSelector(state => state.category)
    const {page} = useTypedSelector(state => state.cats)
    const {fetchCategories} = useActions()
    const { setCatPage} = useActions()

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleLoadMore = () => {
        setCatPage(page+1)
    }

    if (loading) {
        return <FaSpinner/>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Sidebar>
            {categories.map(category =>
                <NavLink key={category.id}>
                    <Link to={`/${category.id}`}>{category.name}</Link>
                </NavLink>
            )}
        <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        </Sidebar>
    );
};

export default SidebarBlock;


