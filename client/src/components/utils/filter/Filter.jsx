function Filter() {
    return (
        <article>
            <label htmlFor="filterSelect">Filter by:</label>
            <select id="filterSelect" >
                <option value="default">Default</option>
                <option value="continente">Continente</option>
                <option value="actividad">Actividad turistica</option>
            </select>
        </article>
    )
}

export default Filter;