function Card(props){
    return(
        <div className="parent">
           <div className="card">
             <img src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg" alt="" />

            <h1>{props.user}</h1>
            <h3>Age:{props.age}</h3>
            <p>Swapna is a little girl, with lots of unfullfilled dreams and a good mindset.</p>
            <button>Swapna</button>
           </div>
        </div>
    )
}
export default Card