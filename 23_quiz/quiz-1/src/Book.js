import bookImage from './demian.jpg'


const Book = (props) => {
    const {title, author, price, type} = props;

    return (
        <>
        <div style={{
            backgroundColor: "palegoldenrod",
            display: "inline-block",
            AlignContents: "center",
            width: "1000px"
        }}>
            <div>
                <h1>이번주 베스트셀러</h1>
            </div>
            <img src={bookImage} alt="book image"></img>
            <div>
                <h2>{title}</h2>
                <p>저자: {author}</p>
                <p>판매가: {price}</p>
                <p>구분: {type}</p>
            </div>
        </div>
        </>
    )
}

export default Book;