class Animal {
    constructor(private name: string = "No name...") {
    }

    move(meters: number): void {
        let messageLog = this.name + " moved " + meters + "m.";
        console.log(messageLog);
        ViewController.appendDivToBody(messageLog);
    }

    abbaglia(numero: number | string) {

    }
}

class Snake extends Animal {

    move(): void {
        console.log("Slithering...");
        ViewController.appendDivToBody("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move(meters: number) {
        console.log("Galloping...");
        ViewController.appendDivToBody("Galloping...");
        super.move(meters);
    }
}

class Dog extends Animal {
    move(meters: number) {
        console.log("Move...");
        ViewController.appendDivToBody("Move...");
        super.move(meters);
    }

    abbaglia(numero: number | string): void {
        let mess = "Bau " + numero;
        console.log(mess);
        ViewController.appendDivToBody(mess);
    }

}

class ViewController {
    static appendDivToBody(text: string) {
        let div = document.createElement("div");
        div.textContent = text;
        document.body.appendChild(div);
    }
}

var gio = new Snake("Giovanni the Snake");
var andrea: Animal = new Horse("Andrea the Horse");
var esposito: Animal = new Dog();

document.addEventListener('DOMContentLoaded', () => {
    gio.move();
    andrea.move(74);
    esposito.move(14);
    esposito.abbaglia(14);
});


