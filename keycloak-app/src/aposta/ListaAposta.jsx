import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";


function ListaApostas() {

    const { keycloak, initialized } = useKeycloak();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (initialized && keycloak.authenticated) {
          fetch('http://localhost:8080/apostas', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${keycloak.token}`,
            },
          }).then(response => {
            return response.json();
          }).then(data => {
            setData(data);
          });
        }
      }, [initialized, keycloak]);

    return (
        <div>
            <table>
                <tr>
                    <td>Nome</td>
                    <td>Identificador</td>
                </tr>
                {data.map((aposta, index) => {
                    return <tr>
                        <td>{time.id}</td>
                        <td>{time.idPartida}</td>
                        <td>{time.dataAposta}</td>
                        <td>{time.resultado}</td>
                        <td>{time.valor}</td>
                        <td>{time.status}</td>

                    </tr>
                })}
            </table>
        </div>
    );

}

export default ListaApostas;