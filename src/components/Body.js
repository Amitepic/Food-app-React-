import Card from "./Card";
import resList from "../utils/restdata";

const Body = () => {
    return (
        <div className='main-body'>
               <div className='search'>
                  <input type="text"  placeholder='Search what you want to eat' />
                  <button className='btn'>Seacrh</button>
               </div>
               <div className='card-container'>
                
                {resList.map( (restaurant) => (
                    <Card key={restaurant.data.id} resData={restaurant} />
                )) }


                
                  

                   
               </div>
        </div>
    );
};

export default Body;