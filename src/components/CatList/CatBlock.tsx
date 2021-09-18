import React from 'react';
import CatImage from '../styledComponents/CatImage';
import CatItem from '../styledComponents/CatItem';

interface CatBlockProps {
    imgUrl: string;
}

const CatBlock: React.FC<CatBlockProps> = ({imgUrl}) => {
    return (
        <CatItem>
            <CatImage src={imgUrl}></CatImage>
        </CatItem>
    );
};

export default CatBlock;


