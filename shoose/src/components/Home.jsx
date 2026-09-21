import './home.css'

function Home(){
    return(
        <div className='main-section'>
            <div className='left-section'>
                <div className='letter'>
                    YOUR FEET <br /> DESERVE <br /> THE BEST
                </div>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia nulla deleniti aspernatur ea fugiat voluptatem porro </p>

                <div className='btn'>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <p>Also Available on</p>
                
                <div className='img-link'>

                <a href="https://www.flipkart.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeIAQUDw0ADjliIikrbTD7M4ty6t47DkPL4jakgyftA&s=10" alt="" /></a>

                <a href="https://www.amazon.in/s?k=boots+for+woman&crid=7HYOEEOH5DT5&sprefix=boot%2Caps%2C502&ref=nb_sb_ss_mvt-t11-ranker_2_4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv9aSUumg91vA_velzN9HIlOfcb1T_mrWssdPvB90zQ&s=10" alt="" /></a>

                </div>
            </div>
                
                
            <div className='right-section'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbekyceZARiogPsZ3-cZg2UX3ldLw9yj-8zMEZi_Og7w&s=10" alt="" />
            </div>
        </div>
    )
}

export default Home