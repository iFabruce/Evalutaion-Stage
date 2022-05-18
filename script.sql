create table blog(
    id serial primary key,
    titre varchar(50),
    description text,
    photo varchar(255),
    date date
);
create table faq(
    id serial primary key,
    question varchar(100),
    reponse text
);
create table responsable(
    id serial primary key,
    pseudo varchar(20),
    email varchar(20),
    mdp varchar(20)
);

INSERT INTO "Vehicules" values(default,'8723TP','Volkswagen','GT','legere',now(),now());
INSERT INTO "Vehicule" values(default,'8723TP','Volkswagen','GT',,'legere',now(),now());
INSERT INTO "Vehicule" values(default,'8723TP','Volkswagen','GT',,'legere',now(),now());


INSERT INTO "Admins" values(default,'admin','admin',now(),now());
INSERT INTO "Utilisateurs" values(default,'user1','user1','user1',now(),now());

INSERT INTO blog values(default,'manifestation des étudiants universitaires','Une manifestation a eu lieu hier autour de 18h près de la mairie pour alerter le gouvernement façe à la pollution de l"environnement','photo1','2022-05-16');
INSERT INTO blog values(default,'Covid et climat','Une étude récente menée par des scientifiques et climatologues a montré que une dégradation exponentielle de la couche d"ozone','photo1','2022-05-16');
INSERT INTO faq values(default,'Quel facteur majeur provoque le réchauffement climatique','Grâce aux scientifiques, on sait que ce sont principalement les émissions de gaz à effet de serre d’origine humaine qui influencent le climat.');

INSERT INTO faq values(default,'Queles sont les conséquences de ce réchauffement climatique','D’abord, une augmentation des températures à cause du réchauffement climatique affecte l’ensemble de l’écosystème mondial et pas seulement la chaleur ressentie. La météo s’en trouve perturbée, avec une augmentation des phénomènes météorologiques extrêmes, des changements des modèles météorologiques habituels.');
INSERT INTO faq values(default,'Suis je d"un part responsable du réchauffement climatique','On est tous responsable tant qu"on ne prend pas d"initiative pour protéger notre environnement');

