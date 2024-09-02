let votosCandidate1 = 0;
let votosCandidate2 = 0;
let votosCandidate3 = 0;
let votosCandidate4 = 0;
let votosCandidate5 = 0;
let votosCandidate6 = 0;
let votosCandidate7 = 0;
let votosCandidate8 = 0;

function votar(candidate) {
    switch (candidate) {
        case 1:
            votosCandidate1++;
            break;
        case 2:
            votosCandidate2++;
            break;
        case 3:
            votosCandidate3++;
            break;
        case 4:
            votosCandidate4++;
            break;
        case 5:
            votosCandidate5++;
            break;

        case 6:
            votosCandidate6++;
            break;
        case 7:
            votosCandidate7++;
            break;
        case 8:
            votosCandidate8++;
            break;

        default:
            alert("Candidate inválide!");
            break;
    }
    alert("Voto computado com sucesso!");
}

function mostrarResultado() {
    document.getElementById("votos1").textContent = `Candidato 1: ${votosCandidate1} votos`;
    document.getElementById("votos2").textContent = `Candidato 2: ${votosCandidate2} votos`;
    document.getElementById("votos3").textContent = `Candidato 3: ${votosCandidate3} votos`;
    document.getElementById("votos4").textContent = `Candidato 4: ${votosCandidate4} votos`;
    document.getElementById("votos5").textContent = `Candidato 5: ${votosCandidate5} votos`;
    document.getElementById("votos6").textContent = `Candidato 6: ${votosCandidate6} votos`;
    document.getElementById("votos7").textContent = `Candidato 7: ${votosCandidate7} votos`;
    document.getElementById("votos8").textContent = `Candidato 8: ${votosCandidate8} votos`;

    document.getElementById("resultado").style.display = "block";
}
