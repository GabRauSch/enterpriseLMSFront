type Props = {
    errorMessage: string,
    display: string
}

export const ErrorPanel = ({errorMessage, display}: Props)=>{
    return (
        <div className='errorPanel' style={{display: display}}>
            <div className='errorTitle'>Error:</div>
            <div className='errorDescription'>{errorMessage}</div>
        </div>
    )
}