/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         * TODO: Escreva um teste que faça um loop em cada feed
         * no objeto allFeeds e garante que ele tenha um URL definido
         * e que o URL não está vazio.
         */


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         TODO: escreve um teste que faz um loop em cada feed
        * no objeto allFeeds e garante que ele tenha um nome definido
        * e que o nome não está vazio.
        */
    });


     /* TODO: Write a new test suite named "The menu"
     TODO:Escreva um novo conjunto de testes chamado "O menu" 
    */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         * TODO: Escreva um teste que garanta que o elemento de menu seja
         * escondido por padrão. Você terá que analisar o HTML e
         * o CSS para determinar como estamos executando o
         * ocultação / exibição do elemento de menu.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          *TODO: Escreva um teste que garanta as mudanças no menu
          * visibilidade quando o ícone do menu é clicado. Esse teste
          * deve ter duas expectativas: o menu exibe quando
          * clicado e oculta quando clicado novamente.
          */

    /* TODO: Write a new test suite named "Initial Entries"
    Escreva um novo conjunto de testes chamado "Entradas Iniciais"
     */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         * TODO: Escreva um teste que garanta quando o loadFeed
         * função é chamada e completa seu trabalho, há pelo menos
         * um único elemento .entry dentro do contêiner .feed.
         * Lembre-se, loadFeed() é assíncrono, então esse teste exigirá
         * o uso da função beforeEach e assynchronous done() de Jasmine.
         */

    /* TODO: Write a new test suite named "New Feed Selection" 
    Escreva um novo conjunto de testes chamado "New Feed Selection"
    */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         * TODO: Escreva um teste que garanta quando um novo feed é carregado
         * pela função loadFeed que o conteúdo realmente muda.
         * Lembre-se, loadFeed () é assíncrono.
         */
}());
