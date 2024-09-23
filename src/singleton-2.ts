import { DBCredenciales } from "./types/singleton-2"

class ConexionDB {
    private static instancia: ConexionDB
    private connectState: boolean
    private host: string
    private port: number
    private user: string
    private password: string
    private name: string

    constructor(host: string, port: number, user: string, password: string, name: string) {
        this.host = host
        this.port = port
        this.user = user
        this.password = password
        this.name = name
        this.connectState = false
        this.startConexion()
    }

    public static obtenerInstancia(host: string, port: number, user: string, password: string, name: string): ConexionDB {
        if (!ConexionDB.instancia) {
            ConexionDB.instancia = new ConexionDB(host, port, user, password, name)
        }
        return ConexionDB.instancia
    }

    public startConexion(): void {
        this.connectState = true
        console.log("Conexión establecida");
    }

    public stopConexion(): void {
        this.connectState = false
        console.log("Conexión cerrada");
    }

    public getCredenciales(): DBCredenciales {
        return {
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            name: this.name
        }
    }

    public setCredenciales({host, port, user, password, name}: DBCredenciales) {
        this.stopConexion()
        if (host) this.host = host
        if (port) this.port = port
        if (user) this.user = user
        if (password) this.password = password
        if (name) this.name = name
        console.log("Credenciales actualizadas");
        this.startConexion()
    }
}

const conexion = ConexionDB.obtenerInstancia("localhost", 3306, "root", "root", "test")
conexion.setCredenciales({ password: "1234" })