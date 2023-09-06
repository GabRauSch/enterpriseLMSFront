import styles from '@/styles/components/search/SearchBar.module.css'   

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