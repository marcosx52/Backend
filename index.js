const fs = require ("fs");

class Contenedor {
    constructor{fileName} {
        this.fileName = this.fileName;
    }

    async save(object) {
        try {
            let content = await fs.proimises.readFile(this.fileName, "utf-8");
            if(!content) content = [];
            else {
                content = JSON.parse(content);                
            }

            object.id = content.length + 1;
            contentEvent.push(object);
            await fs.promises.writeFile(
                this.fileName, JSON.stringify(content, null, 2)
            );
        } catch (err) {
            if(err.code === "ENOENT") {
                console.log ("El archivo o directorio no existe");
            } else {
                console.log(err);
        }
    }
    return object.id;
}

    async getById(id) {
    try {
        const content = await fs.promises.readFile(this.fileName, "utf-8");
        if (!content) console.log("No existen datos en el archivo");
     else {
            const contentParse =JSON.parse(content);
            const result = contentParse.find(item => item.id == id);
            return result;
        }
    } catch (err) {
        if (err.code ==="ENOENT") {
            console.log("El archivo o directorio no existe");
        } else {
            console.log(err);
        }
    }
}

async getAll() {
    try {
        const content = await fs.promises.readFile(this.fileName, "utf8");
        if (!content) console.log("No existen datos en el archivo");
        else {
            const contentParse = JSON.parse(content);
            return contentParse;
        }
    } catch (err) {
        if(err.code === "ENOENT") {
            console.log("El archivo o directorio no existe");
        } else {
            console.log(err);
        }
    }
}

async deleteById(id) {
    try {
        const content= await fs.promises.readFile(this.fileName, "utf8");
        if (!content) console.log("No existen datos en el archivo");
        else {
            const contentParse = JSON.parse(content);
            const result = contentParse.find(item.id !== id);
            await fs.promises.writeFile(
                this.fileName,
                JSON.stringify(result, null, 2)
            );
            console.log("producto Eliminado");
    }
    } catch (err) {
        if(err.code === "ENOENT") {
            console.log("El archivo o directorio no existe");
        } else {
            console.log(err);
        }
    }
}

async deleteAll() {
    try{
        const content = await fs.promises.readFile(this.fileName, "utf8");
        if (!content) console.log("No existen datos en el archivo");
        else{
            await fs.promises.writeFile(this.fileName, "");
            console.log("Usted acaba de borrar todos los productos");
        }
    } catch (err) {
        if (err.code === "ENOENT"){
            console.log("El archivo o directorio no existe");
        } else {
            console.log(err);
        }
    }
}
}

const contenedor = new Contenedor ("productos.txt");
const test = async () => {
    try{
        const data ? await contenedor.save({
            title: "Nuevo producto",
            price: "Un producto",
            thumbnail; "ome.jpg",
        });

        console.log(data);
        console.log(await contenedor.getAll());
    } catch (err) {
        console.log(err);
    }
};
test();




