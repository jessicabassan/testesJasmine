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
    describe('RSS Feeds', function() {
        // Valida que a variavel $allFeeds foi definida e não está vazia
        it('Feed deve estar definida e preenchida', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*  TODO: Escreva um teste que faça um loop em cada feed
            * no objeto allFeeds e garante que ele tenha um URL definido
            * e que o URL não está vazio.
            TODO: escreve um teste que faz um loop em cada feed
            * no objeto allFeeds e garante que ele tenha um NOME definido
            * e que o nome não está vazio.
        */
        var testeName = new TesteName();

        allFeeds.forEach(feed => {
            var feedName = feed.name,
                feedUrl = feed.url;

                beforeEach(function(done){
                    testeName(function(){
                        done();
                    });
                });
        
                it('Feed Nome completo e preenchido', function(done){
                    expect(feedName).toBeDefined();
                    expect(feedUrl.length).not.toBe(0);
                    done();
                });
        });

        
    });


    /* TODO:Escreva um novo conjunto de testes chamado "O menu" */
    describe('O menu', function() {
        /* TODO: Escreva um teste que garanta que o elemento de menu seja
         * escondido por padrão. Você terá que analisar o HTML e
         * o CSS para determinar como estamos executando o
         * ocultação / exibição do elemento de menu.
        */

        /* TODO: Escreva um teste que garanta as mudanças no menu
         * visibilidade quando o ícone do menu é clicado. Esse teste
         * deve ter duas expectativas: o menu exibe quando
         * clicado e oculta quando clicado novamente.
        */
    });

    /* TODO: Escreva um novo conjunto de testes chamado "Entradas Iniciais" */

    /* TODO: Escreva um teste que garanta quando o loadFeed
     * função é chamada e completa seu trabalho, há pelo menos
     * um único elemento .entry dentro do contêiner .feed.
     * Lembre-se, loadFeed() é assíncrono, então esse teste exigirá
     * o uso da função beforeEach e assynchronous done() de Jasmine.
    */

    /* TODO: Escreva um novo conjunto de testes chamado "New Feed Selection" */

    /* TODO: Escreva um teste que garanta quando um novo feed é carregado
     * pela função loadFeed que o conteúdo realmente muda.
     * Lembre-se, loadFeed () é assíncrono.
    */
}());
