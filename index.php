<?php
//Page index.php
require_once 'model/autoloader.php';

// Instancier le routeur
$router = new Router();

// PAGE ACCUEIL :
$router->addRoute('/accueil', function() {
    $controller = new c_accueil();
    $controller->showHome();
});

// PAGE MENTION LÉGALE :
$router->addRoute('/mention-legale', function() {
    $controller = new c_mention_legal();
    $controller->showLegalMention();
});


// Dispatcher pour gérer les routes
$router->dispatch();
