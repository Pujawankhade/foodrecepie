import style from './Receipe.module.css';
const Recipe = ({title,calories,img,ingredients}) =>{
return(
    <>
    <div className={style.recepie}>
    <p className={style.title}>{title}</p>
    <ol>
        
            {ingredients.map((item)=>(
                <li>{item.text}
                </li>
                ))}
        
    </ol>
    <p>{calories}</p>
    <img src={img} alt="img1"/>
    </div>
    </>
);
}
export default Recipe;