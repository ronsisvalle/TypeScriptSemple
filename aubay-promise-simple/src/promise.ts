class ViewController {
    static appendDivToBody(text: string | Array<any>) {
        let div = document.createElement("div");
        div.textContent = <string> text;
        document.body.appendChild(div);
    }
}

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        ViewController.appendDivToBody("Async Work Complete");
        resolve("OTTIMO");
    }, 1000);
});
var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        ViewController.appendDivToBody("Async Work2 Complete");
        resolve("PERFETTO");
    }, 2000);
});
promise2.then(
    (dataResp) => {
        ViewController.appendDivToBody("Success Promise 2 " + JSON.stringify(dataResp));
    },
    (error) => {
        console.log("Error", error);
    }
);
promise.then(
    (dataResp) => {
        ViewController.appendDivToBody("Success 1 " + JSON.stringify(dataResp));
    },
    (error) => {
        console.log("Error", error);
    }
);
promise.then(
    (dataResp) => {
        ViewController.appendDivToBody("Success 2 " + JSON.stringify(dataResp));
    },
    (error) => {
        console.log("Error", error);
    }
);
document.addEventListener('DOMContentLoaded', () => {
    ViewController.appendDivToBody("Inizio");
});

Promise.all([promise, promise2]).then(values => {
        ViewController.appendDivToBody(values);
    },
    (error) => {
        console.log("Error", error);
    });