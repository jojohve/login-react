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
                        <th>Adr</th>
                        <th>RevPar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sandro Appartamenti Lussuriosi</td>
                        <td>67%</td>
                        <td>3%</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td>Vito con Vista</td>
                        <td>47%</td>
                        <td>6%</td>
                        <td>7%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}