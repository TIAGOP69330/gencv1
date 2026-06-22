function sauvegarder() {

    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let num = document.getElementById("num").value;
    let mail = document.getElementById("mail").value;
    let ville = document.getElementById("ville").value;
    let age = document.getElementById("age").value;

    localStorage.setItem("prenom", prenom);
    localStorage.setItem("nom", nom);
    localStorage.setItem("num", num);
    localStorage.setItem("mail", mail);
    localStorage.setItem("ville", ville);
    localStorage.setItem("age", age);


}

function sauvegarderObjectif(objectif) {

    localStorage.setItem("objectif", objectif);

}

function sauvegarderjesuis(jesuis) {

    localStorage.setItem("jesuis", jesuis);

}

function sauvegarderjesuisautre() {

    let jesuis = document.getElementById("jesuis").value;

    localStorage.setItem("jesuis",jesuis)
}

function sauvegarderdomaine(domaine) {

    localStorage.setItem("domaine", domaine);
}

function sauvegarderdomaineautre(){

    let domaine = document.getElementById("domaine").value;

    localStorage.setItem("domaine", domaine);


}

let qualites = [];

function ajouterqualitee(qualite, bouton) {

    if (qualites.includes(qualite)) {

        qualites = qualites.filter(q => q !== qualite);

        bouton.style.backgroundColor = "";

    }

    else {

        if (qualites.length < 3) {

            qualites.push(qualite);

            bouton.style.backgroundColor = "blue";

        }

        else {

            alert("Maximum 3 qualités");

        }

    }

    console.log(qualites);

    localStorage.setItem("qualites", JSON.stringify(qualites));

}

function sauvegarderToutesLesExperiences() {

    sauvegarderexperience(1);
    sauvegarderexperience(2);
    sauvegarderexperience(3);
    sauvegarderexperience(4);
    

}

function sauvegarderexperience(numero) {

    let entreprise = document.getElementById("entreprise" + numero).value;
    let poste = document.getElementById("poste" + numero).value;
    let duree = document.getElementById("duree" + numero).value;
    let mission = document.getElementById("mission" + numero).value;

    if (
        entreprise !== "" ||
        poste !== "" ||
        duree !== "" ||
        mission !== ""
    ) {

        localStorage.setItem("entreprise" + numero, entreprise);
        localStorage.setItem("poste" + numero, poste);
        localStorage.setItem("duree" + numero, duree);
        localStorage.setItem("mission" + numero, mission);

    }

}

const toutesLesLangues = [
    "Français", "Anglais", "Espagnol", "Allemand", "Italien",
    "Portugais", "Arabe", "Turc", "Russe", "Chinois",
    "Polonais", "Roumain", "Néerlandais", "Vietnamien",
    "Arménien", "Berbère", "Persan", "Hindi", "Japonais", "Coréen"
];

let langues = [];
let langueTemporaire = null;
let boutonTemporaire = null;

const listeLangues = document.getElementById("listeLangues");

if (listeLangues) {

    toutesLesLangues.forEach(function(langue) {

        const bouton = document.createElement("button");

        bouton.textContent = langue;

        bouton.onclick = function() {
            demanderNiveau(langue, this);
        };

        listeLangues.appendChild(bouton);

    });

}

function demanderNiveau(langue, bouton) {
    if (langues.length >= 5) {
        alert("Tu peux choisir maximum 5 langues.");
        return;
    }

    langueTemporaire = langue;
    boutonTemporaire = bouton;

    document.getElementById("zoneNiveau").style.display = "block";
    document.getElementById("titreNiveau").textContent =
        "Choisis ton niveau en " + langue;
}

function choisirNiveau(niveau) {
    if (!langueTemporaire) {
        alert("Choisis d'abord une langue.");
        return;
    }

    langues.push({
        langue: langueTemporaire,
        niveau: niveau
    });

    boutonTemporaire.disabled = true;

    afficherLanguesChoisies();

    langueTemporaire = null;
    boutonTemporaire = null;

    document.getElementById("zoneNiveau").style.display = "none";
}

function afficherLanguesChoisies() {
    const resultat = document.getElementById("resultat");

    resultat.innerHTML = "Langues choisies :<br>" + langues
        .map(function(item) {
            return item.langue + " - " + item.niveau;
        })
        .join("<br>");
}

function sauvegarderLanguesFinal() {
    localStorage.setItem("langues", JSON.stringify(langues));
    window.location.href = "formulaire8.html";
}

let interets = [];

function ajouterinterets(interet, bouton) {

    if (interets.includes(interet)) {

        interets = interets.filter(function(element) {
            return element !== interet;
        });

        bouton.style.backgroundColor = "";
        bouton.style.color = "";

    } else {

        if (interets.length >= 4) {
            alert("Maximum 4 centres d'intérêt");
            return;
        }

        interets.push(interet);

        bouton.style.backgroundColor = "blue";
        bouton.style.color = "white";
    }

    localStorage.setItem("interets", JSON.stringify(interets));

    console.log(interets);
}

function sauvegarderToutesLesformations() {


    sauvegarderformation(1);
    sauvegarderformation(2);
    sauvegarderformation(3);

}

function sauvegarderformation(numero) {

    let diplome = document.getElementById("diplome" + numero).value;
    let etablissement = document.getElementById("etablissement" + numero).value;
    let annee = document.getElementById("année" + numero).value;


    if (
        diplome !== "" ||
        etablissement !== "" ||
        annee !== ""
    ) {

        localStorage.setItem("diplome" + numero, diplome);
        localStorage.setItem("etablissement" + numero, etablissement);
        localStorage.setItem("annee" + numero, annee);

    }

}

