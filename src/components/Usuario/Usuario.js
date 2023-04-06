import "./Usuario.css"

export const Usuario = ({nombre, edad, nacionalidad})=>{
    return (
    <div>
        <h1 className="Name">Nombre: {nombre}</h1>
        <p>Edad: {edad}</p>
        <p>Nacionalidad: {nacionalidad}</p>
        <hr/>
    </div>
    )
}