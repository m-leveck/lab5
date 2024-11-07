alert("maddy was here!");

class Center extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define("x-center", Center);

class  Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Pink extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<dev style="color:Pink">${this.innerHTML}</dev>`
    }
}
customElements.define("x-pink", Pink);