import axios from "axios";

export default async function Exemplopage() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
    const users = res.data;

    return (
        <main>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </main>
    )
}