import './LinkButton.css'

const LinkButton = ({url, children}) => {
    return (
        <a href={url} className='linkButton' >
            {children}
        </a>
    )
}

export default LinkButton;