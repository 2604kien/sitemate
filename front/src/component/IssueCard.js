export default function IssueCard(props){
    return(
        <div>
            <h1>Id: {props.data.id}</h1>
            <h1>Title: {props.data.title}</h1>
            <h1>Description: {props.data.description}</h1>
        </div>
    )
}