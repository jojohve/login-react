export const Main = () => {
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <table className="table">
                <thead>
                    <h3>Tabella Dashboard</h3>
                    <tr>
                        <th>Nome Appartamento</th>
                        <th>Occupazione</th>
                        <th>Prenotazioni</th>
                        <th>Recensioni</th>
                        <th>Andamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sandro Appartamenti Lussuriosi</td>
                        <td>67%</td>
                        <td>354</td>
                        <td>207</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>Vito con Vista</td>
                        <td>47%</td>
                        <td>234</td>
                        <td>167</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>Catapecchia in montagna</td>
                        <td>5%</td>
                        <td>10</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}