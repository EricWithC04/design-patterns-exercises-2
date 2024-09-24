type DispositivoEntrada = "Teclado" | "Ratón" | "Scanner"

class Teclado {
    private tipoConexion: string;
    private marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipoConexion = tipoConexion
        this.marca = marca
    }

    public getInfo() {
        return `Dispositivo : Teclado - Tipo de Conexión: ${this.tipoConexion} - Marca: ${this.marca}`
    }

}

class Raton {
    private tipoConexion: string;
    private marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipoConexion = tipoConexion
        this.marca = marca
    }


    public getInfo() {
        return `Dispositivo : Ratón - Tipo de Conexión: ${this.tipoConexion} - Marca: ${this.marca}`
    }
}

class Scanner {
    private tipoConexion: string;
    private marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipoConexion = tipoConexion
        this.marca = marca
    }

    public getInfo() {
        return `Dispositivo : Scanner - Tipo de Conexión: ${this.tipoConexion} - Marca: ${this.marca}`
    }

}

class DispositivoEntradaFactory {

    public crearDispositivo(tipo: DispositivoEntrada, tipoConexion: string, marca: string) {
        if (tipo === "Teclado") {
            return new Teclado(tipoConexion, marca)
        } else if (tipo === "Ratón") {
            return new Raton(tipoConexion, marca)
        } else if (tipo === "Scanner") {
            return new Scanner(tipoConexion, marca)
        } else {
            throw new Error("Dispositivo no encontrado")
        }
    }

}

const DispositivosEntradaFactory = new DispositivoEntradaFactory()
const dispositivo1 = DispositivosEntradaFactory.crearDispositivo("Teclado", "USB", "Logitech")
const dispositivo2 = DispositivosEntradaFactory.crearDispositivo("Ratón", "Inalambrica", "Logitech")
const dispositivo3 = DispositivosEntradaFactory.crearDispositivo("Scanner", "USB", "HP")

console.log(dispositivo1.getInfo())
console.log(dispositivo2.getInfo())
console.log(dispositivo3.getInfo())