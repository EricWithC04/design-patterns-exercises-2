import { NivelRegistro } from "./types/singleton-1";

class Configuracion {
    private static instancia: Configuracion;
    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: NivelRegistro;

    constructor() {
        this.idioma = "es";
        this.rutaBaseDatos = "/data";
        this.nivelRegistro = "INFO";
    }

    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    public getIdioma(): string {
        return this.idioma;
    }

    public setIdioma(idioma: string): void {
        this.idioma = idioma;
    }

    public getRutaBaseDatos(): string {
        return this.rutaBaseDatos;
    }

    public setRutaBaseDatos(rutaBaseDatos: string): void {
        this.rutaBaseDatos = rutaBaseDatos;
    }

    public getNivelRegistro(): string {
        return this.nivelRegistro;
    }

    public setNivelRegistro(nivelRegistro: NivelRegistro): void {
        this.nivelRegistro = nivelRegistro;
    }
}

const configuracion = Configuracion.obtenerInstancia()
console.log(configuracion.getIdioma());
configuracion.setIdioma("en");
console.log(configuracion.getIdioma());
console.log(configuracion.getNivelRegistro());
configuracion.setNivelRegistro("DEBUG");
console.log(configuracion.getNivelRegistro());