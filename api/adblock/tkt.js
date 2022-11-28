const adblock = "Attention AdBlock bloque le chargement du CSS et des images."
const adblock_off = "Veuillez désactivez AdBlock pour le bon fonctionnement du site."

console.log(adblock), alert(adblock)
console.warn(adblock_off);

const api = "Appel d'api fait."

console.log(api);

const mtn = "L'api est en maintenance."
const mtnt = true
const mon = "L'api n'est pas en maintenance."

const api2 = "Appel d'api fait."

if (mtnt === true) {
    console.warn(mtn)
} else {
    console.log(mon)
}