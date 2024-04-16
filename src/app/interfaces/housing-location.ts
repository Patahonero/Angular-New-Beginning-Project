export interface HousingLocation {

/* //Luego le diremos en el componente Home que habrá un array de este tipo,esto es como 
los TAD de la carrera,yo declaro este tipo de dato,de objeto o colección de datos para 
usarlos luego en mi app como yo quiera*/

    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean,
}

