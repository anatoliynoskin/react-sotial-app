import Item from "./Item";

const News = ({newsList}) => {
    return <main className={`wrapper`}>
        {newsList.map((itemData, key) => <Item key={key} data={itemData}/>)}
    </main>;
}

export default News;