export const SvgHoc = (OriginalComponent) => {
    const NewComponent = props => {
        const newProps = {
            width: '25px',
            height: '25px',
            ...props
        }
        return <>
            <OriginalComponent {...newProps} />
        </>
    }
    return NewComponent
}