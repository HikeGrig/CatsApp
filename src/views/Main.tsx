import CatListBlock from '../components/CatList/CatListBlock';
import Content from '../components/styledComponents/Content';
import SidebarBlock from '../components/Sidebar/SidebarBlock';

const Main = () => {
    return (
        <Content>
            <SidebarBlock/>
            <CatListBlock/>
        </Content>
    );
};

export default Main;
