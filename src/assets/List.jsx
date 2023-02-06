 
 import "/src/App.css"
 import  "./index.css"
 
 const List =(props)=>{
     
    const {list}=props;


return(
    <div className="flex_item" >
        <p className="unique_id">{list.id}</p>
        <h1 className="subject">{list.subject}</h1>
        <p className="body">{list.body}</p>
        <p className="views">{list.views_count}</p>
    </div>
)
 }
    

   

export default List