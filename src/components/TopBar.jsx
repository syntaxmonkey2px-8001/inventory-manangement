function NavMenu() {
    const navItem = ['asset', 'assignments', 'locations', 'reports', 'setting']

    return(
        <>
        {navItem.map((item)=> 
        <h4 key={item} className="nav-item">{item}</h4>
        )}
        </>
    )
}


export default function TopBar(navItem) {
    return (
        <div className="top-bar">
            <div className="hero">
                <h1>asset hub</h1>
                <p>it asset inventory</p>
            </div>
            <div className="nav-bar">
                <NavMenu item={navItem.item}/>
            </div>
        </div>
    )
}