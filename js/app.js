class App {
    constructor(pawn1, pawn12, pawn13, pawn2) {
        this.listOfPawns = [pawn1, pawn12, pawn13, pawn2]
        this.currentPlayer;
        this.currentPawn = null;
  

        for (let pawn of this.listOfPawns) {
            pawn.elem.addEventListener("click", (e) => {
                this.select(pawn);
            });
            pawn.refreshPos();
        }
        this.select(null);
    }

    select(selectedPawn) {
        for (let pawn of this.listOfPawns) {
            pawn.select(false)
        }
        if(selectedPawn != null) {
            if(selectedPawn == this.currentPawn) {
                this.currentPawn = null;
            }
            else {
                this.currentPawn = selectedPawn;
                selectedPawn.select(true);
            } 
        }
        else {
            this.currentPawn = null;
        }
    }

    refreshPlayersPos() {
        for (let pawn of this.listOfPawns) {
            pawn.refreshPos()
        }
    }
}