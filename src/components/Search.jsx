import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.seachBox}>
                <input className={styles.searchInput}
                 type="text" value={search} 
                 onChange={(e)=>{
                    const value = e.target.value;
                    history.push("/?search=" + value);
                }}/>

                
                <FaSearch size={20}  color ="black"className={styles.searchButton}/>
                
            </div>
        </form>
    )
}
