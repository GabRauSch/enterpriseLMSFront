import styles from '@/styles/components/search/SearchFilter.module.css'
import { FilterOption } from './FilterOption'

export const SearchFilter = ()=>{
    return (
        <div className={styles.searchFilter}>
            <FilterOption name="setores" />
            <FilterOption name="tipo" />
            <FilterOption name="duração" />
            <FilterOption name="atualizado" />
            <FilterOption name="recomendados" />
        </div>
    )
}