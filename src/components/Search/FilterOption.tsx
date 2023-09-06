import styles from '@/styles/components/search/FilterOption.module.css';

type Props = {
    name: string
}
export const FilterOption = ({name}: Props)=>{
    return (
        <>
            <div className={styles.filterOption}>{name} <span>x</span></div>
        </>
    )
}
