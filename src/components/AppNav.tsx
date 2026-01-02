export function AppNav() {

    return (
        <>
            <nav id='nav'> {/* Search for a country...                Filter by Region */}
                <div>
                    <img /> {/* draw magnifying glass */}
                    <input id='input' placeholder='Search for a country...' /> {/* Search for a country... */}
                </div>
                <select id="select"> {/* Filter by Region */}
                    <option value='Filter by Region'>Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </nav>
        </>
    )
}