let permis = [];

function ajouterPermis(typePermis, bouton) {

    if (permis.includes(typePermis)) {

        permis = permis.filter(function(p) {
            return p !== typePermis;
        });

        bouton.style.backgroundColor = "";
        bouton.style.color = "";

    } else {

        permis.push(typePermis);

        bouton.style.backgroundColor = "blue";
        bouton.style.color = "white";
    }

    localStorage.setItem("permis", JSON.stringify(permis));

    console.log(permis);
}

function recupererCV() {

    let cv = {

        prenom: localStorage.getItem("prenom"),
        nom: localStorage.getItem("nom"),
        num: localStorage.getItem("num"),
        mail: localStorage.getItem("mail"),
        ville: localStorage.getItem("ville"),
        age: localStorage.getItem("age"),

        objectif: localStorage.getItem("objectif"),
        jesuis: localStorage.getItem("jesuis"),
        domaine: localStorage.getItem("domaine"),

        qualites: JSON.parse(localStorage.getItem("qualites")) || [],
        langues: JSON.parse(localStorage.getItem("langues")) || [],
        interets: JSON.parse(localStorage.getItem("interets")) || [],
        permis: JSON.parse(localStorage.getItem("permis")) || [],

        disponibilite: {

    type: localStorage.getItem(
        "typeDisponibilite"
    ),

    dateDebut: localStorage.getItem(
        "dateDebut"
    ),

    datePeriodeDebut: localStorage.getItem(
        "datePeriodeDebut"
    ),

    datePeriodeFin: localStorage.getItem(
        "datePeriodeFin"
    )

},

        experiences: [
            {
                entreprise: localStorage.getItem("entreprise1"),
                poste: localStorage.getItem("poste1"),
                duree: localStorage.getItem("duree1"),
                mission: localStorage.getItem("mission1")
            },
            {
                entreprise: localStorage.getItem("entreprise2"),
                poste: localStorage.getItem("poste2"),
                duree: localStorage.getItem("duree2"),
                mission: localStorage.getItem("mission2")
            },
            {
                entreprise: localStorage.getItem("entreprise3"),
                poste: localStorage.getItem("poste3"),
                duree: localStorage.getItem("duree3"),
                mission: localStorage.getItem("mission3")
            },
            {
                entreprise: localStorage.getItem("entreprise4"),
                poste: localStorage.getItem("poste4"),
                duree: localStorage.getItem("duree4"),
                mission: localStorage.getItem("mission4")
            }
        ],

        formations: [
            {
                diplome: localStorage.getItem("diplome1"),
                etablissement: localStorage.getItem("etablissement1"),
                annee: localStorage.getItem("annee1")
            },
            {
                diplome: localStorage.getItem("diplome2"),
                etablissement: localStorage.getItem("etablissement2"),
                annee: localStorage.getItem("annee2")
            },
            {
                diplome: localStorage.getItem("diplome3"),
                etablissement: localStorage.getItem("etablissement3"),
                annee: localStorage.getItem("annee3")
            }
        ]

    };
cv.experiences = cv.experiences.filter(function(exp) {
    return exp.entreprise;
});

cv.formations = cv.formations.filter(function(form) {
    return form.diplome;
});
    return cv;
}

function sauvegarderDisponibilite() {

    let dateDebut =
        document.getElementById("dateDebut").value;

    let datePeriodeDebut =
        document.getElementById("datePeriodeDebut").value;

    let datePeriodeFin =
        document.getElementById("datePeriodeFin").value;

    if (dateDebut !== "") {

        localStorage.setItem(
            "typeDisponibilite",
            "a_partir"
        );

        localStorage.setItem(
            "dateDebut",
            dateDebut
        );

    }

    else if (
        datePeriodeDebut !== "" &&
        datePeriodeFin !== ""
    ) {

        localStorage.setItem(
            "typeDisponibilite",
            "periode"
        );

        localStorage.setItem(
            "datePeriodeDebut",
            datePeriodeDebut
        );

        localStorage.setItem(
            "datePeriodeFin",
            datePeriodeFin
        );

    }

}

function telechargerPDF() {
    let element = document.getElementById("cv");

    let options = {
        margin: 0,
        filename: "mon-cv.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ["avoid-all"]
        }
    };

    html2pdf().set(options).from(element).save();
}

function creerPhraseProfil(cv) {

    let secteur = domainePhrase(cv.domaine);

    if (cv.jesuis === "etudiant") {
        return "Étudiant intéressé par le domaine " + secteur +
            ", je recherche un " + cv.objectif +
            " afin de développer mes compétences et acquérir une expérience professionnelle concrète.";
    }

    if (cv.jesuis === "lyceen") {
        return "Lycéen intéressé par le domaine " + secteur +
            ", je recherche un " + cv.objectif +
            " afin de découvrir le monde professionnel et développer mes premières compétences.";
    }

    if (cv.jesuis === "jeune diplome") {
        return "Jeune diplômé dans le domaine " + secteur +
            ", je recherche un " + cv.objectif +
            " afin de mettre en pratique mes connaissances et débuter mon parcours professionnel.";
    }

    if (cv.jesuis === "en reconversion") {
        return "En reconversion vers le domaine " + secteur +
            ", je recherche un " + cv.objectif +
            " afin de développer de nouvelles compétences et construire un nouveau projet professionnel.";
    }

    return cv.jesuis +
        ", intéressé par le domaine " + secteur +
        ", recherche un " + cv.objectif + ".";
}