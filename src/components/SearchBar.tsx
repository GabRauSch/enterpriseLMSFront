import styles from '@/styles/SearchBar.module.css'   

export const SearchBar = ()=>{
    return (
        <>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Segura e aperta"/>
                <img src="mag-glass.png" width={'30px'} alt="mag-glass" />
            </div>
        </>
    )
}