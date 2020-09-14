export default class Dialog{
    constructor(){
        this.dialog = undefined;
        this.trueButton = undefined;
        this.falseButton = undefined;

        this.createDialog();
    }

    confirm(){
        return new Promise((resolve) => {
            this.dialog.showModal();

            this.trueButton.addEventListener('click', () => {
                resolve(true);
                this.delete();
            });

            this.falseButton.addEventListener('click',() => {
                resolve(false);
                this.delete();
            });
        });
    }

    createDialog(){
        this.dialog = document.createElement('dialog');
        this.dialog.innerHTML = `
            <div class="dialog-question">Er du sikker?</div>
            <div class="dialog-button-group">
                <button class="dialog-button--false">No, nix nej.</button>
                <button class="dialog-button--true">Jeps!</button>
            </div>
        `;
        this.trueButton = this.dialog.querySelector('.dialog-button--true');
        this.falseButton = this.dialog.querySelector('.dialog-button--false');

        document.body.appendChild(this.dialog);
    }

    delete(){
        document.body.removeChild(this.dialog);
        delete this;
    }
}