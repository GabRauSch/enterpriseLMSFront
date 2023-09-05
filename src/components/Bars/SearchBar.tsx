import styles from '@/styles/SearchBar.module.css'   

export const SearchBar = ()=>{
    return (
        <>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscar"/>
                🔍
            </div>
        </>
    )
}