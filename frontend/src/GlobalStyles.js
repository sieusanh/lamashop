
import { Link } from 'react-router-dom'

function MyLink({ children, to }) {
    return (
        <Link 
            style={{ 
                textDecoration: 'none', 
                color: '#000' 
            }} 
            to={to}
        >
            {children}
        </Link>
    )
}

export { MyLink }